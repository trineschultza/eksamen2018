$(document).ready(function () {
    $(".nav_snedkerkokken").click(function () {
        $("#snedkerkokken").slideDown("slow");
        $("#nytkokken").slideDown("slow");
        $("#pris").slideDown("slow");
        $("html, body").animate({
            scrollTop: 450
        }, 900);


    });


    $(".nav_nytkokken").click(function () {
        $("#snedkerkokken").slideUp("slow");
        $("#nytkokken").slideDown("slow");
        $("#pris").slideUp("slow");

        $("html, body").animate({
            scrollTop: 450
        }, 900);


    });


    $(".nav_pris").click(function () {
        $("#nytkokken").slideUp("slow");
        $("#snedkerkokken").slideUp("slow");

        $("#pris").slideDown("pris");


        $("html, body").animate({
            scrollTop: 450
        }, 900);

    });




    $('.up').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });




});


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
