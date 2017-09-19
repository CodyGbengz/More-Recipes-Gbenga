import md5 from 'md5';
import jwt from 'jsonwebtoken';
import models from '../models';


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
        include: [{
          model: models.Favourite,
          as: 'favourites'
        }]
      })
      .then(recipe => res.status(200).json({
        status: 'success',
        data: { recipe }
      }))
      .catch(error => res.status(400).json({
        status: 'fail',
        message: error.message
      }));
  },
};
