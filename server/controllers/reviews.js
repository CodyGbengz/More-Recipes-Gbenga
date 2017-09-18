import models from '../models';

export default {
  add(req, res) {
    return models.Review
      .create({
        userId: req.body.userId,
        recipeId: req.body.recipeId,
        content: req.body.content

      })
      .then(review => res.status(201).send(review))
      .catch(error => res.status(400).send(error));
  }
};
