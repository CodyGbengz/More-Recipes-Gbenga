import md5 from 'md5';
import models from '../models';


export default {
  create(req, res) {
    return models.Users
      .create({
        username: req.body.username,
        email: req.body.email,
        password: md5(req.body.password)
      })
      .then(user => res.status(201).send({
        username: user.username,
        email: user.email,
        message: 'sign up successful'
      }))
      .catch(error => res.status(400).send({
        error: error.message
      }));
  },

  signin(req, res) {
    return models.Users
      .findOne({ where:
        { email: req.body.email,
          password: md5(req.body.password) } })
      .then((user) => {
        if (!user) {
          return res.status(401).send({
            message: 'Invalid Username or Password'
          });
        }
        req.session.user = user;
        res.status(202).send({
          username: user.username,
          email: user.email,
          message: 'Sign in successful'
        });
      })
      .catch(error => res.status(400).send({
        message: error.message }));
  }
};
