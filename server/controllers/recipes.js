import models from '../models';

export default {
  add(req, res) {
    return models.Recipes
      .create({
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

  fetch(req, res) {
    return models.Recipes
      .all()
      .then(recipes => res.status(200).send(recipes))
      .catch(error => res.status(400).send({
        message: error.message
      }));
  },

  update(req, res) {
    return models.Recipes
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
          }))
          .catch(error => res.status(400).send({
            message: error.message
          }));
      });
  } };
