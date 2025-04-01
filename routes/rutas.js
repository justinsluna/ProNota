const express = require('express');
const router = express.Router()
const alumnoRoutes = require('./routes/alumnoRoutes');
app.use(alumnoRoutes);

router.get('/inicio', (req, res)=>{
    res.render('index',{
        title: 'Inicio',
        css: 'style.css'
    })
})

router.get('/login', (req, res)=>{
    res.render('login',{
        title: 'Login',
        css: 'login.css'
    })
})

router.get('/docente', (req, res)=>{
    res.render('indexDocente',{
        title: 'Docente'
    })
})

router.get('/alumno', (req, res)=>{
    res.render('IndexAlumno',{
        title: 'Alumno',
        css: 'style.css',
        css: 'style2.css'
        
    })
})


module.exports = router