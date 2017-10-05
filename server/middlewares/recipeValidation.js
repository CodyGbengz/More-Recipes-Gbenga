import models from '../models/index';
import checkEmpty from '../helpers/checkEmpty';

const validateRecipe = {
  validateFields(req, res, next) {
    const title = req.body.title,
      description = req.body.description,
      ingredients = req.body.ingredients,
      directions = req.body.directions;

    if (checkEmpty(title) || !title) {
      return res.status(400).json({
        status: 'Fail',
        message: 'Please enter a valid title'
      });
    }
    if (checkEmpty(description) || !description) {
      return res.status(400).json({
        status: 'Fail',
        message: 'Please enter a short description'
      });
    }
    if (checkEmpty(ingredients) || !ingredients) {
      return res.status(400).json({
        status: 'Fail',
        message: 'Ingredients field cannot be empty'
      });
    }
    if (checkEmpty(directions) || !directions) {
      return res.status(400).json({
        status: 'Fail',
        message: 'Directions field cannot be empty'
      });
    }
    next();
  },
  recipeExist(req, res, next) {
    models.Recipe.find({
      where: { id: req.params.recipeId }
    })
      .then((recipe) => {
        if (!recipe) {
          return res.status(404).json({
            status: 'Fail',
            message: 'Recipe does not exist'
          });
        }
        next();
      })
      .catch(error => res.status(400).json({
        error: error.message
      }));
  }
};

export default validateRecipe;
