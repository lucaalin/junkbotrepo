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

});