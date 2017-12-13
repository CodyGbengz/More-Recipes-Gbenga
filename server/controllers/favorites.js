import models from '../models';

const { Favourite, Recipe, User } = models;

export default {
  /**
   * @description adds a recipe to a user's list of favourites
   * @param {*} req - request object
   * @param {*} res - response object
   * @returns {object} response object containing status and message
   */
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
  /**
   * @description gets a user's favourite recipes
   * @param {*} req - request object
   * @param {*} res - response object
   * @returns {object} - response object containing status, message and an array of recipes 
   */
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
  /**
   * @description  Permanently removes a recipe from a user's list of favourites
   * @param {*} req - request object 
   * @param {*} res - response object
   * @returns {object} - response object with status and message
   */
  deleteUserFavourite(req, res) {
    return Favourite
      .findOne({ where: { recipeId: req.params.recipeId } })
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
  /**
   * @description adds a favourite recipe to a category
   * @param {*} req - request object
   * @param {*} res - response object
   * @returns {object} - response object with status and message
   */
  addToCategory(req, res) {
    return Favourite
      .findOne({ where: { recipeId: req.params.recipeId } })
      .then((recipe) => {
        recipe.update({ category: req.body.category || recipe.category })
          .then(() => {
            res.status(200).json({
              status: 'Success',
              message: 'Recipe added to category'
            });
          });
      })
      .catch(() => res.status(400).json({
        status: 'Fail',
        message: 'An error occured while processing your request'
      }));
  }
};
