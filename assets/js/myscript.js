// WINDOW VH

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});


// SCROLL WINDOW TO ID

$('a[href^="#"]').on('click', function(event) {
		var target = $(this.getAttribute('href'));
		if( target.length ) {
				event.preventDefault();
				$('html, body').stop().animate({
						scrollTop: target.offset().top
				}, 1000);
		}
});

// Menu Slide

	var menuHideShow = $('.menu').hasClass('menu_show');

	function desplazar (){
		$('.menu').toggleClass('menu_show');
    $('.hamburger_div').toggleClass('hamburger_div-slide');
		$('#hambIconOne').toggleClass('hamburger_icon_one');
		$('#hambIconTwo').toggleClass('hamburger_icon_two');
		$('#hambIconThree').toggleClass('hamburger_icon_three');
		// $('.menuicon').toggleClass('menuicon-black');
	}
	$('.hamburger_div').on('click', function(e){
		desplazar();
		e.stopPropagation();
		menuHideShow = $('.menu').hasClass('menu_show');
		console.log(menuHideShow)
	})

	window.addEventListener('click', function(e){
		if (menuHideShow = true && e.target.className != 'menu menu_show') {
			$('.menu').removeClass('menu_show');
			$('.hamburger_div').removeClass('hamburger_div-slide');
			$('#hambIconOne').removeClass('hamburger_icon_one');
			$('#hambIconTwo').removeClass('hamburger_icon_two');
			$('#hambIconThree').removeClass('hamburger_icon_three');
			// $('.menuicon').removeClass('menuicon-black');
			// e.stopPropagation();
		}
		console.log(e.target)
	})


// MENU STYLE

	var sectionOne = $('#sectionOne').offset();
	var sectionTwo = $('#sectionTwo').offset();
  var sectionThree = $('#sectionThree').offset();
	var position = $(window).scrollTop();



  // DESKTOPS

  // ---------------------------------


	var x = window.matchMedia("(min-width: 1100px)")

	function myFunction(x) {
	  if (x.matches) { // If media query matches

	  		var windowHeight = $( window ).height();
	  		var position = $(window).scrollTop();

			$(window).scroll(function(){
				if ( $(window).scrollTop() >= sectionOne.top + 300) {
          // ABAJO
              $('.laptop_menu_logo-white').addClass('logo-hide');
              $('.laptop_menu_logo_div').addClass('logo-small');
              $('.menu').addClass('menu-scroll');
              $('.menu-link').addClass('menu-link-scroll');
			    } else {
            // ARRIBA
            $('.laptop_menu_logo-white').removeClass('logo-hide');
            $('.laptop_menu_logo_div').removeClass('logo-small');
            $('.menu').removeClass('menu-scroll');
            $('.menu-link').removeClass('menu-link-scroll');
			    }
			})

      $(window).on('load', function(){
        if ( $(window).scrollTop() >= sectionOne.top + 300) {
          // ABAJO
              $('.laptop_menu_logo-white').addClass('logo-hide');
              $('.laptop_menu_logo_div').addClass('logo-small');
              $('.menu').addClass('menu-scroll');
              $('.menu-link').addClass('menu-link-scroll');
			    }
      })


      // PRODUCT TAB

      var nano = $('#nanocobre');
      var acces = $('#accesorios');
      var insu = $('#insumos');


      $(window).on('load', function(){
        nano.addClass('product_show');
        $('.nanocobre_button').children('.products_button_title').addClass('products_button_title-active');
        $('.nanocobre_button').children('.triangle').addClass('triangle-show');
      })

      $('#nanoButt').on('click', function(){
        $(nano).addClass('product_show');
        $(acces).removeClass('product_show');
        $(insu).removeClass('product_show');
        $('.nanocobre_button').children('.products_button_title').addClass('products_button_title-active');
        $('.accesorios_button').children('.products_button_title').removeClass('products_button_title-active');
        $('.insumos_button').children('.products_button_title').removeClass('products_button_title-active');
        $(this).children('.triangle').addClass('triangle-show');
        $('.accesorios_button').children('.triangle').removeClass('triangle-show');
        $('.insumos_button').children('.triangle').removeClass('triangle-show');
      });

      $('#accesButt').on('click', function(){
        $(nano).removeClass('product_show');
        $(acces).addClass('product_show');
        $(insu).removeClass('product_show');
        $('.nanocobre_button').children('.products_button_title').removeClass('products_button_title-active');
        $('.accesorios_button').children('.products_button_title').addClass('products_button_title-active');
        $('.insumos_button').children('.products_button_title').removeClass('products_button_title-active');
        $('.nanocobre_button').children('.triangle').removeClass('triangle-show');
        $(this).children('.triangle').addClass('triangle-show');
        $('.insumos_button').children('.triangle').removeClass('triangle-show');
      });

      $('#insuButt').on('click', function(){
        $(nano).removeClass('product_show');
        $(acces).removeClass('product_show');
        $(insu).addClass('product_show');
        $('.nanocobre_button').children('.products_button_title').removeClass('products_button_title-active');
        $('.accesorios_button').children('.products_button_title').removeClass('products_button_title-active');
        $('.insumos_button').children('.products_button_title').addClass('products_button_title-active');
        $('.nanocobre_button').children('.triangle').removeClass('triangle-show');
        $('.accesorios_button').children('.triangle').removeClass('triangle-show');
        $(this).children('.triangle').addClass('triangle-show');
      });

	  }
	}

	myFunction(x) // Call listener function at run time
	x.addListener(myFunction) // Attach listener function on state changes
