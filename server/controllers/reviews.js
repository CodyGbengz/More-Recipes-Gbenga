import models from '../models';

export default {
  add(req, res) {
    return models.Reviews
      .create({
        from_user: req.body.from_user,
        to_recipe: req.body.to_recipe,
        content: req.body.content

      })
      .then(review => res.status(201).send(review))
      .catch(error => res.status(400).send(error));
  }
};
