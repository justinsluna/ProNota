const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Alumno = require('./Alumno');

const Calificacion = sequelize.define('Calificacion', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    materia: { type: DataTypes.STRING, allowNull: false },
    p1: { type: DataTypes.FLOAT, allowNull: false },
    p2: { type: DataTypes.FLOAT, allowNull: false },
    p3: { type: DataTypes.FLOAT, allowNull: false }
});

Calificacion.belongsTo(Alumno, { foreignKey: 'alumnoId' });
Alumno.hasMany(Calificacion, { foreignKey: 'alumnoId' });

module.exports = Calificacion;