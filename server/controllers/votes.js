
import models from '../models';

const { Vote, Recipe } = models;

export default {
  /**
   * @description upvotes a recipe
   * @param {object} req - request object
   * @param {object} res - response object
   * @returns {object} returns a response object with properties status, message and recipe
   */
  upvoteRecipe(req, res) {
    return Vote
      .findOrCreate({ where: {
        recipeId: req.params.recipeId,
        userId: req.decoded.id
      },
      defaults: { option: true }
      })
      .spread((voter, created) => {
        if (created) {
          return Recipe
            .findOne({ where: { id: req.params.recipeId } })
            .then((recipe) => {
              recipe.increment('upvotes').then(() => {
                recipe.reload()
                  .then(() => res.status(200).json({
                    status: 'success!',
                    message: 'Your vote has been recorded',
                    recipe
                  }));
              });
            });
        }
        if (!created && voter.option === false) {
          voter.update({ option: true });
          return Recipe
            .findOne({ where: { id: req.params.recipeId } })
            .then((recipe) => {
              recipe.increment('upvotes').then(() => {
                recipe.reload();
              })
                .then(() => res.status(200).json({
                  status: 'success',
                  message: 'Your vote has been recorded',
                  recipe
                }));
            });
        }
        if (!created && voter.option === true) {
          voter.update({ option: false });
          return Recipe
            .findOne({ where: { id: req.params.recipeId } })
            .then((recipe) => {
              recipe.decrement('upvotes').then(() => {
                recipe.reload();
              })
                .then(() => res.status(200).json({
                  status: 'success',
                  message: 'Your vote has been recorded',
                  recipe
                }));
            });
        }
        return res.status(400).json({
          status: 'fail',
          message: 'User has already upvoted'
        });
      })
      .catch(() => res.status(400).json({
        status: 'fail',
        message: 'An error occured while trying to process your request'
      }));
  },
  /**
   * @description downvotes a recipe 
   * @param {object} req - request object 
   * @param {object} res - response object
   * @returns {object} response object with properties status, message and recipe
   */
  downvoteRecipe(req, res) {
    return Vote
      .findOrCreate({ where: {
        userId: req.decoded.id,
        recipeId: req.params.recipeId
      },
      defaults: { option: false }
      })
      .spread((voter, created) => {
        // check if the user has not voted
        if (created) {
          return Recipe
            .findOne({ where: { id: req.params.recipeId } })
            .then((recipe) => {
              recipe.increment('downvotes').then(() => {
                recipe.reload().then(() => res.status(200).send({
                  status: 'success',
                  message: 'Your vote has been recorded',
                  recipe
                }));
              });
            });
        }
        // check if the user has upvoted already
        if (!created && voter.option === true) {
          voter.update({ option: false });
          return Recipe
            .findOne({ where: { id: req.params.recipeId } })
            .then((recipe) => {
              recipe.increment('downvotes').then(() => {
                recipe.reload();
              }).then(() => res.status(200).send({
                status: 'success',
                message: 'Your vote has been recorded',
                recipe
              }));
            });
        }
        if (!created && voter.option === false) {
          voter.update({ option: true });
          return Recipe
            .findOne({ where: { id: req.params.recipeId } })
            .then((recipe) => {
              recipe.decrement('downvotes').then(() => {
                recipe.reload();
              })
                .then(() => res.status(200).json({
                  status: 'success',
                  message: 'Your vote has been recorded',
                  recipe
                }));
            });
        }
        return res.status(400).send({
          status: 'fail',
          message: 'User has already downvoted'
        });
      })
      .catch(() => res.status(400).json({
        message: 'An error occured while trying to process your request'
      }));
  },
};

