

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
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      ingredients: {
        type: Sequelize.STRING
      },
      directions: {
        type: Sequelize.STRING
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
