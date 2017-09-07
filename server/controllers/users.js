import md5 from 'md5';
import models from '../models';


export default {
  create(req, res) {
    if (!/\w{8}/.test(req.body.username) || !req.body.username) {
      return res.status(402).send({
        message: 'Enter a username with atleast 8 characters'
      });
    } else if (!/[\w\.-_\+]+@[\w-]+(\.\w{2,4})+$/.test(req.body.email) || !req.body.email) {
      return res.status(402).send({
        message: 'Please enter a valid email'
      });
    } else if (!/\w{8,12}$/.test(req.body.password) || !req.body.password) {
      return res.status(402).send({
        message: 'Please Enter a password with atleast 8 characters'
      });
    }
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
          username: user.username,
          email: user.email,
        }
      }))
      .catch(error => res.status(400).send({
        error: error.message
      }));
  },

  signin(req, res) {
    if (!/[\w\.-_\+]+@[\w-]+(\.\w{2,4})+$/.test(req.body.email) || !req.body.email) {
      return res.status(402).send({
        message: 'Please enter a valid email'
      });
    } else if (!/\w{8,12}$/.test(req.body.password) || !req.body.password) {
      return res.status(402).send({
        message: 'Please Enter a password with atleast 8 characters'
      });
    }
    return models.User
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
