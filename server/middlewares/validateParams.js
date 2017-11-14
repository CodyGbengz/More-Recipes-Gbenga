import checkParams from '../helpers/checkParams';

const validateRequestParams = (req, res, next) => {
  const params = req.params.recipeId;
  if (!checkParams(parseInt(params, 10))) {
    return res.status(400).json({
      status: 'Fail',
      message: 'Invalid params'
    });
  }
  next();
};

export default validateRequestParams;
