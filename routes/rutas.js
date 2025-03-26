const express = require('express');
const router = express.Router()

router.get('/inicio', (req, res)=>{
    res.render('index',{
        title: 'Inicio'
    })
})

module.exports = router