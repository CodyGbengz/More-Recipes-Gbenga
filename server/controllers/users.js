import md5 from 'md5';
import jwt from 'jsonwebtoken';
import models from '../models';
import checkEmpty from '../helpers/checkEmpty';


export default {
  create(req, res) {
    return models.User
      .create({
        username: req.body.username,
        email: req.body.email,
        password: md5(req.body.password)
      })
      .then(user => res.status(201).json({
        status: 'success',
        message: 'sign up successful',
        data: {
          id: user.id,
          username: user.username,
          email: user.email,
        }
      }))
      .catch(error => res.status(400).json({
        status: 'fail',
        message: error.message
      }));
  },

  signin(req, res) {
    if (checkEmpty(req.body.email) || !req.body.email) {
      return res.status(400).json({
        status: 'Fail',
        message: 'email field cannot be empty'
      });
    }
    if (checkEmpty(req.body.password) || !req.body.password) {
      return res.status(400).json({
        status: 'Fail',
        message: 'Password field cannot be empty'
      });
    }

    return models.User
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
          Token: token,
          message: 'Sign in successful'
        });
      })
      .catch(error => res.status(400).json({
        message: error.message
      }));
  },
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
  },
};
