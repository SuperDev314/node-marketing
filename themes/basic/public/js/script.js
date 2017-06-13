// add your code here

//FlexVerticalCenter
(function ($) {

    $.fn.flexVerticalCenter = function (onAttribute) {

        return this.each(function () {
            var $this = $(this);              // store the object
            var attribute = onAttribute || 'margin-top'; // the attribute to put the calculated value on

            // recalculate the distance to the top of the element to keep it centered
            var resizer = function () {
                // get parent height minus own height and devide by 2
                $this.css(
                    attribute, ( ( $this.parent().height() - $this.height() ) / 2 )
                );
            };

            // Call once to set.
            resizer();

            // Call on resize. Opera debounces their resize by default.
            $(window).resize(resizer);

            // Apply a load event to images within the element so it fires again after an image is loaded
            $this.find('img').load(resizer);

        });

    };

})(jQuery);

(function ($) {
    "use strict;"

    $(document).ready(function () {

        // prevent the # links to scroll to the top of the page
        $("[href=#]").click(function (e) {
            e.preventDefault();
        });

        $("[data-toggle=popover]").popover();

        $("[data-toggle=tooltip]").tooltip();

        // flexslider
        $('.flex-bullet-slider').flexslider({
            slideshowSpeed: 5000,
            directionNav: false,
            animation: "fade"
        });

        $('.flex-arrow-slider').flexslider({
            slideshowSpeed: 3000,
            directionNav: true,
            controlNav: false,
            animation: "fade"
        });

        $('.vertical-center').flexVerticalCenter('padding-top');

        //Sticky Header
        if ($().waypoint) {
            $('header').waypoint('sticky', {
                offset: "-25px"
            });
        }
        /*Add class when scroll down*/
        $(window).scroll(function (event) {
            var scroll = $(window).scrollTop();
            if (scroll >= 50) {
                $("#back-to-top").addClass("show");
            } else {
                $("#back-to-top").removeClass("show");
            }
        });

        $("#back-to-top").click(function () {
            $("html, body").animate({scrollTop: 0}, 300);
        });

        $("ul.nav > li").each(function () {
            $('ul.nav > li:has(ul)').addClass('dropdown');
        });

        var urlPath = location.pathname;
        $("ul.nav a").each(function () {
            $(this).parent().removeClass("active");
            var hrefVal = $(this).attr("href");
            if (urlPath == hrefVal) {
                $(this).parent().addClass("active");
                if ($(this).parents("ul").parent().is("li")) {
                    $(this).parents(".dropdown").addClass("active");
                }
            }
        });
    });

})(jQuery);

jQuery(window).load(function () {
    "use strict";

    // Parallax
    if ($(window).width() >= 991 && !navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/)) {
        $(window).stellar({
            horizontalScrolling: false,
            horizontalOffset: 0
        });
    }

    $(window).resize(function () {
        ($(window).width() < 991 || navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/)) ? $(window).stellar('destroy') : $(window).stellar({
            horizontalScrolling: false,
            horizontalOffset: 0
        });
    });

});

$(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
        $('header').addClass("sticky");
    }
    else {
        $('header').removeClass("sticky");
    }
});