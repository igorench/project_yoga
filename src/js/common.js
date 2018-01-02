$(document).ready(function(){
    function heightDetect() {
        $("#header").css("height", $(window).height());
    };
    heightDetect();
    $(window).resize(function() {
        heightDetect();
    });

    $(".nav .nav-menu li a").mPageScroll2id();
});
