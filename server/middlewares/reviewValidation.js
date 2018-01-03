import checkEmpty from '../helpers/checkEmpty';

const validateReview = {
  validateFields(req, res, next) {
    const { content } = req.body;
    if (checkEmpty(content)) {
      return res.status(400).json({
        status: 'fail',
        message: 'Review content field cannot be empty'
      });
    }
    next();
  }
};

export default validateReview;
