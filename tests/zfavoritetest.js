import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server/app';

const should = chai.should();
let token;
chai.use(chaiHttp);

describe('POST /api/users/signup', () => {
  it('creates a new user', (done) => {
    chai.request(app)
      .post('/api/users/signup')
      .type('form')
      .send({
        username: 'anotherusers',
        password: 'testpassword',
        email: 'newtests@user.com'
      })
      .end((err, res) => {
        res.status.should.be.eql(201);
        res.body.status.should.eql('success');
        res.body.message.should.eql('sign up successful');
        done();
      });
  });
});

describe('POST /api/users/signin', () => {
  it('signs in a registered user', (done) => {
    const testUser = {
      email: 'newtests@user.com',
      password: 'testpassword'
    };
    chai.request(app)
      .post('/api/users/signin')
      .type('form')
      .send(testUser)
      .end((err, res) => {
        token = res.body.token;
        res.status.should.be.eql(200);
        res.body.status.should.be.eql('success');
        res.body.message.should.be.eql('Sign in successful');
        done();
      });
  });
});

describe('GET /api/users/favorites', () => {
  it('returns 403 when no token is passed', (done) => {
    chai.request(app)
      .get('/api/users/favorites')
      .end((err, res) => {
        res.status.should.be.eql(403);
        res.body.message.should.be.eql('No token provided.');
        done();
      });
  });
  it('returns 404 when user has not added any favorites', (done) => {
    chai.request(app)
      .get('/api/users/favorites')
      .set('x-access-token', token)
      .end((err, res) => {
        res.status.should.be.eql(404);
        res.body.message.should.be.eql('Your list of favorite recipes is empty');
        done();
      });
  });
});

describe('POST /api/users/:recipeId/favorites', () => {
  it('returns status 404 for non-existing recipe', (done) => {
    chai.request(app)
      .post('/api/users/1000/favorites')
      .set('x-access-token', token)
      .type('form')
      .send({ category: 'breakfast' })
      .end((err, res) => {
        res.status.should.be.eql(404);
        res.body.message.should.be.eql('Recipe does not exist');
        done();
      });
  });
  it('returns status 400 when called with an invalid param', (done) => {
    chai.request(app)
      .post('/api/users/string/favorites')
      .set('x-access-token', token)
      .type('form')
      .send({ category: 'breakfast' })
      .end((err, res) => {
        res.status.should.be.eql(400);
        res.body.message.should.be.eql('Invalid params');
        done();
      });
  });
  it('adds a recipe to a users favorites', (done) => {
    chai.request(app)
      .post('/api/users/1/favorites')
      .set('x-access-token', token)
      .type('form')
      .send({ category: 'breakfast' })
      .end((err, res) => {
        res.status.should.be.eql(201);
        res.body.message.should.be.eql('Recipe added to favourites successfully');
        done();
      });
  });
});

describe('GET /api/users/favorites', () => {
  it('returns 200 when user has favorites', (done) => {
    chai.request(app)
      .get('/api/users/favorites')
      .set('x-access-token', token)
      .end((err, res) => {
        res.status.should.be.eql(200);
        done();
      });
  });
});
