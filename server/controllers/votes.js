import models from '../models';

export default {
  upvote(req, res) {
    return models.Recipe
      .findOne({ where: { id: req.params.recipeId } })
      .then((recipe) => {
        recipe.increment('upvotes').then(() => {
          recipe.reload()
            .then(() => res.status(200).json({
              status: 'success!',
              message: 'recipe upvoted'
            }));
        });
      })
      .catch(error => res.status(400).json({
        status: 'fail',
        message: error.message
      }));
  },
  downvote(req, res) {
    return models.Recipe
      .findOne({ where: { id: req.params.recipeId } })
      .then((recipe) => {
        recipe.increment('downvotes').then(() => {
          recipe.reload()
            .then(() => res.status(200).json({
              status: 'success!',
              message: 'recipe downvoted'
            }));
        });
      })
      .catch(error => res.status(400).json({
        status: 'fail',
        message: error.message
      }));
  }
};
