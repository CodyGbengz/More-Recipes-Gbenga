import models from '../models';

const { Review } = models;

export default {
  add(req, res) {
    return Review
      .create({
        userId: req.decoded.id,
        recipeId: req.params.recipeId,
        content: req.body.content
      })
      .then(review => res.status(201).json({
        status: 'Success',
        message: 'Review posted successfully',
        data: review
      }))
      .catch(() => res.status(400).json({
        status: 'fail',
        message: 'An error occured while processing your request'
      }));
  }
};

