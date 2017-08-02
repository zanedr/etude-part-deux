process.env.NODE_ENV = 'test';
const environment = 'test';
const configuration = require('../knexfile')[environment];
const database = require('knex')(configuration);
const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../server.js');

chai.use(chaiHttp);

describe('API Routes', () => {
  before((done) => {
    database.migrate.latest()
    .then(() => {
      done();
    });
  });

  beforeEach((done) => {
    database.seed.run()
    .then(() => {
      done();
    });
  });

  describe('GET /api/v1/songs', () => {
    it('should return all songs in database', (done) => {
      chai.request(server)
      .get('/api/v1/songs')
      .end((err, response) => {
        response.should.have.status(200);
        response.should.be.json;
        response.body.should.be.a('array');
        response.body.length.should.equal(5);
        response.body[0].should.have.property('title');
        response.body[0].should.have.property('artist');
        response.body[0].should.have.property('timestamps');
        response.body[0].should.have.property('priority');
        response.body[0].should.have.property('audio');
        response.body[0].should.have.property('tab');
        done();
      });
    });

  it('should return a 404 and error message if no songs in database', (done) => {
      database.migrate.rollback()
      .then(() => database.migrate.latest())
      .then(() => {
        chai.request(server)
        .get('/api/v1/songs')
        .end((err, response) => {
          response.should.have.status(404);
          response.error.text.should.equal('No songs were found');
          done();
        });
      });
    });
  });

  describe('POST /api/v1/songs', () => {
    it('should add a new song to the database', (done) => {
      chai.request(server)
      .post('/api/v1/songs')
      .send({
        title: 'A Whole New World'
      })
      .end((err, response) => {
        response.should.have.status(201);
        response.body.should.be.a('object');
        response.body.should.have.property('success');
        response.body.success.should.equal('Song A Whole New World added to database.');
        done();
      });
    });
  });

  it('should return an error if title of song is missing', (done) => {
    chai.request(server)
    .post('/api/v1/songs')
    .send({
      title: ''
    })
    .end((err, response) => {
      response.should.have.status(422);
      response.body.should.be.a('object');
      response.body.should.have.property('error');
      response.body.error.should.equal('Please include a song title.');
      done();
    });
  });
});
