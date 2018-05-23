document.addEventListener("DOMContentLoaded", hentJson);

async function hentJson() {

    var urlParams = new URLSearchParams(window.location.search);
    let id = urlParams.get("produkter");
    let jsonObjekt = await fetch("http://meifriis.com/kea/scharlingwoodwp/wp-json/wp/v2/produkter/12");
    let produkter = await jsonObjekt.json();

    document.querySelector("[data-snedkerimg]").src = produkter.acf.snedkerimg.url;
    document.querySelector("[data-snedkeroverskrift]").innerHTML = produkter.acf.snedkeroverskrift;

    document.querySelector("[data-badeværelseimg]").src = produkter.acf.badeværelseimg.url;
    document.querySelector("[data-badeværelseoverskrift]").innerHTML = produkter.acf.badeværelseoverskrift;

    document.querySelector("[data-plankebordeimg]").src = produkter.acf.plankebordeimg.url;
    document.querySelector("[data-plankebordeoverskrift]").innerHTML = produkter.acf.plankebordeoverskrift;

    document.querySelector("[data-andetimg]").src = produkter.acf.andetimg.url;
    document.querySelector("[data-andetoverskrift]").innerHTML = produkter.acf.andetoverskrift;
}
