import models from '../models';

export default {
  add(req, res) {
    return models.Review
      .create({
        userId: req.decoded.user.id,
        recipeId: req.params.recipeId,
        content: req.body.content
      })
      .then(review => res.status(201).json({
        status: 'Success',
        message: 'Review posted successfully',
        data: review
      }))
      .catch(error => res.status(400).json({
        status: 'fail',
        message: error.message
      }));
  }
};

