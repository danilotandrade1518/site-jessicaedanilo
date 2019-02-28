function buscaImagens(callback) {
  isLoading()

  $.ajax({
    url: `/galeria/imagens`,
  }).done(res => {
    stopLoading()
    callback(res)
  })
}

function montaImagens(imagens) {
  imagens.forEach(imagem => {
    $('.my-gallery').append(`
      <figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
        <a href="${imagem.url}" itemprop="contentUrl" data-size="${imagem.width}x${imagem.height}">
          <img src="${imagem.url}" itemprop="thumbnail" alt="${imagem.name}" />
        </a>
        <figcaption itemprop="caption description">${imagem.name}</figcaption>
      </figure>
    `)
  })
}

jQuery(document).ready(function($) {
  buscaImagens(imagens => {
    montaImagens(imagens)
  })
})
