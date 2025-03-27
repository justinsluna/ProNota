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

module.exports = router