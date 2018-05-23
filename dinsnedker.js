document.addEventListener("DOMContentLoaded", hentJson);

async function hentJson() {

    var urlParams = new URLSearchParams(window.location.search);
    let id = urlParams.get("dinsnedker");
    let jsonObjekt = await fetch("http://meifriis.com/kea/scharlingwoodwp/wp-json/wp/v2/dinsnedker/35");
    let dinsnedker = await jsonObjekt.json();

    document.querySelector("[data-overskrift]").innerHTML = dinsnedker.acf.overskrift;

    document.querySelector("[data-Overskrift2]").innerHTML = dinsnedker.acf.Overskrift2;
    document.querySelector("[data-Tekst2]").innerHTML = dinsnedker.acf.Tekst2;
}
