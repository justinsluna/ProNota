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