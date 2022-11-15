const circleType = new CircleType(document.getElementById('circle-box__rotate'));
circleType.radius(340);

$(".circle-box__single").hover(function(){
    $(".circle-overlay").toggleClass('active');
});