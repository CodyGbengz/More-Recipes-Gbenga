import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server/app';

const should = chai.should();
let token;
chai.use(chaiHttp);

describe('POST /api/v1/users/signup', () => {
  it('signs in a registered user', (done) => {
    const testUser = {
      email: 'newtest@user.com',
      password: 'testpassword'
    };
    chai.request(app)
      .post('/api/v1/users/signin')
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

describe('POST /api/v1/recipes/:recipeId/reviews', () => {
  it('returns status 403 when no token is provided', (done) => {
    const reviewData = {
      userId: 2,
      recipeId: 1,
      content: 'A new review'
    };
    chai.request(app)
      .post('/api/v1/recipes/1/reviews')
      .type('form')
      .send(reviewData)
      .end((err, res) => {
        res.status.should.be.eql(403);
        res.body.status.should.eql('Fail');
        done();
      });
  });
  it('creates a new review', (done) => {
    const reviewData = {
      userId: 2,
      recipeId: 1,
      content: 'A new review'
    };
    chai.request(app)
      .post('/api/v1/recipes/1/reviews')
      .set('x-access-token', token)
      .type('form')
      .send(reviewData)
      .end((err, res) => {
        res.status.should.be.eql(201);
        res.body.status.should.eql('Success');
        res.body.message.should.eql('Review posted successfully');
        res.body.should.have.property('data');
        done();
      });
  });
  it('creates a new review', (done) => {
    const reviewData = {
      userId: 2,
      recipeId: 1,
    };
    chai.request(app)
      .post('/api/v1/recipes/1/reviews')
      .set('x-access-token', token)
      .type('form')
      .send(reviewData)
      .end((err, res) => {
        res.status.should.be.eql(400);
        res.body.status.should.eql('fail');
        done();
      });
  });
});
