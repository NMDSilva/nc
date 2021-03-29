'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('user_types', [
      {
        user_type: 'Administrador',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_type: 'Gestor',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('user_types', null, {});
  }
};
