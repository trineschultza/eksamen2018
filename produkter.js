document.addEventListener("DOMContentLoaded", hentJson);

async function hentJson() {

    var urlParams = new URLSearchParams(window.location.search);
    let id = urlParams.get("produkter");
    let jsonObjekt = await fetch("http://meifriis.com/kea/scharlingwoodwp/wp-json/wp/v2/produkter/12");
    let produkter = await jsonObjekt.json();

    document.querySelector("[data-snedkerimg]").src = produkter.acf.snedkerimg.url;


}
