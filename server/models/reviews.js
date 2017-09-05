
export default (sequelize, DataTypes) => {
  const Reviews = sequelize.define('Reviews', {
    from_user: {
      type: DataTypes.STRING,
      allowNull: false
    },
    to_recipe: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  });

  Reviews.associate = (models) => {
    // associations can be defined here
  };

  return Reviews;
};
