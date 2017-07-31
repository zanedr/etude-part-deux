var path = require('path');
var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080

// using webpack-dev-server and middleware in development environment
if(process.env.NODE_ENV !== 'production') {
  var webpackDevMiddleware = require('webpack-dev-middleware');
  var webpackHotMiddleware = require('webpack-hot-middleware');
  var webpack = require('webpack');
  var config = require('./webpack.config');
  var compiler = webpack(config);

  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));
}

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);


app.use(express.static(path.join(__dirname, 'dist')));

// Serve index.html in dist folder
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/dist/index.html')
});

//**************GET REQUESTS***********************//
app.get('/api/v1/songs', (req, res) => {

  database('songs').select()
  .then(songs => {
    songs.length ? res.status(200).json(songs) : res.status(404).send('No songs were found');
  })
  .catch(error => res.status(500).send(error));
});

//**************POST REQUESTS***********************//
app.post('/api/v1/songs', (req, res) => {
  const title = req.body.title
  const artist = req.body.artist || '';
  const audio = req.body.audio || '';
  const tab = req.body.tab || '';
  const priority = req.body.priority || 5;
  const timestamps = req.body.timestamps || '';
 
  if(!title.length) {
    return res.status(422).send({
        error: 'Please include a song title.',
    });
  }
  database('songs').insert({ title,
    artist, timestamps, audio, tab, priority},
    'id')
  .then((newArtist) => {
    return res.status(201).send({
      success: `Song ${title} added to database.`,
    });
  });
});

//**************PATCH REQUESTS***********************//

app.patch('/api/v1/songs', (req, res) => {
  const title = req.body.title
  const artist = req.body.artist || '';
  const audio = req.body.audio || '';
  const tab = req.body.tab || '';
  const priority = req.body.priority || 5;
  const timestamps = req.body.timestamps || '';
  const id = req.body.id;

  database('songs').where('id', id)
    .update('title', title)
    .update('artist', artist)
    .update('audio', audio)
    .update('tab', tab)
    .update('priority', priority)
    .update('timestamps', timestamps)
    .then(() => {
      return res.status(201).send({
        success: `Song entitled ${title} updated to reflect changes.`
      })
    })
});

//**************DELETE REQUESTS***********************//
app.delete('/api/v1/songs', (req, res) => {
  const title = req.query.title;

  database('songs').where('title', title).del()
  .then(() => {
    return res.status(204).send({
      success: `Song entitled ${title} has been deleted from database`,
    });
  })
    .catch(() => {
      return res.status(500);
    });
});

app.listen(PORT, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  }
});

module.exports = app;
