import models from '../models';

export default {
  add(req, res) {
    return models.Recipes
      .findById(req.body.recipeId)
      .then((recipe) => {
        if (!recipe) {
          return res.status(404).send({
            message: 'Recipe does not exists'
          });
        }
        models.favourites
          .create({
            userId: req.params.userId,
            recipeId: req.body.recipeId
          });
        return res.status(201).send({
          message: 'Recipe added to favourites successfully'
        });
      })
      .catch(error => res.status(400).send({
        message: error.message
      }));
  },
  fetch(req, res) {
    return models.favourites
      .findAll({ where: { userId: req.params.userId } })
      .then((favourites) => {
        res.status(200).send(favourites);
      })
      .catch(error => res.status(400).send({
        message: error.message
      }));
  }
};
