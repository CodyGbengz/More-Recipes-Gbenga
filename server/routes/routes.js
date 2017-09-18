import express from 'express';
import winston from 'winston';
import controllers from '../controllers/index';
import validateUser from '../middlewares/userValidations';

winston.log(validateUser);

const router = express.Router();

// route for user sign up
router.post('/api/users/signup', validateUser.validateFields, validateUser.validateEmail, controllers.User.create);
// route for user sign in
router.post('/api/users/signin', controllers.User.signin);

// authentication middleware
router.use((req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.send({
      message: 'Please sign in'
    });
  }
});
// route for get users
router.get('/api/users', controllers.User.fetch);

// route for add recipe
router.post('/api/recipes', controllers.Recipe.add);

// route for get recipes
router.get('/api/recipes', controllers.Recipe.fetch, controllers.Recipe.fetchTopRecipes);

// route for update recipe
router.put('/api/recipes/:recipeId', controllers.Recipe.update);

// route for delete recipe
router.delete('/api/recipes/:recipeId', controllers.Recipe.destroy);

// route for posting a review
router.post('/api/recipes/:recipeId/reviews', controllers.Review.add);

// route for adding to favorites
router.post('/api/users/:userId/recipes', controllers.Favorite.add);

// route for getting favorites
router.get('/api/users/:userId/recipes', controllers.Favorite.fetch);

// route for upvoting
router.put('/api/recipes/:recipeId/upvote', controllers.Vote.upvote);

// route for downvoting
router.put('/api/recipes/:recipeId/downvote', controllers.Vote.downvote);


// route for logged in user sign out
router.post('/signout', (req, res) => {
  req.session.destroy();
  res.send({
    message: 'User signed out Successfully'
  });
});


// error handlers

export default router;
