const express = require('express')
const router = express.Router()
const paginate = require('express-paginate');

const mensagemService = require('../services/mensagem.service')

router.get('/', (req, res, next) => {
  res.render('index/index')
})

router.get('/mensagens', async (req, res, next) => {
  try {

    const [ mensagens, mensagensCount ] = await Promise.all([
      mensagemService.getMensagens(req.query.limit, req.skip),
      mensagemService.countMensagens()
    ]);

    const pageCount = Math.ceil(mensagensCount / req.query.limit);

    res.json({
      pagination: {
        showPaginationMensagens: mensagensCount > 5,
        has_prev: res.locals.paginate.hasPreviousPages,
        has_next: paginate.hasNextPages(req)(pageCount),
        current_page: req.query.page,
        last_page: pageCount,
        all_pages: paginate.getArrayPages(req)(3, pageCount, req.query.page),
      },
      mensagens
      });

  } catch (err) {
    next(err);
  }
})

router.post('/', async (req, res, next) => {
  const mensagem = req.body

  try {

    await mensagemService.createMensagem(mensagem)

  } catch ( error ) {
    return next( error )
  }

  res.render('index/index')
})

module.exports = router
