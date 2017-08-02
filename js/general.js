$(document).ready(function () {
    /* Responsive Menu*/
    $('.enumenu_ul').responsiveMenu({
        'menuIcon_text': 'Menu',
        menuslide_overlap: true,
        menuslide_direction: 'left',
        onMenuopen: function () {}
    });
    /*flag selector*/
    $(".selectbox").selectbox({});
    /*About Slider*/
    $('.tabs li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    });
    $('.main-nav a').click(function () {
            $("body").removeClass("menu-open");
            $(".menu-icon").removeClass("active");
        })
        /* scroll on header menu*/
    $('#header a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            var h = document.getElementById('header');
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    })

$(function() {
  $('.sbHolder').hover(function() {
    $('.sbToggle').css('background-color', '#980000');
  }, function() {
    // on mouseout, reset the background colour
    $('.sbToggle').css('background-color', '#BC0000');
  });
});

function resizeHeaderOnScroll() {
  const distanceY = window.pageYOffset || document.documentElement.scrollTop,
  shrinkOn = 110,
  headerEl = document.getElementById('header');
  
  if (distanceY > shrinkOn) {
    headerEl.classList.add("smaller");
  } else {
    headerEl.classList.remove("smaller");
  }
}

window.addEventListener('scroll', resizeHeaderOnScroll);

  $("#category-selection").change(function(){
    $("#boxes").load( $(this).val() );
});

});

$(function() {
		setTimeout(func, 500);
			function func() {
      			$('body').removeClass('fade-out');
			}
	});