import models from '../models';

export default {
  addUserFavorites(req, res) {
    return models.Recipe
      .findById(req.params.recipeId)
      .then((recipe) => {
        if (!recipe) {
          return res.status(404).json({
            message: 'Recipe does not exists'
          });
        }
        models.Favourite
          .create({
            userId: req.decoded.user.id,
            recipeId: req.params.recipeId,
            category: req.body.category
          });
        return res.status(201).json({
          status: 'Success',
          message: 'Recipe added to favourites successfully'
        });
      })
      .catch(error => res.status(400).send({
        message: error.message
      }));
  },
  fetchUserFavorites(req, res) {
    return models.Favourite
      .findAll({ where: { userId: req.decoded.user.id } })
      .then((favourite) => {
        if (!favourite.length) {
          res.status(200).json({
            message: 'Your list of favorite recipes is empty'
          });
        }
        res.status(200).json(favourite);
      })
      .catch(error => res.status(400).json({
        status: 'Fail',
        message: error.message
      }));
  },
  deleteUserFavourite(req, res) {
    return models.Favourite
      .findOne({ where: {
        userId: req.decoded.user.id,
        recipeId: req.params.recipeId } })
      .then((favourite) => {
        favourite.destroy().then(() => res.status(200).json({
          status: 'Success',
          message: 'Recipe deleted from your favourites successfully'
        }));
      })
      .catch(error => res.status(400).json({
        status: 'Fail',
        message: error.message
      }));
  }
};
