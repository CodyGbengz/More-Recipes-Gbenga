import models from '../models/index';

const validateUser = {
  validateSignUpFields(req, res, next) {
    const username = req.body.username,
      email = req.body.email,
      password = req.body.password;

    if (!/\w{6,12}/.test(username) || !username) {
      return res.status(400).send({
        message: 'Enter a username with atleast 6 characters'
      });
    }
    if (!/[\w\.-_\+]+@[\w-]+(\.\w{2,4})+$/.test(email) || !email) {
      return res.status(400).send({
        message: 'Please enter a valid email'
      });
    }
    if (!/\w{6,12}$/.test(password) || !password) {
      return res.status(400).send({
        message: 'Please Enter a password with atleast 6 characters'
      });
    }
    next();
  },

  validateLoginFields(req, res, next) {
    const email = req.body.email,
      password = req.body.password;

    if (!/[\w\.-_\+]+@[\w-]+(\.\w{2,4})+$/.test(email) || !email) {
      return res.status(400).send({
        message: 'Please enter a valid email'
      });
    }
    if (!/\w{8,12}$/.test(password) || !password) {
      return res.status(400).send({
        message: 'Please Enter a password with atleast 8 characters'
      });
    }
    next();
  },

  validateEmail(req, res, next) {
    models.User.findOne({ where: { email: req.body.email } })
      .then((user) => {
        if (!user) next();
        else {
          return res.status(409).json({
            status: 'Fail',
            message: 'Email address already exists'
          });
        }
      })
      .catch(error => res.status(400).json({
        message: error.message
      }));
  },
  validateUsername(req, res, next) {
    models.User.findOne({ where: { username: req.body.username } })
      .then((user) => {
        if (!user) next();
        else {
          return res.status(409).json({
            status: 'Fail',
            message: 'Username already taken'
          });
        }
      })
      .catch(error => res.status(400).json({
        message: error.message
      }));
  }
};

export default validateUser;
