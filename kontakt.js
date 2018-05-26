document.addEventListener("DOMContentLoaded", hentJson);

async function hentJson() {

    let jsonObjekt = await fetch("http://meifriis.com/kea/scharlingwoodwp/wp-json/wp/v2/kontakt/13");
    let kontakt = await jsonObjekt.json();
    document.querySelector("[data-overskrift]").innerHTML = kontakt.acf.kontaktoverskrift;
    document.querySelector("[data-img]").src = kontakt.acf.img.url;

    document.querySelector("[data-telefon]").innerHTML = kontakt.acf.telefon;
    document.querySelector("[data-email]").innerHTML = kontakt.acf.email;
    document.querySelector("[data-tekst]").innerHTML = kontakt.acf.tekst;
    document.querySelector("[data-overskrift2]").innerHTML = kontakt.acf.overskrift2;
    document.querySelector("[data-varkstedtekst]").innerHTML = kontakt.acf.varkstedtekst;
    document.querySelector("[data-meretekst]").innerHTML = kontakt.acf.meretekst;


}
