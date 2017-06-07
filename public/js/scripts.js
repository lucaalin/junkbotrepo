// Javascript
$(document).ready(function(){

    // Nav trigger
    $("#btn-toggle-nav").click(function(){
        $(".header-container").toggleClass("displayed");
    });

    $("#btn-close-nav").click(function(){
        $(".header-container").toggleClass("displayed");
    });

    $(document).ready(function(){
        $('.dropdown-toggle').dropdown();
    });

    $('#myTabs a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });

    // Sticky header
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1){
            $('.sub-header').addClass("sticky-header");
        }
        else{
            $('.sub-header').removeClass("sticky-header");
        }
    });

});