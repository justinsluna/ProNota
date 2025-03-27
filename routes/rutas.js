const express = require('express');
const router = express.Router()

router.get('/inicio', (req, res)=>{
    res.render('index',{
        title: 'Inicio'
    })
})

router.get('/login', (req, res)=>{
    res.render('login',{
        title: 'Login'
    })
})

module.exports = router