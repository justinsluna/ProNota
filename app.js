const express = require('express');
const router = require('./routes/rutas');
const app = express();
const port = 3000; 

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.use('/', router);

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
});

const sequelize = require('./config/database');
const Alumno = require('./models/Alumno');
const Calificacion = require('./models/Calificacion');

sequelize.sync({ force: false }) // Cambia a `true` si quieres borrar y recrear la BD en cada inicio
    .then(() => console.log('Base de datos sincronizada'))
    .catch(error => console.error('Error al sincronizar BD:', error));