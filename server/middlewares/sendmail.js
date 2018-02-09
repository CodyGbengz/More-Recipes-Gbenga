import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import models from '../models/index';
import emailTemplate from '../middlewares/emailTemplate';


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
      const url = `localhost:8081/recipes/${recipe.id}`;
      const options = {
        from: '<odemichaelgbenga@gmail.com>',
        to: recipe.User.email,
        subject: 'New review notification!',
        html: emailTemplate(recipe.User.username, `A new review was posted on your recipe ${recipe.title}, click below to view`, url)
      };
      mailer.sendMail(options, (error) => {
        if (error) {
          console.log(error.message);
        }
      });
      next();
    });
};

export default sendNotification;
