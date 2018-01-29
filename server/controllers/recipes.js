import models from '../models';

const { Recipe, Review, User } = models;

export default {
  /**
   * @description Creates a new recipe
   * @param {object} req - request object
   * @param {object} res - response object
   * @returns {object} Response object containing recipe, status and message
   */
  addRecipe(req, res) {
    return Recipe
      .create({
        userId: req.decoded.id,
        title: req.body.title,
        description: req.body.description,
        ingredients: req.body.ingredients,
        directions: req.body.directions,
        image_url: req.body.image_url || 'http://res.cloudinary.com/myresources/image/upload/v1515852046/bg2_pj1yit.jpg'
      })
      .then(recipe => res.status(201).json({
        status: 'success',
        message: 'Recipe created successfully',
        recipe
      }))
      .catch(error => res.status(400).json({
        status: 'Fail',
        message: error.message
      }));
  },
  /**
   * @description Gets all recipes belonging to a user
   * @param {object} req - Request object
   * @param {object} res - Response object
   * @returns {object} response object contain status, message and recipes
   */
  fetchUserRecipes(req, res) {
    const { limit, offset } = req.query;
    return Recipe
      .findAndCountAll({ where: { userId: req.decoded.id },
        include: [{
          model: Review,
          as: 'reviews',
          attributes: ['userId', 'content'],
          include: [{
            model: User,
            attributes: ['username', 'createdAt']
          }]
        },
        {
          model: User,
          attributes: ['username', 'image_url']
        }],
        limit: limit || 5,
        offset: offset || 0
      })
      .then((recipes) => {
        if (recipes.length <= 0) {
          return res.status(200).json({
            status: 'success',
            message: 'You have not created any recipes yet',
            recipes
          });
        }
        const pageNumber = parseInt(recipes.count, 10) / parseInt(limit || 5, 10);
        return res.status(200).json({
          status: 'success',
          message: 'Your Recipes fetched successfully',
          recipes,
          pages: Math.ceil(pageNumber)
        });
      })
      .catch(error => res.status(400).json({
        status: 'Fail',
        message: error.message
      }));
  },
  /**
  * @description Gets a single recipe
  * @param {object} req - Request object
  * @param {object} res - Response object
  * @returns {object} response object contains status, message and recipe with reviews
  */
  fetchARecipe(req, res) {
    return Recipe
      .findOne({
        where: { id: req.params.recipeId },
        include: [{
          model: Review,
          as: 'reviews',
          attributes: ['userId', 'content', 'createdAt'],
          include: [{
            model: User,
            attributes: ['username', 'image_url']
          }]
        },
        {
          model: User,
          attributes: ['username', 'image_url', 'createdAt']
        }]
      })
      .then((recipe) => {
        if (!recipe) {
          return res.status(404).json({
            message: 'Recipe does not exist',
            status: 'success'
          });
        }
        recipe.increment('views').then(() => {
          recipe.reload().then(() => {
            res.status(200).json({
              message: 'single Recipe fetched successfully',
              status: 'success',
              recipe
            });
          });
        });
      })
      .catch(() => res.status(400).json({
        status: 'fail',
        message: 'An error occured while processing your request'
      }));
  },
  /**
   * @description Gets all the recipes
   * @param {*} req - Request object
   * @param {*} res - Response object
   * @param {*} next
   * @returns {object} containing status, message and an array of recipes
   */
  fetchAllRecipes(req, res, next) {
    if (req.query.sort) return next();
    const { limit, offset } = req.query;
    return Recipe
      .findAndCountAll({
        include: [{
          model: Review,
          as: 'reviews',
          attributes: ['userId', 'content'],
          include: [{
            model: User,
            attributes: ['username', 'createdAt']
          }]
        },
        {
          model: User,
          attributes: ['username', 'image_url']
        }],
        limit: limit || 5,
        offset: offset || 0
      })
      .then((recipes) => {
        if (recipes.rows.length <= 0) {
          return res.status(200).json({
            status: 'success',
            message: 'no recipes found',
            pages: 1
          });
        }
        const pageNumber = parseInt(recipes.count, 10) / parseInt(limit || 5, 10);
        res.status(200).json({
          message: 'all Recipes fetched successfully',
          status: 'success',
          recipes,
          pages: Math.ceil(pageNumber)
        });
      })
      .catch(error => res.status(400).json({
        status: 'fail',
        message: error.message
      }));
  },
  /**
   * @description modifies a single recipe
   * @param {*} req -  request object
   * @param {*} res -  response object
   * @returns {object} - containing status, message and the updated recipe
   */
  updateARecipe(req, res) {
    return Recipe
      .findOne({
        where: { id: req.params.recipeId }
      })
      .then((recipe) => {
        // check if recipe exists
        if (!recipe) {
          return res.status(404).json({
            status: 'suceess',
            message: 'Recipe not found',
          });
        }
        return recipe
          .update({
            title: req.body.title || recipe.title,
            description: req.body.description || recipe.description,
            ingredients: req.body.ingredients || recipe.ingredients,
            directions: req.body.directions || recipe.directions
          })
          .then(() => res.status(200).json({
            message: 'Recipe modified successfully',
            status: 'success',
            recipe
          }))
          .catch(() => res.status(400).json({
            status: 'fail',
            message: 'An error occured while processing your request'
          }));
      })
      .catch(() => res.status(400).json({
        status: 'fail',
        message: 'An error occured while processing your request'
      }));
  },
  /**
   * @description Deletes a recipe from the database permanently
   * @param {*} req - request object
   * @param {*} res - response object
   * @returns {object} - contain status and message
   */
  destroyARecipe(req, res) {
    return Recipe
      .findOne({
        where: { id: req.params.recipeId }
      })
      .then((recipe) => {
        // check that the recipe exists in the database
        if (!recipe) {
          return res.status(404).json({
            status: 'fail',
            message: 'Recipe not found'
          });
        }
        return recipe
          .destroy()
          .then(() => res.status(200).json({
            status: 'success',
            message: 'Recipe deleted successfully'
          }))
          .catch(error => res.status(400).json({
            status: 'fail',
            message: error.message
          }));
      })
      .catch(() => res.status(400).json({
        status: 'fail',
        message: 'An error occured while processing your request'
      }));
  },
  /**
   * @description search the database for a recipe matching query string
   * @param {*} req - request object
   * @param {*} res - response object
   * @param {*} next
   * @returns {object}  containing status, message and an array of recipes
   */
  searchRecipes(req, res, next) {
    if (!req.query.search) return next();
    const queryTerm = req.query.search;
    return Recipe
      .findAll({
        where: {
          $or: [{
            title: {
              $ilike: `%${queryTerm}%`
            }
          },
          {
            ingredients: {
              $ilike: `%${queryTerm}%`
            }
          }]
        },
        limit: 10,
        attributes: ['title', 'ingredients', 'description', 'directions', 'upvotes', 'downvotes', 'views']
      })
      .then((recipes) => {
        if (recipes.length <= 0) {
          return res.status(200).json({
            status: 'fail',
            message: 'No matches found'
          });
        }
        res.status(200).json({
          message: 'Here are your search results',
          status: 'success',
          recipes
        });
      })
      .catch(() => res.status(400).json({
        status: 'fail',
        message: 'An error occured while processing your request'
      }));
  },
  /**
   * @description Gets recipes with the most upvotes
   * @param {*} req - request object
   * @param {*} res - response object
   * @returns {object} - containing status,message and recipes in descending order of upvotes
   */
  fetchTopRecipes(req, res) {
    const sort = req.query.sort;
    const order = req.query.order;
    return Recipe
      .findAll({
        attributes: ['title', 'ingredients', 'description', 'directions', 'upvotes', 'downvotes', 'views'],
        order: [[sort, order]],
        limit: 5
      })
      .then(recipes => res.status(200).json({
        status: 'success',
        message: 'top Recipes fetched successfully',
        recipes
      }))
      .catch(() => res.status(400).json({
        status: 'fail',
        message: 'An error occured while processing your request'
      }));
  }
};
