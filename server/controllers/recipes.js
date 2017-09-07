import models from '../models';

export default {
  add(req, res) {
    return models.Recipe
      .create({
        userId: req.body.userId,
        title: req.body.title,
        description: req.body.description,
        ingredients: req.body.ingredients,
        directions: req.body.directions
      })
      .then(recipe => res.status(201).send({
        id: recipe.id,
        title: recipe.title,
        description: recipe.description,
        message: 'recipe created successfully'
      }))
      .catch(error => res.status(400).send({
        error: error.message
      }));
  },

  fetch(req, res, next) {
    if (req.query.sort) return next();
    return models.Recipe
      .all()
      .then(recipe => res.status(200).send(recipe))
      .catch(error => res.status(400).send({
        message: error.message
      }));
  },

  update(req, res) {
    return models.Recipe
      .findById(req.params.recipeId)
      .then((recipe) => {
        if (!recipe) {
          return res.status(404).send({
            message: 'Recipe not found',
          });
        }
        return recipe
          .update({
            title: req.body.title || recipe.title,
            description: req.body.description || recipe.description,
            ingredients: req.body.ingredients || recipe.ingredients,
            directions: req.body.directions || recipe.direction
          })
          .then(() => res.status(200).send(recipe))
          .catchh(error => res.status(400).send({
            message: error.message
          }));
      })
      .catch(error => res.status(400).send({
        message: error.message
      }));
  },

  destroy(req, res) {
    return models.Recipe
      .findById(req.params.recipeId)
      .then((recipe) => {
        if (!recipe) {
          return res.status(400).send({
            message: 'Recipe not found'
          });
        }
        return recipe
          .destroy()
          .then(() => res.status(204).send({
            message: 'Recipe deleted successfully'
          }))
          .catch(error => res.status(400).send({
            message: error.message
          }));
      })
      .catch(error => res.status(400)
        .send({
          message: error.message
        }));
  },
  fetchTopRecipes(req, res) {
    const sort = req.query.sort;
    const order = req.query.order;
    return models.Recipe
      .findAll({
        attributes: ['title', 'ingredients', 'description', 'directions', 'upvotes', 'downvotes'],
        order: [[sort, order]],
        limit: 5
      })
      .then(recipes => res.status(200).json(recipes))
      .catch(error => res.status(400).json({
        message: error.message
      }));
  }
};
