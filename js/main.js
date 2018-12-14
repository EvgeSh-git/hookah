$(function () {
	$('[data-toggle="tooltip"]').tooltip({
		html: true
	});
});
jQuery(function($){
	$("input[name='phone']").mask("+7 (999) 999-99-99");
});
// Main Slider
$(document).ready(main_slider);
function main_slider() {
	$('.main_slider').slick({
        slidesToShow: 1,
	    slidesToScroll: 1,
	    infinite: true,
	    arrows: false,
	    autoplay: true,
	    autoplaySpeed: 5000,
	    speed: 1000,
	    dots: false,
	    slide: '.main_slider_it',
	    fade: false,
	    adaptiveHeight: false,
	    pauseOnHover: false
    });
	$('#main_slider_prev').click(function(){
		$('.main_slider').slick('slickPrev');
	});
	$('#main_slider_next').click(function(){
		$('.main_slider').slick('slickNext');
	});
}
// Hookah Slider
$(document).ready(function(){
	setTimeout(sliderLoad, 500);
	$('#hook_slider_prev').click(function(){
		$('.hook_slider').slick('slickPrev');
	});
	$('#hook_slider_next').click(function(){
		$('.hook_slider').slick('slickNext');
	});
});
function sliderLoad() {
	$('.hook_slider').on('init', function(e, slick) {
        var $firstAnimatingElements = $('.hook_slider_it:first-child').find('[data-animation]');
        doAnimations($firstAnimatingElements);        
    });
    $('.hook_slider').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
        var $animatingElements = $('.hook_slider_it[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
        doAnimations($animatingElements);
    });
    $('.hook_slider').slick({
        slidesToShow: 1,
	    slidesToScroll: 1,
	    infinite: true,
	    arrows: false,
	    autoplay: true,
	    autoplaySpeed: 5000,
	    speed: 200,
	    dots: false,
	    slide: '.hook_slider_it',
	    pauseOnHover: false,
	    fade: true
    });
}
function doAnimations(elements) {
    var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    elements.each(function() {
        var $this = $(this);
        var $animationDelay = $this.data('delay');
        if($this.hasClass('hook_slider_title')) {
        	var arr = ["fadeInUp", "fadeInDown", "fadeInLeft", "fadeInRight"];
			var rand = Math.floor(Math.random() * arr.length);
	        var $animationType = 'animated ' + arr[rand];	
        } else {
        	var $animationType = 'animated ' + $this.data('animation');
        }
        $this.css({
            'animation-delay': $animationDelay,
            '-webkit-animation-delay': $animationDelay,
            
        });
        $this.addClass($animationType+' fast').one(animationEndEvents, function() {
            $this.removeClass($animationType);
        });
    });
}

(function() { 
	"use strict"; 
	var toggles = document.querySelectorAll(".cmn-toggle-switch");
	for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
}; 
function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
    });
  } 
})();

// Склонение числительных
function declOfNum(number, titles) {  
    var cases = [2, 0, 1, 1, 1, 2];  
    return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
}

// Уведомления о заказе
function sucform() {
    $('.popup_window .fancybox-close-small').click();
    $.fancybox.open({
        src  : form_send,
        type : 'inline'
    });
}

$(document).ready(function(){	
	$('#fullpage').fullpage({
		licenseKey: '',
		autoScrolling:true,
		scrollHorizontally: false,
		normalScrollElements: '#sec_clients'
	});
	//methods
	$.fn.fullpage.setAllowScrolling(false);

	var  in_w = $('.main_slider_intro').width();
	$('.main_slider_intro').css('right', (-in_w+15)/2);
});
$(document).ready(function(){
	setTimeout(BigArr, 300);
});
function BigArr(){
	$('img[src="img/big_arrow.png"], .color_slider_prev, .color_slider_next').hover(function(){
		$(this).attr('src', 'img/big_arrow_hv.png');
	},function(){
		$(this).attr('src', 'img/big_arrow.png');
	});
}

// Category Slider
$(document).ready(function(){
	$('.all_slider').slick({
        slidesToShow: 3,
	    slidesToScroll: 1,
	    infinite: true,
	    arrows: false,
	    autoplay: false,
	    autoplaySpeed: 3000,
	    speed: 700,
	    dots: false,
	    slide: '.categ_slider',
	    vertical: false,
	    adaptiveHeight: true
    });
    $('#cat_slider_prev').click(function(){
		$('.all_slider').slick('slickPrev');
	});
	$('#cat_slider_next').click(function(){
		$('.all_slider').slick('slickNext');
	});

	$('.categ_slider_wrap').slick({
        slidesToShow: 1,
	    slidesToScroll: 1,
	    infinite: true,
	    arrows: true,
	    autoplay: false,
	    autoplaySpeed: 3000,
	    speed: 500,
	    dots: false,
	    slide: '.cat_sl',
	    vertical: true,
	    verticalSwiping: false,
	    draggable: false,
	    prevArrow: '<img src="img/big_arrow.png" class="color_slider_prev">',
	    nextArrow: '<img src="img/big_arrow.png" class="color_slider_next">'
    });    
    $('.color_slider_next, .color_slider_prev').css('display', 'none');
    $('#color_slider_next, #color_slider_prev').css('display', 'none');
    $('.categ_slider.slick-current').next('.categ_slider').find('.color_slider_next').fadeIn(0);
	$('.categ_slider.slick-current').next('.categ_slider').find('.color_slider_prev').fadeIn(0);
    $('.all_slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    	$('.color_slider_next, .color_slider_prev').css('display', 'none');
    	$('#color_slider_next, #color_slider_prev').css('display', 'block');    	
    });
    $('.all_slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
		$('.categ_slider.slick-current').next('.categ_slider').find('.color_slider_next').fadeIn(0);
		$('.categ_slider.slick-current').next('.categ_slider').find('.color_slider_prev').fadeIn(0);
		$('#color_slider_next, #color_slider_prev').css('display', 'none');
	});	
});
