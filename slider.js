$(document).ready(function () {
    $(".nav_snedkerkokken").click(function () {
        $("#snedkerkokken").slideUp("slow");
        $("#nytkokken").slideDown("slow");
        $("#pris").slideUp("slow");

        $("html, body").animate({
            scrollTop: 750
        }, 900);


    });


    $(".nav_nytkokken").click(function () {
        $("#snedkerkokken").slideUp("slow");
        $("#nytkokken").slideDown("slow");
        $("#pris").slideUp("slow");

        $("html, body").animate({
            scrollTop: 750
        }, 900);


    });


    $(".nav_pris").click(function () {
        $("#nytkokken").slideUp("slow");
        $("#cv").slideUp("slow");

        $("#snedkerkokken").slideDown("pris");


        $("html, body").animate({
            scrollTop: 730
        }, 900);

    });


    $(".nav_forside").click(function () {
        $("#cv").show();
        $("#portfoliomappe").show();
        $("html, body").animate({
            scrollTop: 10
        }, 900);

    });



    $('.up').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

});
