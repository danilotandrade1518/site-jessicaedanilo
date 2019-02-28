$('#formComment').submit(function (e) {
  isLoading()

  e.preventDefault()

  const data = $(this).serializeArray()

  const comment={}
  data.forEach(d => {
    comment[d.name] = d.value
  })

  $.ajax({
      url: '/',
      data: JSON.stringify(comment),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      type: 'POST',
      success: data => {
        $("#mensagemSucesso").show()
        $("#mensagemErro").hide()

        stopLoading()

        resetaMensagens()
        buscaMensagens(1, res => {
          montaPagination()
          montaMensagens(res.mensagens)
        })
      },
      error: err => {
        $("#mensagemErro").show()
        $("#mensagemSucesso").hide()
        stopLoading()
      }
  })
})
