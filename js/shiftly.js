$('#myCarousel .carousel-text').hide();
$('#myCarousel .carousel-image').hide();
$('#myCarousel .active .carousel-text').show();
$('#myCarousel .active .carousel-image').show();
$('.carousel').carousel();

$('#myCarousel').on('slid',function(){
    $('#myCarousel .carousel-text').hide();
	$('#myCarousel .carousel-image').hide();
    $('#myCarousel .active .carousel-text').fadeIn(300);
    $('#myCarousel .active .carousel-image').fadeIn(1000);
});