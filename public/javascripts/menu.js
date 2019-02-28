let fixedNav = false

function setFixedNav(isFixedNav) {
  fixedNav = isFixedNav
}

jQuery(document).ready(function($) {
  if(!fixedNav) {
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink")
      } else {
        $("#mainNav").removeClass("navbar-shrink")
      }
    }

    navbarCollapse()

    $(window).scroll(navbarCollapse)
  }

  $("#navbarResponsive > .navbar-nav > .nav-item > a").each(function() {
    let currentPath = window.location.pathname

    const lastChar = currentPath.substring( (currentPath.length), (currentPath.length-1) )

    if(lastChar === '/') {
      currentPath = window.location.pathname.slice(0, -1)
    }

    const currentLinkPath = $(this).attr("href")

    if(currentPath === currentLinkPath){
      $(this).addClass("active")
    } else {
      $(this).removeClass("active")
    }
  })
})
