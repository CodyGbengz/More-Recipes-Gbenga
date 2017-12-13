import express from 'express';
import auth from '../middlewares/auth';
import controllers from '../controllers';
import validateRecipe from '../middlewares/recipeValidation';
import validateContentField from '../middlewares/reviewValidation';
import sendNotification from '../middlewares/sendmail';

const router = express.Router();

// route for posting a review
router.post('/api/v1/recipes/:recipeId/reviews',
  auth,
  validateContentField.validateFields,
  validateRecipe.recipeExist,
  sendNotification,
  controllers.Review.add
);


export default router;
