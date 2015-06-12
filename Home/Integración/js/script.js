/**
 * Parallax Scrolling Tutorial
 * For NetTuts+
 *  
 * Author: Mohiuddin Parekh
 *	http://www.mohi.me
 * 	@mohiuddinparekh   
 */


$(document).ready(function(){
	// Cache the Window object
	$window = $(window);
                
   $('article[data-type="background"]').each(function(){
     var $bgobj = $(this); // assigning the object
      

      $(window).scroll(function() {
                    
      		// Scroll the background at var speed
      		// the yPos is a negative value because we're scrolling it UP!								
      		var yPos = -($window.scrollTop() / $bgobj.data('speed'))+160; 
      		
      		// Put together our final background position
         
            var coords = '50% '+ yPos + 'px';
          
      		

      		// Move the background
      		$bgobj.css({ backgroundPosition: coords });
      		
      }); // window scroll Ends

   });	


/* 
 * Create HTML5 elements for IE's sake
 */

document.createElement("article");
document.createElement("section");
/*
 * Fin
 */

var sections = $('.post_article')
  , nav = $('#navbar')
  , nav_height = nav.outerHeight();
 
/*$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
  var cur_pos = cur_pos +160;
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
    
   

    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('current');
      sections.removeClass('current');
 
      $(this).addClass('');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('current');
    }
  });
});*/


}); 