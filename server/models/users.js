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
  };
  
  return User;
};
