import models from '../models';

const { Favourite, Recipe, User } = models;

export default {
  addUserFavorites(req, res) {
    return Favourite
      .findOne({
        where: {
          userId: req.decoded.id,
          recipeId: req.params.recipeId
        }
      }).then((favorite) => {
        if (favorite) {
          return res.status(404).json({
            status: 'Fail',
            message: 'You have already added this recipe to your favorites'
          });
        }
        Favourite
          .create({
            userId: req.decoded.id,
            recipeId: req.params.recipeId,
            category: req.body.category
          }).then(recipe => res.status(201).json({
            status: 'Success',
            message: 'Recipe added to favourites successfully',
            recipe
          })).catch(() => res.status(400).json({
            status: 'Fail',
            message: 'An error occured while processing your request'
          }));
      }).catch(() => res.status(400).json({
        status: 'Fail',
        message: 'An error occured while processing your request'
      }));
  },

  fetchUserFavorites(req, res) {
    return Favourite
      .findAll({
        where: { userId: req.decoded.id },
        include: [{
          model: Recipe
        },
        {
          model: User,
          attributes: ['username']
        }]
      })
      .then((favourites) => {
        if (favourites.length <= 0) {
          res.status(404).json({
            message: 'Your list of favorite recipes is empty'
          });
        }
        res.status(200).json({
          status: 'Success',
          favourites
        });
      })
      .catch(() => res.status(400).json({
        status: 'Fail',
        message: 'An error occured while processing your request'
      }));
  },
  deleteUserFavourite(req, res) {
    return Favourite
      .findOne({ where: {
        userId: req.decoded.id,
        recipeId: req.params.recipeId } })
      .then((favourite) => {
        favourite.destroy().then(() => res.status(200).json({
          status: 'Success',
          message: 'Recipe deleted from your favourites successfully'
        }));
      })
      .catch(() => res.status(400).json({
        status: 'Fail',
        message: 'An error occured while processing your request'
      }));
  },
  addToCategory(req, res) {
    return Favourite
      .findOne({ where: {
        userId: req.decoded.id,
        recipeId: req.params.recipeId } })
      .then((recipe) => {
        recipe.update({ category: req.body.category || recipe.category })
          .then(() => {
            res.status(200).json({
              status: 'Success',
              message: 'Recipe add to category'
            });
          });
      })
      .catch(() => res.status(400).json({
        status: 'Fail',
        message: 'An error occured while processing your request'
      }));
  }
};
