
import models from '../models';

const { Vote, Recipe } = models;

export default {
  upvote(req, res) {
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
                    upvotes: recipe.upvotes,
                    downvotes: recipe.downvotes
                  }));
              });
            });
        } else if (!created && voter.option === false) {
          voter.update({ option: true });
          return Recipe
            .findOne({ where: { id: req.params.recipeId } })
            .then((recipe) => {
              recipe.increment('upvotes').then(() => {
                recipe.decrement('downvotes').then(() => {
                  recipe.reload();
                }).then(() => res.status(200).json({
                  status: 'success',
                  message: 'Your vote has been recorded',
                  upvotes: recipe.upvotes,
                  downvotes: recipe.downvotes
                }));
              });
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
  downvote(req, res) {
    return Vote
      .findOrCreate({ where: {
        userId: req.decoded.id,
        recipeId: req.params.recipeId
      },
      defaults: { option: false }
      })
      .spread((voter, created) => {
        if (created) {
          return Recipe
            .findOne({ where: { id: req.params.recipeId } })
            .then((recipe) => {
              recipe.increment('downvotes').then(() => {
                recipe.reload().then(() => res.status(200).send({
                  status: 'success',
                  message: 'Your vote has been recorded',
                  upvotes: recipe.upvotes,
                  downvotes: recipe.downvotes
                }));
              });
            });
        } else if (!created && voter.option === true) {
          voter.update({ option: false });
          return Recipe
            .findOne({ where: { id: req.params.recipeId } })
            .then((recipe) => {
              recipe.increment('downvotes').then(() => {
                recipe.decrement('upvotes').then(() => {
                  recipe.reload();
                }).then(() => res.status(200).send({
                  status: 'success',
                  message: 'Your vote has been recorded',
                  upvotes: recipe.upvotes,
                  downvotes: recipe.downvotes
                }));
              });
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

