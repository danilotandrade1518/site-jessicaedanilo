const express = require('express')
const router = express.Router()

const confirmarPresencaService = require('../services/confirmar-presenca.service')
const emailService = require('../services/email.service')

const env = process.env.NODE_ENV || 'dev';
const googleRecaptchaSitekey = env==='production' ? '6Lf2JpYUAAAAALbBvheNd00S3mdzSlwILTBnnm9o' : '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI';

router.get('/', (req, res, next) => {
  res.render('confirmar-presenca/confirmar-presenca', {
    googleRecaptchaSitekey
  })
})

router.post('/', async (req, res, next) => {
  const confirmacao = req.body

  try {

    await confirmarPresencaService.createConfirmacaoPresenca(confirmacao)

  } catch ( error ) {
    return next( error )
  }

  emailService.sendNovaConfirmacaoConvidado(confirmacao.email, function(err, info) {
    emailService.sendNovaConfirmacao(confirmacao, function(err, info){})
  })

  res.status(201).json(confirmacao)
})
module.exports = router
