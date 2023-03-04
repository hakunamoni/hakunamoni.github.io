/* User experience animations. Dependencies include the jQuery library, Waypoints plugin and Visibility plugin. - Rashmi Jadhav */
$(document).ready(function () {
    $(document).scroll(function () {
        var $nav = $('.fixed-top');
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
    $('#down-arrow').click(function (event) {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 150);
        return false;
    });
    AOS.init({
        // uncomment below for on-scroll animations to played only once
        // once: true
    }); // initialize animate on scroll library

    $(".show-more a").click(function(event) {
        var $this = $(this); 
        var $content = $this.parent().prev(".gallery");
        var linkText = $this.text().toUpperCase();    
        
        if(linkText === "SHOW MORE"){
            linkText = "Show less";
            $content.switchClass("hideContent", "showContent", 400);
        } else {
            linkText = "Show more";
            $content.switchClass("showContent", "hideContent", 400);
        };
    
        $this.text(linkText);
    });
});