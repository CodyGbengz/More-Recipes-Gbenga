import md5 from 'md5';
import jwt from 'jsonwebtoken';
import models from '../models';

const { User } = models;

export default {
  createUser(req, res) {
    return User
      .create({
        username: req.body.username,
        email: req.body.email,
        password: md5(req.body.password)
      })
      .then((user) => {
        const { id, username } = user;
        const token = jwt.sign({ id, username }, process.env.secret, {
          expiresIn: 86400
        });
        res.status(201).json({
          status: 'success',
          message: 'sign up successful',
          token
        });
      })
      .catch(() => res.status(400).json({
        status: 'fail',
        message: 'An error occured while processing your request'
      }));
  },

  loginUser(req, res) {
    return User
      .findOne({
        where: {
          email: req.body.email,
          password: md5(req.body.password) } })
      .then((user) => {
        if (!user) {
          return res.status(401).json({
            status: 'fail',
            message: 'Invalid credentials'
          });
        }
        const { id, username } = user;
        const token = jwt.sign({ id, username }, process.env.secret, {
          expiresIn: 86400
        });
        res.status(200).json({
          status: 'success',
          token,
          message: 'Sign in successful'
        });
      })
      .catch(() => res.status(400).json({
        status: 'fail',
        message: 'An error occured while processing your request'
      }));
  }
};
