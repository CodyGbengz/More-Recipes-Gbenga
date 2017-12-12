import models from '../models';

const { Recipe, Review, User } = models;

export default {
  addRecipe(req, res) {
    return Recipe
      .create({
        userId: req.decoded.id,
        title: req.body.title,
        description: req.body.description,
        ingredients: req.body.ingredients,
        directions: req.body.directions
      })
      .then(recipe => res.status(201).json({
        status: 'success',
        message: 'Recipe created successfully',
        recipe
      }))
      .catch(() => res.status(400).json({
        status: 'Fail',
        error: 'An error occured while processing your request'
      }));
  },

  fetchUserRecipes(req, res) {
    return Recipe
      .findAll({ where: {
        userId: req.decoded.id }
      })
      .then((recipes) => {
        if (recipes.length <= 0) {
          return res.status(200).json({
            status: 'success',
            message: 'You have not created any recipes yet'
          });
        }
        return res.status(200).json({
          status: 'success',
          data: recipes
        });
      })
      .catch(() => res.status(400).json({
        status: 'Fail',
        message: 'An error occured while processing your request'
      }));
  },

  fetchARecipe(req, res) {
    return Recipe
      .findOne({
        where: { id: req.params.recipeId },
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
          attributes: ['username', 'createdAt']
        }]
      })
      .then((recipe) => {
        if (!recipe) {
          return res.status(404).json({
            message: 'Recipe does not exist'
          });
        }
        recipe.increment('views').then(() => {
          recipe.reload().then(() => {
            res.status(200).json({
              status: 'success',
              data: recipe
            });
          });
        });
      })
      .catch(() => res.status(400).json({
        status: 'fail',
        message: 'An error occured while processing your request'
      }));
  },

  fetchAllRecipes(req, res, next) {
    if (req.query.sort) return next();
    return Recipe
      .all({
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
          attributes: ['username']
        }],
        limit: 10
      })
      .then((recipes) => {
        if (recipes.length <= 0) {
          return res.status(200).json({
            message: 'no recipes found'
          });
        }
        res.status(200).json({
          status: 'success',
          data: recipes
        });
      })
      .catch(() => res.status(400).json({
        status: 'fail',
        message: 'An error occured while processing your request'
      }));
  },

  updateARecipe(req, res) {
    return Recipe
      .findOne({
        where: {
          userId: req.decoded.id,
          id: req.params.recipeId
        }
      })
      .then((recipe) => {
        if (!recipe) {
          return res.status(404).json({
            status: 'fail',
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

  destroyARecipe(req, res) {
    return Recipe
      .findOne({
        where: {
          userId: req.decoded.id,
          id: req.params.recipeId
        }
      })
      .then((recipe) => {
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
          }
          ]
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
          status: 'success',
          recipes
        });
      })
      .catch(() => res.status(400).json({
        status: 'fail',
        message: 'An error occured while processing your request'
      }));
  },

  fetchTopRecipes(req, res) {
    const sort = req.query.sort;
    const order = req.query.order;
    return Recipe
      .findAll({
        attributes: ['title', 'ingredients', 'description', 'directions', 'upvotes', 'downvotes', 'views'],
        order: [[sort, order]],
        limit: 5
      })
      .then(recipes => res.status(200).json(recipes))
      .catch(() => res.status(400).json({
        status: 'fail',
        message: 'An error occured while processing your request'
      }));
  }
};
