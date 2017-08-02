const port = process.env.PORT || 8080
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');
const app = express();

// using webpack-dev-server and middleware in development environment
if(process.env.NODE_ENV !== 'production') {
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpack = require('webpack');
  const config = require('./webpack.config');
  const compiler = webpack(config);

  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'dist')));

// Serve index.html in dist folder
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/dist/index.html')
});

//**************GET REQUESTS***********************//
app.get('/api/v1/songs', (req, res) => {
  database('songs').select()
  .then(songs => {
    return songs.length ? res.status(200).json(songs) : res.status(404).send('No songs were found');
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

  database('songs').insert({title, artist, audio, tab, priority, timestamps}, 'id')
  .then((newSong) => {
    return res.status(201).send({
      success: `Song ${title} added to database.`,
    });
  })
  .catch(error => res.status(500).send(error));
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

  database('songs').where('id', id).select()
  .then(song => {
    if (!song.length) {
      return res.status(404).send({
        error: 'Song does not exist in database.'
      });
    } else {
      database('songs').where('id', song[0].id).update({
        'title': title,
        'artist': artist,
        'audio': audio,
        'tab': tab,
        'priority': priority,
        'timestamps': timestamps
      })
      .then((updatedSong) => {
        return res.status(201).send({
          success: `Song entitled ${title} updated to reflect changes.`
        });
      })
      .catch(error => res.status(500).send(error));
    }
  });
});

//**************DELETE REQUESTS***********************//
app.delete('/api/v1/songs', (req, res) => {
  const { artist, title } = req.body;

  database('songs').where({'artist': artist, 'title': title}).select()
  .then(song => {
    if (!song.length) {
      return res.status(404).send({
        error: 'Song does not exist in database.'
      });
    } else {
      database('songs').where('id', song[0].id).del()
      .then(() => {
        return res.status(200).send({
          success: `Song entitled ${title} has been deleted from database.`
        });
      })
      .catch(error => res.status(500).send(error));
    }
  });
});

app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", port, port);
  }
});

module.exports = app;
