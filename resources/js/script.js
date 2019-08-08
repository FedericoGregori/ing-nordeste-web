$(document).ready(function() {
    /* Sticky navbar */
    $(".js--section-features").waypoint(
        function(direction) {
            if (direction == "down") {
                $("header").addClass("sticky");
            } else {
                $("header").removeClass("sticky");
            }
        },
        {
            offset: "10%;"
        }
    );

    /* Navigation scroll */
    $(function() {
        $("a[href*=\\#]:not([href=\\#])").click(function() {
            if (
                location.pathname.replace(/^\//, "") ==
                    this.pathname.replace(/^\//, "") &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length
                    ? target
                    : $("[name=" + this.hash.slice(1) + "]");
                if (target.length) {
                    $("html,body").animate(
                        {
                            scrollTop: target.offset().top - 50
                        },
                        1000
                    );
                    return false;
                }
            }
        });
    });

    /* Animations on scroll */

    $(".js--wp-1").waypoint(
        function(direction) {
            $(".js--wp-1").addClass("animated slideInRight");
        },
        {
            offset: "70%"
        }
    );

    $(".js--wp-2").waypoint(
        function(direction) {
            $(".js--wp-2").addClass("animated fadeInUp");
        },
        {
            offset: "70%"
        }
    );

    $(".js--wp-3").waypoint(
        function(direction) {
            $(".js--wp-3").addClass("animated fadeInLeft");
        },
        {
            offset: "70%"
        }
    );

    $(".js--wp-4").waypoint(
        function(direction) {
            $(".js--wp-4").addClass("animated fadeInUp");
        },
        {
            offset: "70%"
        }
    );

    $(".js--wp-5").waypoint(
        function(direction) {
            $(".js--wp-5").addClass("animated fadeInLeft");
        },
        {
            offset: "70%"
        }
    );

    $(".js--wp-6").waypoint(
        function(direction) {
            $(".js--wp-6").addClass("animated fadeInRight");
        },
        {
            offset: "70%"
        }
    );
});
