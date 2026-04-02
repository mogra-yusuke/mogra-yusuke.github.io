
//swiper//
$(function () {
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        speed:600,
    
          navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        autoplay: {
            delay: 8000,
            disableOnInteraction: false,
        },
    });
});



$(function(){
$('a[href^="#"]').click(function() {
var speed = 400; //ここはお好きな数値に変えてください
var href= $(this).attr("href");
var target = $(href == "#" || href == "" ? 'html' : href);
var position = target.offset().top;
$('body,html').animate({scrollTop:position}, speed, 'swing');
return false;
});
});


$(document).ready(function() {
$('.drawer').drawer();
});










$(function () {
  $('.fadein').on('inview', function (event, isInView, visiblePartX, visiblePartY) {
    if (isInView) {
      $(this).stop().addClass('fadein_af');
    }
  });




selector_menu_nav = $("#ctl-g-nav");
  selector_menu_button = $("#ctl-menu-button");
  selector_overlay = $('#ctl-overlay');

  selector_menu_nav_label = $("#ctl-g-nav .nav-label");

  


  // removeEventListener を使うのでfunctionに名前を付ける
  var scrollOff = function( e ){
    e.preventDefault();
  }

  function menu_toggle(){
    if (!selector_menu_nav.hasClass('show')) {
      menu_open();
    } else {
      menu_close()
    }
  }

  function menu_open(){
    if (!selector_menu_nav.hasClass('show')) {
      selector_overlay.fadeIn(500);

      // スクロールをキャンセル
      document.addEventListener( 'touchmove',scrollOff, {passive: false});

      $('html, body').css('overflow', 'hidden');
      selector_menu_button.addClass('active');
      selector_menu_nav.addClass('show');
    }
  }

  function menu_close() {
    if (selector_menu_nav.hasClass('show')) {
      // スクロール無効を解除する
      //removeEventListenerで「スクロールをキャンセル」をキャンセル
      document.removeEventListener( 'touchmove', scrollOff, false );

      selector_overlay.fadeOut(500);
      $('body').removeAttr('style');
      $('html').removeAttr('style');
      selector_menu_button.removeClass('active');
      selector_menu_nav.removeClass('show');
    }
  }

  selector_menu_button.click(function () {
    menu_toggle();
  });

  selector_menu_nav_label.on('click', function(){
    menu_close();
  });

});







