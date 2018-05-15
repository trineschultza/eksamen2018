document.addEventListener("DOMContentLoaded", hentJson);

async function hentJson() {

    var urlParams = new URLSearchParams(window.location.search);
    let id = urlParams.get("kontakt");
    let jsonObjekt = await fetch("http://meifriis.com/kea/scharlingwoodwp/wp-json/wp/v2/kontakt/");
    let kontakt = await jsonObjekt.json();

    document.querySelector("[data-overskrift]").innerHTML = kontakt.acf.kontaktoverskrift;
}
