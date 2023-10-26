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
});


 const inViewport = (entries, observer) => {
      entries.forEach(entry => {
        entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
      });
    };

    const Obs = new IntersectionObserver(inViewport);
    const obsOptions = {}; //See: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options

    // Attach observer to every [data-inviewport] element:
    const ELs_inViewport = document.querySelectorAll('[data-inviewport]');
    ELs_inViewport.forEach(EL => {
      Obs.observe(EL, obsOptions);
    });