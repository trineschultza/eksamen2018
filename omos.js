/*document.addEventListener("DOMContentLoaded", hentJson);

async function hentJson() {

    var urlParams = new URLSearchParams(window.location.search);
    let id = urlParams.get("kobhosscharling");
    let jsonObjekt = await fetch("http://meifriis.com/kea/scharlingwoodwp/wp-json/wp/v2/kobhosscharling/13");
    let kobhosscharling = await jsonObjekt.json();

    document.querySelector("[data-overskrift]").innerHTML = kobhosscharling.acf.kobhosscharlingoverskrift;
    document.querySelector("[data-telefon]").innerHTML = kobhosscharling.acf.telefon;
    document.querySelector("[data-email]").innerHTML = kobhosscharling.acf.email;
    document.querySelector("[data-tekst]").innerHTML = kobhosscharling.acf.tekst;
    document.querySelector("[data-overskrift2]").innerHTML = kobhosscharling.acf.overskrift2;
    document.querySelector("[data-varkstedtekst]").innerHTML = kobhosscharling.acf.varkstedtekst;
    document.querySelector("[data-meretekst]").innerHTML = kobhosscharling.acf.meretekst;

}*/
