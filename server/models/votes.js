
export default (sequelize, DataTypes) => {
  const Vote = sequelize.define('Vote', {
    recipeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    option: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  });

  Vote.associate = (models) => {
    // associations can be defined here
  };
  return Vote;
};
