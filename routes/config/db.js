const sequelize = require('sequelize');

//localhost: = 127.0.0.1
const db = new sequelize('siie', 'root', '', {
    host : '127.0.0.1',
    dialect : 'mysql',
    port: 3306
})


module.exports = db