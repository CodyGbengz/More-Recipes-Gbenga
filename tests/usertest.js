import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server/app';
import models from '../server/models';

const should = chai.should();
chai.use(chaiHttp);

models.User.destroy({
  where: {},
  cascade: true,
  truncate: true,
  restartIdentity: true

});

models.Vote.destroy({
  where: {}
});

describe('test API routes', () => {
  describe('User sign up route', () => {
    it('POST /api/v1/user/signup creates a new user', (done) => {
      chai.request(app)
        .post('/api/v1/user/signup')
        .type('form')
        .send({
          username: 'iamanewuser',
          password: 'testpassword',
          email: 'test@user.com'
        })
        .end((err, res) => {
          res.status.should.be.eql(201);
          res.body.status.should.eql('success');
          res.body.message.should.eql('sign up successful');
          done();
        });
    });
    it('returns error message when called without an email address', (done) => {
      chai.request(app)
        .post('/api/v1/user/signup')
        .type('form')
        .send({
          username: 'iamanewuser',
          password: 'testpassword',
        })
        .end((err, res) => {
          res.body.message.should.eql('Please enter a valid email');
          done();
        });
    });
    it('returns error message when called without a password', (done) => {
      chai.request(app)
        .post('/api/v1/user/signup')
        .type('form')
        .send({
          username: 'iamanewuser1',
          email: 'test1@user.com'
        })
        .end((err, res) => {
          res.body.message.should.eql('Please Enter a password with atleast 6 characters');
          done();
        });
    });
    it('returns error message when called without a username', (done) => {
      chai.request(app)
        .post('/api/v1/user/signup')
        .type('form')
        .send({
          email: 'test2@user.com',
          password: 'testpassword'
        })
        .end((err, res) => {
          res.body.message.should.eql('Enter a username with atleast 6 characters');
          done();
        });
    });
    it('returns 409 error for duplicate email ', (done) => {
      chai.request(app)
        .post('/api/v1/user/signup')
        .type('form')
        .send({
          username: 'newusername',
          email: 'test@user.com',
          password: 'testpassword'
        })
        .end((err, res) => {
          res.status.should.be.eql(409);
          done();
        });
    });
  });
  describe('User sign in route', () => {
    it('returns error message when called without a password', (done) => {
      chai.request(app)
        .post('/api/v1/user/signin')
        .type('form')
        .send({
          email: 'test@user.com'
        })
        .end((err, res) => {
          res.status.should.be.eql(400);
          res.body.message.should.eql('Please Enter a password with atleast 6 characters');
          done();
        });
    });
    it('returns error messagge when called with invalid password or email', (done) => {
      chai.request(app)
        .post('/api/v1/user/signin')
        .type('form')
        .send({
          email: 'test@use.com',
          password: 'testpasswod'
        })
        .end((err, res) => {
          res.status.should.be.eql(500);
          res.body.status.should.be.eql('fail');
          res.body.message.should.be.eql('You have not created an account yet.');
          done();
        });
    });
  });
});
