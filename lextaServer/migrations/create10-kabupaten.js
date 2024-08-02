'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Kabupatens', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      kode: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
      nama: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      provinsiId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Provinsis',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Kabupatens');
  },
};
