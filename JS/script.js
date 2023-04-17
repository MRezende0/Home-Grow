// Começo loading
$(function () {
    //HEADER
    $(window).scroll(function () {
          if($(this).scrollTop() > 200)
          {
              if (!$('.main_header').hasClass('fixed'))
              {
                  $('.main_header').stop().addClass('fixed').css('top', '-100px').animate(
                      {
                          'top': '0px'
                      }, 500);
              }
          }
          else
          {
              $('.main_header').removeClass('fixed');
          }
    });
});

$(window).load(function() { // makes sure the whole site is loaded
  $('#status').fadeOut(); // will first fade out the loading animation
  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
  $('body').delay(350).css({'overflow':'visible'});
})
// Fim loading


// Começo Mostrar senha
function typeChanger() {
    if (password.type === "password") {
        password.type = "text"
        document.getElementsById("eye").img = "./Images/eye-hide.svg";
    }
    else {
        password.type = "password"
        document.getElementsById("eye").img = "./Images/eye-view.svg";
    }
}

function imgChanger() {

    let imgElement = document.getElementById("eye");

    if (eye.src.match("./Images/eye-view.svg")) {
        imgElement.src = "./Images/eye-hide.svg"
    }
    else {
        imgElement.src = "./Images/eye-view.svg"
    }
}
// Fim Mostrar senha