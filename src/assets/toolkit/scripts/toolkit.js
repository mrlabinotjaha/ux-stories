/**
 * Toolkit JavaScript
 */

'use strict';

var $ = require('jquery');
// var Modernizr = require('modernizr');

// Third-party modules
// require('../../vendor/example/plugin.js');

// Foundation JS
require('./foundation.js');

// Utilities
// require('./utils/reinit-components.js');

// Compatibility
// require('./compatibility/modernizr-tests.js');

// Components
// require('./components/owl-carousel.js');

$('.show-dropdown').click(function(){
	$(this).toggleClass('close');
});

$('.radio__container').change(function(){
	$(this).toggleClass('checked');
});

$('.radio-t').change(function(){
	$('.rde').removeClass('checked');
	$(this).toggleClass('checked');
});


var position = 0;

$('.input__wo-border .fmt').each(function(index){
 	$(this).css("top", position + "px");

	position--;
});

$('.input__wo-border .fmt').focusin(function(){
	$(this).addClass("index");
});



$('.input__wo-border .fmt').focusout(function(){
	$(this).removeClass("index");
});

$(function(){
	// $('input, textarea').placeholder();
	$(document).foundation();
	
	setTimeout(function(){
		$(".fouc").css('opacity',1);
	},200);
});

const $menu = $('.profile-nav__img--content');

$(document).mouseup(function (e) {
   if (!$menu.is(e.target) // if the target of the click isn't the container...
   && $menu.has(e.target).length === 0) // ... nor a descendant of the container
   {
     $menu.removeClass('opened');
  }
 });

$('.profile-nav__img').on('click', () => {
  $menu.toggleClass('opened');
});


//https://codepen.io/alexgill/pen/EWWojp
