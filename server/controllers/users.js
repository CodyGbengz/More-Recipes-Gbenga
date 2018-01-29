import md5 from 'md5';
import jwt from 'jsonwebtoken';
import models from '../models';


const { User } = models;

export default {
  /**
   * @description Creates a new user in the database
   * @param {object} req - request object
   * @param {object} res - response object
   * @returns {object} - Response object containing token, status and message
   */
  createUser(req, res) {
    return User
      .create({
        username: req.body.username,
        email: req.body.email,
        password: md5(req.body.password),
        image_url: req.body.image_url || 'http://res.cloudinary.com/myresources/image/upload/v1516794077/user_hm9yov.png'
      })
      .then((user) => {
        const { id, username, image_url } = user;
        const token = jwt.sign({ id, username, image_url }, process.env.secret, {
          expiresIn: 86400
        });
        return res.status(201).json({
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
  /**
 * @description User authentication function
 * @param {object} req - request object
 * @param {object} res - response object
 * @returns {object} Response object containing token, status and message
 */
  loginUser(req, res) {
    return User
      .findOne({
        where: { email: req.body.email }
      })
      .then((user) => {
        if (user.password === md5(req.body.password)) {
          const { id, username, image_url } = user;
          const token = jwt.sign({ id, username, image_url }, process.env.secret, {
            expiresIn: 86400
          });
          res.status(200).json({
            status: 'success',
            token,
            message: 'Sign in successful'
          });
        }
        return res.status(401).json({
          status: 'fail',
          message: 'Invalid login credentials'
        });
      })
      .catch(() => res.status(500).json({
        status: 'fail',
        message: 'You have not created an account yet.'
      }));
  },
  fetchUserDetails(req, res) {
    return User
      .findOne({ where: { id: req.decoded.id },
        include: [{ all: true }]
      })
      .then((user) => {
        res.status(200).json({
          status: 'success',
          message: 'User"s details fetched successfully',
          user
        });
      })
      .catch(error => res.status(500).json({
        status: 'fail',
        message: error.message
      }));
  },
  editUserDetails(req, res) {
    return User
    .findOne({
      where: { id: req.decoded.id }
    })
    .then((user) => {
      if (!user) {
        return res.status(200).json({
          status: 'success',
          message: 'User not Found'
        });
      }
      return user
      .update({
        firstname: req.body.firstname || user.firstname,
        surname: req.body.surname || user.surname,
        birthdate: req.body.birthdate || user.birthdate,
        image_url: req.body.image_url || user.image_url
      })
      .then(() => res.status(200).json({
        message: 'Profile updated successfully',
        status: 'success',
        user
      }))
      .catch(error => res.status(500).json({
        status: 'fail',
        message: error.message
      }));
    })
    .catch(error => res.status(500).json({
      status: 'fail',
      message: error.message
    }));
  }
};
