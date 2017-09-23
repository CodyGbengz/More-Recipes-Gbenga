import models from '../models';

export default {
  add(req, res) {
    return models.Recipe
      .create({
        userId: req.decoded.user.id,
        title: req.body.title,
        description: req.body.description,
        ingredients: req.body.ingredients,
        directions: req.body.directions
      })
      .then(recipe => res.status(201).json({
        status: 'success',
        data: {
          id: recipe.id,
          title: recipe.title,
          description: recipe.description,
        },
        message: 'recipe created successfully'
      }))
      .catch(error => res.status(400).json({
        status: 'Fail',
        error: error.message
      }));
  },

  fetch(req, res, next) {
    if (req.query.sort) return next();
    return models.Recipe
      .all({
        include: [{
          model: models.Review,
          as: 'reviews',
          attributes: ['userId', 'content'],
          include: [{
            model: models.User,
            attributes: ['username', 'createdAt']
          }]
        }]
      })
      .then((recipes) => {
        if (!recipes.length) {
          return res.status(200).json({
            message: 'no recipes found'
          });
        }
        res.status(200).json({
          status: 'success',
          data: {
            recipes
          }
        })
          .catch(error => res.status(400).json({
            status: 'fail',
            message: error.message
          }));
      });
  },

  update(req, res) {
    return models.Recipe
      .findOne({
        where: {
          userId: req.decoded.user.id,
          recipeId: req.params.recipeId
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
          .catch(error => res.status(400).json({
            message: error.message
          }));
      })
      .catch(error => res.status(400).json({
        message: error.message
      }));
  },

  destroy(req, res) {
    return models.Recipe
      .findOne({
        where: {
          userId: req.decoded.user.id,
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
          .catch(error => res.status(400).json({
            message: error.message
          }));
      })
      .catch(error => res.status(400).json({
        message: error.message
      }));
  },

  searchRecipes(req, res, next) {
    if (!req.query.search) return next();
    const queryTerm = req.query.search;
    return models.Recipe
      .findAll({
        where: {
          $or: [
            { title: {
              $ilike: `%${queryTerm}%`
            }
            },
            { ingredients: {
              $ilike: `%${queryTerm}%`
            }
            }
          ] },
        limit: 10,
        attributes: ['title', 'ingredients', 'description', 'directions', 'upvotes', 'downvotes', 'views']
      })
      .then((recipes) => {
        if (!recipes.length) {
          return res.status(200).json({
            message: 'No matches found'
          });
        }
        res.status(200).json(recipes);
      })
      .catch(error => res.status(400).json({
        status: 'Fail',
        message: error.message
      }));
  },

  fetchTopRecipes(req, res) {
    const sort = req.query.sort;
    const order = req.query.order;
    return models.Recipe
      .findAll({
        attributes: ['title', 'ingredients', 'description', 'directions', 'upvotes', 'downvotes', 'views'],
        order: [
          [sort, order]
        ],
        limit: 5
      })
      .then(recipes => res.status(200).json(recipes))
      .catch(error => res.status(400).json({
        message: error.message
      }));
  }
};
