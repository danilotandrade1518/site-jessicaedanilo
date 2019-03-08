const express = require('express');
const router = express.Router();

const indexController = require('../controllers/index.controller')
const galeriaController = require('../controllers/galeria.controller')
const confirmarPresencaController = require('../controllers/confirmar-presenca.controller')
const listaPresentesController = require('../controllers/lista-presentes.controller')

/* GET home page. */
router.use('/', indexController)
router.use('/galeria', galeriaController)
router.use('/confirmar-presenca', confirmarPresencaController)
router.use('/lista-presentes', listaPresentesController)

module.exports = router;
