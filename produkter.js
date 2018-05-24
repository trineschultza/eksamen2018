document.addEventListener("DOMContentLoaded", hentJson);

async function hentJson() {

    let jsonObjekt = await fetch("http://meifriis.com/kea/scharlingwoodwp/wp-json/wp/v2/produkter/12");
    let produkter = await jsonObjekt.json();

    document.querySelector("[data-snedkerimg]").src = produkter.acf.snedkerimg.url;

    document.querySelector("[data-badeværelseimg]").src = produkter.acf.badeværelseimg.url;

    document.querySelector("[data-plankebordeimg]").src = produkter.acf.plankebordeimg.url;

    document.querySelector("[data-andetimg]").src = produkter.acf.andetimg.url;
}
