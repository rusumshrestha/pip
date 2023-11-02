if($('img[src$=".svg"]').length > 0) {
    $(function() {
        $('img[src$=".svg"]').each(function() {

            var $img = jQuery(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');

            jQuery.get(imgURL, function(data) {
                // Get the SVG tag, ignore the rest
                var $svg = jQuery(data).find('svg');

                // Add replaced image's ID to the new SVG
                if (typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                // Add replaced image's classes to the new SVG
                if (typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass + ' replaced-svg');
                }

                // Remove any invalid XML tags as per http://validator.w3.org
                $svg = $svg.removeAttr('xmlns:a');

                // Replace image with new SVG
                $img.replaceWith($svg);

            }, 'xml');
        });
    });
}



$(document).ready(function() {
    $(".navbar-toggler").each(function () {
        var a = $(this);
        a.on("click", function () {
            a.toggleClass("active");
        })
    });

    $('.award-slider').owlCarousel({
        loop:true,
        nav: false,
        dots: false,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
                stagePadding: 32,
                margin:12,
            },
            767:{
                items:3,
                margin:12,
                stagePadding: 32,
            },
            992:{
                items:4,
                margin:18,
            },
            1440:{
                items:6,
                nav:true,
                margin:18,
            }
        }
    })
});

