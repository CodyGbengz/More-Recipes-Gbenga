
export default (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    title: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    ingredients: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    directions: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    upvotes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    downvotes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    views: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    image_url: {
      type: DataTypes.STRING,
      defaultValue: 'img-source'
    }
  });

  Recipe.associate = (models) => {
    // define associations here
    Recipe.belongsTo(models.User, {
      foreignKey: 'userId'
    });
    Recipe.hasMany(models.Favourite, {
      foreignKey: 'recipeId'
    });
    Recipe.hasMany(models.Review, {
      foreignKey: 'recipeId',
      as: 'reviews'
    });
  };

  return Recipe;
};
