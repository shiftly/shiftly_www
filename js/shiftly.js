$('#myCarousel .carousel-text').hide();
$('#myCarousel .active .carousel-text').show();
$('.carousel').carousel();

$('#myCarousel').on('slide',function(){
    $('#myCarousel .active .carousel-text').fadeOut(300);
});

$('#myCarousel').on('slid',function(){
    $('#myCarousel .active .carousel-text').fadeIn();
});