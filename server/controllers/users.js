import models from '../models';

export default {
  create(req, res) {
    return models.User
      .create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      })
      .then(user => res.status(201).send({
        username: user.username,
        email: user.email,
        message: 'sign up successful'
      }))
      .catch(error => res.status(400).send({
        error: error.message
      }));
  }
};
