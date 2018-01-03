import models from '../models';
/**
 * @description validate ownership helper function
 * @param {object} req - request object 
 * @param {*} res - response object
 * @param {*} next 
 * @returns {json} response object with status and message
 */
const validateOwnership = (req, res, next) => {
  const userId = req.decoded.id;
  const { Recipe } = models;
  return Recipe.find({
    where: { id: req.params.recipeId }
  })
    .then((recipe) => {
      if (recipe.userId !== userId) {
        return res.status(401).json({
          status: 'Fail',
          message: 'You are not authorised to perform this operation'
        });
      }
      next();
    })
    .catch(error => res.status(400).json({
      status: 'Fail',
      message: error.message
    }));
};

export default validateOwnership;
