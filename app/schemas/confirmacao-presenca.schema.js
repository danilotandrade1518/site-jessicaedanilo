const mongoose = require('mongoose')
const Schema = mongoose.Schema

const confirmacaoPresencaSchema = Schema({
  nome_convite: {
    type: String,
    required: [true, 'O nome do convite deve ser informado.'],
    default: undefined
  },
  nomes_acompanhantes: {
    type: String,
    default: undefined
  },
  email: {
    type: String,
    required: [true, 'O email deve ser informado.'],
    default: undefined
  },
  telefone: {
    type: String,
    required: [true, 'O telefone deve ser informado.'],
    default: undefined
  },
  data: {
      type: Date,
      required: true,
      default: Date.now
  }
})

module.exports = confirmacaoPresencaSchema
