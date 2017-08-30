import models from '../models';

export default {
  create(req, res) {
    // validate username ,email and password

    if (!/\w{8}/.test(req.body.username)) {
      return res.status(402).send({
        message: 'Enter a username with atleast 8 characters'
      });
    } else if (!/^[\w\.-_\+]+@[\w-]+(\.\w{2,4})+$/.test(req.body.email)) {
      return res.status(402).send({
        message: 'Please enter a valid email'
      });
    } else if (!/^\w{8,12}$/.test(req.body.password)) {
      return res.status(402).send({
        message: 'Please Enter a password with atleast 8 characters'
      });
    }
    return models.Users
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
