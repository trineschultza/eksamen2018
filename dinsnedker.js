document.addEventListener("DOMContentLoaded", hentJson);

async function hentJson() {

    let jsonObjekt = await fetch("http://meifriis.com/kea/scharlingwoodwp/wp-json/wp/v2/dinsnedker/35");
    let dinsnedker = await jsonObjekt.json();

    document.querySelector("[data-img]").src = dinsnedker.acf.img.url;

    document.querySelector("[data-overskrift2]").innerHTML = dinsnedker.acf.overskrift2;
    document.querySelector("[data-tekst2]").innerHTML = dinsnedker.acf.tekst2;
    document.querySelector("[data-img2]").src = dinsnedker.acf.img2.url;

    document.querySelector("[data-tekst3]").innerHTML = dinsnedker.acf.tekst3;

}
