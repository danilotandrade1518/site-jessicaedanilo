const mongoose = require('mongoose')
const confirmacaoPresencaSchema = require('../schemas/confirmacao-presenca.schema')

const ConfirmacaoPresencaModel = mongoose.model('ConfirmacaoPresenca', confirmacaoPresencaSchema);

module.exports = {
    createConfirmacaoPresenca: function (obj) {
      var confirmacao = new ConfirmacaoPresencaModel({
        nome_convite: obj.nome_convite,
        nomes_acompanhantes: obj.nomes_acompanhantes,
        email: obj.email,
        telefone: obj.telefone
      });

      return confirmacao.save();
    }
}
