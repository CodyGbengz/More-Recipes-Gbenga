import winston from 'winston';
import models from '../models';


export default {
  upvote(req, res) {
    return models.Vote
      .findOrCreate({ where: {
        recipeId: req.params.recipeId,
        userId: req.decoded.user.id },
      defaults: { option: true }
      })
      .spread((voter, created) => {
        winston.info(voter, created);
        if (created) {
          return models.Recipe
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
          winston.info(voter, created);
          voter.update({ option: true });
          return models.Recipe
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
      .catch(error => res.status(400).json({
        status: 'fail',
        message: error.message
      }));
  },
  downvote(req, res) {
    return models.Vote
      .findOrCreate({ where: {
        userId: req.decoded.user.id,
        recipeId: req.params.recipeId },
      defaults: { option: false }
      })
      .spread((voter, created) => {
        winston.info(voter, created);
        console.log(voter, created);
        if (created) {
          return models.Recipe
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
          winston.info(voter, created);
          voter.update({ option: false });
          return models.Recipe
            .findOne({ where: { id: req.params.recipeId } })
            .then((recipe) => {
              recipe.increment('downvotes').then(() => {
                recipe.decrement('upvotes').then(() => {
                  recipe.reload();
                }).then(() => res.status(200).send({
                  status: 'success',
                  message: 'Your vote has been recorded',
                  upvote: recipe.upvote,
                  downvote: recipe.downvote
                }));
              });
            });
        }
        return res.status(400).send({
          status: 'fail',
          message: 'User has already downvoted'
        });
      })
      .catch(error => res.status(400).json({
        message: error.message
      }));
  },
};

