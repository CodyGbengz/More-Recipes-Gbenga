import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import models from '../models/index';


dotenv.load();
const mailer = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.USERNAME,
    pass: process.env.PASSWORD
  }
});

const sendNotification = (req, res, next) => {
  models.Recipe
    .findOne({
      where: { id: req.params.recipeId },
      include: {
        model: models.User,
        attributes: ['email', 'username']
      }
    })
    .then((recipe) => {
      const options = {
        from: '<odemichaelgbenga@gmail.com>',
        to: recipe.User.email,
        subject: 'New review notification!',
        text: `${recipe.User.username} posted a review of your recipe`
      };
      mailer.sendMail(options);
      next();
    });
};

export default sendNotification;
