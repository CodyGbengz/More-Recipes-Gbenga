import chai from 'chai';
import should from 'should';
import chaiHttp from 'chai-http';
import app from '../server/app';
import models from '../server/models';


process.env.NODE_ENV = 'test';

chai.use(chaiHttp);

models.Users.destroy({
  where: {},
  cascade: true,
  truncate: true
});

describe('test app', () => {
  describe('create user: ', () => {
    it('POST /api/users/signup creates a new user', (done) => {
      chai.request(app)
        .post('/api/users/signup')
        .type('form')
        .send({
          username: 'iamanewuser',
          password: 'testpassword',
          email: 'test@user.com'
        })
        .end((err, res) => {
          res.status.should.be.eql(201);
          res.body.email.should.eql('test@user.com');
          done();
        });
    });
  });
});

