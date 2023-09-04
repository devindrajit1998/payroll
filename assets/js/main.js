$(document).ready(function() {
   
    var owl = $("#myCarousel");
    owl.owlCarousel({
        items: 3, 
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1, 
            },
            768: {
                items: 2, 
            },
            992: {
                items: 3, 
            },
        },
    });

    
    $("#toggleButton").click(function() {
        owl.trigger("stop.owl.autoplay"); 
        owl.toggleClass("owl-hidden"); 
    });

    
    $("#prevButton").click(function() {
        owl.trigger("prev.owl.carousel");
    });

   
    $("#nextButton").click(function() {
        owl.trigger("next.owl.carousel");
    });
});