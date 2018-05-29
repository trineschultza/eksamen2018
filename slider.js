$(document).ready(function () {
    $(".nav_snedkerkokken").click(function () {
        //        $("#snedkerkokken").slideDown("slow");
        //        $("#nytkokken").slideUp("slow");
        //        $("#pris").slideUp("slow");
        //        $("html, body").animate({
        //            scrollTop: 450
        //        }, 900);


        $('#snedkerkokken').goTo();
    });


    $(".nav_nytkokken").click(function () {
        //$("#snedkerkokken").slideUp("slow");
        //$("#nytkokken").slideDown("slow");
        //        ("#pris").slideUp("slow");
        //        $("html, body").animate({
        //            scrollTop: 450
        //        }, 900);
        $('#nytkokken').goTo();

    });

    (function ($) {
        $.fn.goTo = function () {
            let scrollTo = $(this).offset().top - $(".navbar1").outerHeight() - 10;
            console.log(scrollTo);
            $('html, body').animate({
                scrollTop: scrollTo + 'px'
            }, 'slow');
            return this; // for chaining...
        }
    })(jQuery);


    $(".nav_pris").click(function () {
        //        $("#nytkokken").slideUp("slow");
        //        $("#snedkerkokken").slideUp("slow");
        //
        //        $("#pris").slideDown("pris");
        //
        //
        //        $("html, body").animate({
        //            scrollTop: 450
        //        }, 900);

        $('#pris').goTo();
    });


    $(".nav_proces").click(function () {
        //        $("#levering").slideUp("slow");
        //        $("#vedligeholdelse").slideUp("slow");
        //        $("#omhandvark").slideUp("slow");
        //
        //
        //        $("#proces").slideDown("pris");
        //
        //
        //        $("html, body").animate({
        //            scrollTop: 435
        //        }, 900);
        $('#proces').goTo();

    });

    $(".nav_levering").click(function () {
        //        $("#proces").slideUp("slow");
        //        $("#vedligeholdelse").slideUp("slow");
        //        $("#omhandvark").slideUp("slow");
        //
        //
        //        $("#levering").slideDown("pris");
        //
        //
        //        $("html, body").animate({
        //            scrollTop: 450
        //        }, 900);
        $('#levering').goTo();

    });

    $(".nav_vedligeholdelse").click(function () {
        //        $("#proces").slideUp("slow");
        //        $("#levering").slideUp("slow");
        //        $("#omhandvark").slideUp("slow");
        //
        //
        //        $("#vedligeholdelse").slideDown("pris");
        //
        //
        //        $("html, body").animate({
        //            scrollTop: 435
        //        }, 900);
        $('#vedligeholdelse').goTo();

    });

    $(".nav_omhandvark").click(function () {
        //        $("#proces").slideUp("slow");
        //        $("#vedligeholdelse").slideUp("slow");
        //        $("#levering").slideUp("slow");
        //
        //
        //        $("#omhandvark").slideDown("pris");
        //
        //
        //        $("html, body").animate({
        //            scrollTop: 435
        //        }, 900);
        $('#omhandvark').goTo();

    });



    $('.up').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

});
