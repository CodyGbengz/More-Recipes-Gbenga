import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server/app';

const should = chai.should();
let token;
chai.use(chaiHttp);

describe('POST /api/v1/users/signup', () => {
  it('creates a new user', (done) => {
    chai.request(app)
      .post('/api/v1/users/signup')
      .type('form')
      .send({
        username: 'anotheruser',
        password: 'testpassword',
        email: 'newtest@user.com'
      })
      .end((err, res) => {
        res.status.should.be.eql(201);
        res.body.status.should.eql('success');
        res.body.message.should.eql('sign up successful');
        done();
      });
  });
});

describe('POST /api/v1/users/signin', () => {
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
      .post('/api/v1/recipe')
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
      .post('/api/v1/recipe')
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
      .post('/api/v1/recipe')
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
      .post('/api/v1/recipe')
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
      .post('/api/v1/recipe')
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
  it('rejects entry with missing directions field', (done) => {
    const testRecipe = {
      userId: 1,
      title: 'A testing recipe',
      description: 'A short description about this recipe',
      ingredients: 'take a deep breadth, take one to the head',
    };
    chai.request(app)
      .post('/api/v1/recipe')
      .set('x-access-token', token)
      .type('form')
      .send(testRecipe)
      .end((err, res) => {
        res.status.should.be.eql(400);
        res.body.status.should.be.eql('Fail');
        res.body.message.should.be.eql('Directions field cannot be empty');
        done();
      });
  });
});

describe('Update recipe ', () => {
  it('checks that valid params is passed ', (done) => {
    const testRecipe = {
      title: 'An updated recipe',
      description: 'A short description about this recipe',
      ingredients: '1 cup of ice, 2 shots of vodka',
      directions: 'take a deep breadth, take one to the head',
    };
    chai.request(app)
      .put('/api/v1/recipes/string')
      .set('x-access-token', token)
      .type('form')
      .send(testRecipe)
      .end((err, res) => {
        res.status.should.be.eql(400);
        res.body.message.should.be.eql('Invalid params');
        done();
      });
  });
  it('checks non existing recipe', (done) => {
    const testRecipe = {
      title: 'An updated recipe',
      description: 'A short description about this recipe',
      ingredients: '1 cup of ice, 2 shots of vodka',
      directions: 'take a deep breadth, take one to the head',
    };
    chai.request(app)
      .put('/api/v1/recipes/5')
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
      .put('/api/v1/recipes/1')
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
describe('Fetch recipes', () => {
  it('returns a list of all recipes', (done) => {
    chai.request(app)
      .get('/api/v1/recipes')
      .end((err, res) => {
        res.status.should.be.eql(200);
        res.body.recipes.rows.should.be.a('array');
        done();
      });
  });
});

describe('Fetch a user"s recipes', () => {
  it('returns no token provided when no token is passed', (done) => {
    chai.request(app)
      .get('/api/v1/recipes/users')
      .end((err, res) => {
        res.body.message.should.be.eql('No token provided.');
        done();
      });
  });
  it('returns an empty list for a user without recipes', (done) => {
    chai.request(app)
    .get('/api/v1/recipes/users')
    .set('x-access-token', token)
    .end((err, res) => {
      res.body.recipes.rows.length.should.be.eql(1);
      done();
    });
  });
});

describe('Fetch a single recipe"s details', () => {
  it('returns recipe does not exist for a non existing recipe', (done) => {
    const params = 1000;
    chai.request(app)
      .get(`/api/v1/recipes/${params}`)
      .set('x-access-token', token)
      .end((err, res) => {
        res.status.should.be.eql(404);
        res.body.message.should.be.eql('Recipe does not exist');
        done();
      });
  });
  it('returns Invalid params when called with params that is not a number', (done) => {
    const params = 'string';
    chai.request(app)
      .get(`/api/v1/recipes/${params}`)
      .set('x-access-token', token)
      .end((err, res) => {
        res.status.should.be.eql(400);
        res.body.message.should.be.eql('Invalid params');
        done();
      });
  });
  it('returns Invalid params when called with params that is not a number', (done) => {
    const params = 'dd';
    chai.request(app)
      .get(`/api/v1/recipes/${params}`)
      .set('x-access-token', token)
      .end((err, res) => {
        res.status.should.be.eql(400);
        res.body.message.should.be.eql('Invalid params');
        done();
      });
  });
  it('returns status 200', (done) => {
    const params = 1;
    chai.request(app)
      .get(`/api/v1/recipes/${params}`)
      .set('x-access-token', token)
      .end((err, res) => {
        res.status.should.be.eql(200);
        res.body.status.should.be.eql('success');
        done();
      });
  });
  it('returns status 200', (done) => {
    const params = 1;
    chai.request(app)
      .get(`/api/v1/recipes/${params}`)
      .set('x-access-token', token)
      .end((err, res) => {
        res.status.should.be.eql(200);
        res.body.status.should.be.eql('success');
        res.body.recipe.should.be.a('object');
        res.body.recipe.should.have.property('title');
        res.body.recipe.should.have.property('description');
        done();
      });
  });
});

describe('Search recipes', () => {
  it('returns a list of matched recipes', (done) => {
    const searchTerm = 'An updated recipe';
    chai.request(app)
      .get(`/api/v1/recipes?search=${searchTerm}`)
      .end((err, res) => {
        res.status.should.be.eql(200);
        done();
      });
  });
  it('returns no matches found when search term does not match any recipe ', (done) => {
    const searchTerm = 'xxxxx';
    chai.request(app)
      .get(`/api/v1/recipes?search=${searchTerm}`)
      .end((err, res) => {
        res.status.should.be.eql(200);
        res.body.message.should.be.eql('No matches found');
        done();
      });
  });
});
