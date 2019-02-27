let pagination

function buscaMensagens(page, callback) {
  isLoading()

  $.ajax({
    url: `/mensagens?page=${page}&limit=5`,
  }).done(res => {
    pagination = res.pagination
    stopLoading()
    callback(res)
  })
}

function resetaMensagens() {
  $('.comment').remove()
}

function montaMensagens(mensagens) {
  mensagens.forEach(mensagem => {
    $(`
      <div class="media comment">
        <img src="/images/user-placeholder.png" class="mr-3" alt="Usuário do comentário">
        <div class="media-body">
          <h5 class="mt-0 nome">${mensagem.author}</h5>
          <span class="data text-muted">${mensagem.data}</span>
          <span class="message">${mensagem.mensagem}</span>
        </div>
      </div>
    `).insertBefore('#mensagens > #paginationMain')
  })
}

function addEventoPaginas() {
  $("#pagination > li.page > a").each(function() {
    const itemId = $(this).attr('id')
    const page = itemId.substring(itemId.indexOf("-")+1)

    $(this).click(e => {
      e.preventDefault()
      resetaMensagens()

      buscaMensagens(page, res => {
        montaPagination()
        montaMensagens(res.mensagens)
      })
    })
  })
}

function montaPaginas() {
  $('.page').remove()
  pagination.all_pages.forEach(page => {
    let currentDisabled = ''

    if (page.number === pagination.current_page) {
      currentDisabled = 'disabled'
    }
    $(`
      <li class="page page-item">
        <a id="page-${page.number}" class="btn btn-link ${currentDisabled}" href="#">
          ${page.number}
        </a>
      </li>
    `).insertBefore("#pagination > #lastPageItem")
  })

  addEventoPaginas()
}

function montaPagination() {
  if(pagination.showPaginationMensagens) {
    $("#paginationMain").removeClass("hide")
  } else {
    $("#paginationMain").addClass("hide")
  }

  if(pagination.has_prev) {
    $("#firstPage").removeClass("disabled")
  } else {
    $("#firstPage").addClass("disabled")
  }

  if(pagination.has_next) {
    $("#lastPage").removeClass("disabled")
  } else {
    $("#lastPage").addClass("disabled")
  }

  montaPaginas()
}

jQuery(document).ready(function($) {
  buscaMensagens(1, res => {
    montaPagination()
    montaMensagens(res.mensagens)
  })

  $("#firstPage").click(function(e) {
    e.preventDefault()

    resetaMensagens()

    buscaMensagens(1, res => {
      montaPagination()
      montaMensagens(res.mensagens)
    })
  })

  $("#lastPage").click(function(e) {
    e.preventDefault()

    resetaMensagens()

    const lastPage = pagination.last_page

    buscaMensagens(lastPage, res => {
      montaPagination()
      montaMensagens(res.mensagens)
    })
  })
})
