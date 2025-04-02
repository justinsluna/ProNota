const express = require('express');
const router = express.Router();
const Alumno = require('../models/Alumno');
const Calificacion = require('../models/Calificacion');

router.get('/dashboard', async (req, res) => {
    try {
        const alumno = await Alumno.findOne({ where: { id: req.session.alumnoId } });
        const calificaciones = await Calificacion.findAll({ where: { alumnoId: alumno.id } });

        res.render('dashboard', { alumno, calificaciones });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener datos');
    }
});

module.exports = router;