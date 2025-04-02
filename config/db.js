const { Sequelize } = require('sequelize'); // Importación correcta

// Crear la instancia de Sequelize
const db = new Sequelize('siie', 'root', '', {  
    host: 'localhost',
    dialect: 'mysql'
});

// Probar la conexión a la base de datos
db.authenticate()
    .then(() => console.log('Conectado a la base de datos'))
    .catch(err => console.log('Error al conectar a la base de datos', err));

module.exports = db; // Exportar la instancia