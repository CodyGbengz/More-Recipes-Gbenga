import models from '../models';

export default {
  add(req, res) {
    return models.Recipe
      .findById(req.params.recipeId)
      .then((recipe) => {
        if (!recipe) {
          return res.status(404).send({
            message: 'Recipe does not exists'
          });
        }
        models.Favorite
          .create({
            userId: req.body.userId,
            recipeId: req.params.recipeId
          });
        return res.status(201).send({
          message: 'Recipe add to favourites successfully'
        });
      })
      .catch(error => res.status(400).send({
        message: error.message
      }));
  },
  fetch(req, res) {
    return models.Favorite
      .findAll({ where: { userId: req.params.userId } })
      .then((favorite) => {
        res.status(200).send(favorite);
      })
      .catch(error => res.status(400).send({
        message: error.message
      }));
  }
};
