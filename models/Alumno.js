const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Alumno = sequelize.define('Alumno', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING, allowNull: false }
});

module.exports = Alumno;