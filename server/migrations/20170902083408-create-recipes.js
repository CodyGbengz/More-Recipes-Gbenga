

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('Recipes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ingredients: {
        type: Sequelize.STRING,
        allowNull: false

      },
      directions: {
        type: Sequelize.STRING,
        allowNull: false
      },
      upvotes: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      downvotes: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      views: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      image_url: {
        type: Sequelize.STRING,
        defaultValue: 'img-source'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
          as: 'userId'
        }
      }
    });
  },
  down(queryInterface) {
    return queryInterface.dropTable('Recipes');
  }
};
