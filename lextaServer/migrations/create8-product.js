'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      travelId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'Travels',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      stars: {
        type: Sequelize.INTEGER,
        validate: {
          min: 1,
          max: 5,
        },
      },
      hotelMakkahId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'Hotels',
          key: 'id',
        },
      },
      hotelMadinahId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'Hotels',
          key: 'id',
        },
      },
      departureAirlineId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'Airlines',
          key: 'id',
        },
      },
      departureAirportId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'Airports',
          key: 'id',
        },
      },
      isTransitDeparture: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      transitAirportDeparture: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: 'Airports',
          key: 'id',
        },
      },
      isPlaneChangeDeparture: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      planeChangeAirlineDeparture: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: 'Airlines',
          key: 'id',
        },
      },
      returnAirlineId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'Airlines',
          key: 'id',
        },
      },
      returnAirportId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'Airports',
          key: 'id',
        },
      },
      isTransitReturn: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      transitAirportReturn: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: 'Airports',
          key: 'id',
        },
      },
      isPlaneChangeReturn: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      planeChangeAirlineReturn: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: 'Airlines',
          key: 'id',
        },
      },
      busId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'Buses',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products');
  },
};
