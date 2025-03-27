const express = require('express');
const router = express.Router()

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


module.exports = router