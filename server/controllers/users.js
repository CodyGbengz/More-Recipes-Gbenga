import md5 from 'md5';
import jwt from 'jsonwebtoken';
import models from '../models';

const User = models.User;

export default {
  createUser(req, res) {
    return User
      .create({
        username: req.body.username,
        email: req.body.email,
        password: md5(req.body.password)
      })
      .then((user) => {
        const token = jwt.sign({ user }, process.env.secret, {
          expiresIn: 86400
        });
        res.status(201).json({
          status: 'success',
          message: 'sign up successful',
          token
        });
      })
      .catch(error => res.status(400).json({
        status: 'fail',
        message: error.message
      }));
  },

  loginUser(req, res) {
    return User
      .findOne({ where:
        { email: req.body.email,
          password: md5(req.body.password) } })
      .then((user) => {
        if (!user) {
          return res.status(401).json({
            status: 'fail',
            message: 'Invalid Username or Password'
          });
        }
        const token = jwt.sign({ user }, process.env.secret, {
          expiresIn: 86400
        });
        res.status(200).json({
          status: 'success',
          token,
          message: 'Sign in successful'
        });
      })
      .catch(error => res.status(400).json({
        message: error.message
      }));
  },
  /*
  fetch(req, res) {
    return models.User
      .all({
        include: [{ all: true
        }]
      })
      .then(user => res.status(200).json({
        status: 'success',
        data: user
      }))
      .catch(error => res.status(400).json({
        status: 'fail',
        message: error.message
      }));
  }, */
};
