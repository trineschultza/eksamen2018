document.addEventListener("DOMContentLoaded", hentJson);

async function hentJson() {

    var urlParams = new URLSearchParams(window.location.search);
    let id = urlParams.get("snedkerkokken");
    let jsonObjekt = await fetch("http://meifriis.com/kea/scharlingwoodwp/wp-json/wp/v2/snedkerkokken/37");
    let snedkerkokken = await jsonObjekt.json();

    document.querySelector("[data-overskrift]").innerHTML = snedkerkokken.acf.overskrift;
    document.querySelector("[data-img]").src = snedkerkokken.acf.img.url;

    document.querySelector("[data-overskrift2]").innerHTML = snedkerkokken.acf.overskrift2;
    document.querySelector("[data-overskrift3]").innerHTML = snedkerkokken.acf.overskrift3;
    document.querySelector("[data-tekst3]").innerHTML = snedkerkokken.acf.tekst3;

    document.querySelector("[data-overskrift4]").innerHTML = snedkerkokken.acf.overskrift4;
    document.querySelector("[data-img4]").src = snedkerkokken.acf.img4.url;
    document.querySelector("[data-tekst4]").innerHTML = snedkerkokken.acf.tekst4;

    document.querySelector("[data-overskrift5]").innerHTML = snedkerkokken.acf.overskrift5;
    document.querySelector("[data-tekst5]").innerHTML = snedkerkokken.acf.tekst5;

    document.querySelector("[data-overskrift6]").innerHTML = snedkerkokken.acf.overskrift6;
    document.querySelector("[data-tekst6]").innerHTML = snedkerkokken.acf.tekst6;

    document.querySelector("[data-overskrift7]").innerHTML = snedkerkokken.acf.overskrift7;
    document.querySelector("[data-tekst7]").innerHTML = snedkerkokken.acf.tekst7;
    document.querySelector("[data-img8]").src = snedkerkokken.acf.img8.url;
    document.querySelector("[data-img9]").src = snedkerkokken.acf.img9.url;
    document.querySelector("[data-img10]").src = snedkerkokken.acf.img10.url;
}
