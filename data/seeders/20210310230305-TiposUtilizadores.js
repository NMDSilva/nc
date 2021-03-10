'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('TipoUsers', [
      {
        tipoUser: 'Administrador',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tipoUser: 'Gestor',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('TipoUsers', null, {});
  }
};
