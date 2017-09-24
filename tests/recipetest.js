import chai from 'chai';
import should from 'should';
import chaiHttp from 'chai-http';
import app from '../server/app';
import models from '../server/models/index';

let token;
chai.use(chaiHttp);

models.User.destroy({
  where: {},
  cascade: true,
  truncate: true,
  restartIdentity: true

});

describe('Sign in user', () => {
  it('POST /api/users/signup creates a new user', (done) => {
    chai.request(app)
      .post('/api/users/signup')
      .type('form')
      .send({
        username: 'anotheruser',
        password: 'testpassword',
        email: 'newtest@user.com'
      })
      .end((err, res) => {
        res.status.should.be.eql(201);
        res.body.data.email.should.eql('newtest@user.com');
        res.body.data.username.should.eql('anotheruser');
        done();
      });
  });
  it('signs in a registered user', (done) => {
    const testUser = {
      email: 'newtest@user.com',
      password: 'testpassword'
    };
    chai.request(app)
      .post('/api/users/signin')
      .type('form')
      .send(testUser)
      .end((err, res) => {
        token = res.body.Token;
        res.status.should.be.eql(200);
        res.body.status.should.be.eql('success');
        res.body.message.should.be.eql('Sign in successful');
        done();
      });
  });
});
describe('Creates recipes ', () => {
  it('check authorization recipe', (done) => {
    const testRecipe = {
      userId: 1,
      title: 'A testing recipe',
      description: 'A short description about this recipe',
      ingredients: '1 cup of ice, 2 shots of vodka',
      directions: 'take a deep breadth, take one to the head',
    };
    chai.request(app)
      .post('/api/recipes')
      .type('form')
      .send(testRecipe)
      .end((err, res) => {
        res.status.should.be.eql(403);
        res.body.status.should.be.eql('Fail');
        res.body.message.should.be.eql('No token provided.');
        done();
      });
  });
  it('creates a new recipe', (done) => {
    const testRecipe = {
      userId: 1,
      title: 'A testing recipe',
      description: 'A short description about this recipe',
      ingredients: '1 cup of ice, 2 shots of vodka',
      directions: 'take a deep breadth, take one to the head',
    };
    chai.request(app)
      .post('/api/recipes')
      .set('x-access-token', token)
      .type('form')
      .send(testRecipe)
      .end((err, res) => {
        res.status.should.be.eql(201);
        res.body.status.should.be.eql('success');
        res.body.message.should.be.eql('Recipe created successfully');
        done();
      });
  });
  it('rejects entry with missing title field', (done) => {
    const testRecipe = {
      userId: 1,
      description: 'A short description about this recipe',
      ingredients: '1 cup of ice, 2 shots of vodka',
      directions: 'take a deep breadth, take one to the head',
    };
    chai.request(app)
      .post('/api/recipes')
      .set('x-access-token', token)
      .type('form')
      .send(testRecipe)
      .end((err, res) => {
        res.status.should.be.eql(400);
        res.body.status.should.be.eql('Fail');
        res.body.message.should.be.eql('Please enter a valid title');
        done();
      });
  });
  it('rejects entry with missing description field', (done) => {
    const testRecipe = {
      userId: 1,
      title: 'A testing recipe',
      ingredients: '1 cup of ice, 2 shots of vodka',
      directions: 'take a deep breadth, take one to the head',
    };
    chai.request(app)
      .post('/api/recipes')
      .set('x-access-token', token)
      .type('form')
      .send(testRecipe)
      .end((err, res) => {
        res.status.should.be.eql(400);
        res.body.status.should.be.eql('Fail');
        res.body.message.should.be.eql('Please enter a short description');
        done();
      });
  });
  it('rejects entry with missing ingredients field', (done) => {
    const testRecipe = {
      userId: 1,
      title: 'A testing recipe',
      description: 'A short description about this recipe',
      directions: 'take a deep breadth, take one to the head',
    };
    chai.request(app)
      .post('/api/recipes')
      .set('x-access-token', token)
      .type('form')
      .send(testRecipe)
      .end((err, res) => {
        res.status.should.be.eql(400);
        res.body.status.should.be.eql('Fail');
        res.body.message.should.be.eql('Ingredients field cannot be empty');
        done();
      });
  });
});
describe('Updates recipes ', () => {
  it('check non existing recipe', (done) => {
    const testRecipe = {
      title: 'An updated recipe',
      description: 'A short description about this recipe',
      ingredients: '1 cup of ice, 2 shots of vodka',
      directions: 'take a deep breadth, take one to the head',
    };
    chai.request(app)
      .put('/api/recipes/5')
      .set('x-access-token', token)
      .type('form')
      .send(testRecipe)
      .end((err, res) => {
        res.status.should.be.eql(404);
        res.body.status.should.be.eql('Fail');
        res.body.message.should.be.eql('Recipe does not exist');
        done();
      });
  });
  it('updates an existing recipe', (done) => {
    const testRecipe = {
      title: 'An updated recipe',
      description: 'A short description about this recipe',
      ingredients: '1 cup of ice, 2 shots of vodka',
      directions: 'take a deep breadth, take one to the head',
    };
    chai.request(app)
      .put('/api/recipes/1')
      .set('x-access-token', token)
      .type('form')
      .send(testRecipe)
      .end((err, res) => {
        res.status.should.be.eql(200);
        res.body.status.should.be.eql('success');
        res.body.recipe.title.should.be.eql('An updated recipe');
        done();
      });
  });
});

