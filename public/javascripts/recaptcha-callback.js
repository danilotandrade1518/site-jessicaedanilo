function enableSubmitButton(){
  $('form').find('input[type="submit"]').prop('disabled', false)
}

jQuery(document).ready(function($) {
  const recaptcha = $('.g-recaptcha ')
  const form = recaptcha.parent()

  form.find('input[type="submit"]').prop('disabled', true)

  form.submit(function (e) {
    grecaptcha.reset()
    form.find('input[type="submit"]').prop('disabled', true)
  })
})
