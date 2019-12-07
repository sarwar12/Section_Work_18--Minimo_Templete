$(document).ready(function($){
//Masonry Plugin 
	$(".product-list").masonry();
//Owl_Carousel_slider
	$(".homepage-slider").owlCarousel({
		items:1,
		loop:true,
		autoplay:false,
		dots:false,
		nav:true,
		navText:["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"]
	});
//Product-Promotion_carousel
	$(".product-promotions").owlCarousel({
		items:1,
		loop:true,
		autoplay:false,
		dots:true,
		nav:false,
	});
//Off_canvas_menu-Click_function
//raw_coding_jquery
	//For_menu_open
	$(".menu-trigger").on("click",function(){
		$(".off-canvas-menu, .off-canvas-overlay").addClass("active");
		return false;
	});
	//For_menu_Close
	$(".menu-close,.off-canvas-overlay").on("click",function(){
		$(".off-canvas-menu, .off-canvas-overlay").removeClass("active");
	});
});