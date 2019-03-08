$('#formConfirmarPresenca').submit(function (e) {
  isLoading()

  e.preventDefault()

  const data = $(this).serializeArray()

  const confirmacao={}
  data.forEach(d => {
    confirmacao[d.name] = d.value
  })

  $.ajax({
      url: '/confirmar-presenca',
      data: JSON.stringify(confirmacao),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      type: 'POST',
      success: data => {
        $("#mensagemSucesso").show()
        $("#mensagemErro").hide()

        $(this).trigger("reset");

        stopLoading()
      },
      error: err => {
        $("#mensagemErro").show()
        $("#mensagemSucesso").hide()
        stopLoading()
      }
  })
})
