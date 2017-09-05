export default (sequelize, DataTypes) => {
  const Favourites = sequelize.define('favourites', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    recipeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  return Favourites;
};
