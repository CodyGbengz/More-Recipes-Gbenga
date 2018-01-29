export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
      validate: {
        notEmpty: true
      }
    },

    password: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },

    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true
      }
    },

    firstname: {
      allowNull: true,
      type: DataTypes.STRING
    },

    surname: {
      allowNull: true,
      type: DataTypes.STRING
    },

    birthdate: {
      allowNull: true,
      type: DataTypes.DATE
    },

    image_url: {
      allowNull: true,
      type: DataTypes.STRING
    }
  });

  User.associate = (models) => {
    // associations can be defined here
    User.hasMany(models.Review, {
      foreignKey: 'userId',
      as: 'reviews'
    });
    User.hasMany(models.Favourite, {
      foreignKey: 'userId',
      as: 'favourites'
    });
    User.hasMany(models.Recipe, {
      foreignKey: 'userId',
      as: 'recipes'
    });
  };

  return User;
};
