import models from '../models';

export default {
  add(req, res) {
    return models.Review
      .create({
        userId: req.decoded.user.id,
        recipeId: req.body.recipeId,
        content: req.body.content
      })
      .then(review => res.status(201).send(review))
      .catch(error => res.status(400).send(error));
  }
};
