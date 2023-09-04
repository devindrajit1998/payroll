$(document).ready(function() {
    // Initialize Owl Carousel
    var owl = $("#myCarousel");
    owl.owlCarousel({
        items: 3, // Display 3 cards at a time
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1, // Display 1 card on small screens
            },
            768: {
                items: 2, // Display 2 cards on medium screens
            },
            992: {
                items: 3, // Display 3 cards on large screens (col-lg-9)
            },
        },
    });

    // Toggle Carousel Button
    $("#toggleButton").click(function() {
        owl.trigger("stop.owl.autoplay"); // Stop autoplay
        owl.toggleClass("owl-hidden"); // Toggle the carousel visibility
    });

    // Previous Button
    $("#prevButton").click(function() {
        owl.trigger("prev.owl.carousel");
    });

    // Next Button
    $("#nextButton").click(function() {
        owl.trigger("next.owl.carousel");
    });
});