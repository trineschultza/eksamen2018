document.addEventListener("DOMContentLoaded", hentJson);

async function hentJson() {

    let jsonObjekt = await fetch("http://meifriis.com/kea/scharlingwoodwp/wp-json/wp/v2/omos/42/");
    let omos = await jsonObjekt.json();

    document.querySelector("[data-img]").src = omos.acf.img.url;

    document.querySelector("[data-overskrift1]").innerHTML = omos.acf.overskrift1;
    document.querySelector("[data-tekst1]").innerHTML = omos.acf.tekst1;

    document.querySelector("[data-img2]").src = omos.acf.img2.url;
    document.querySelector("[data-overskrift3]").innerHTML = omos.acf.overskrift3;
    document.querySelector("[data-tekst3]").innerHTML = omos.acf.tekst3;

    document.querySelector("[data-img4]").src = omos.acf.img4.url;
    document.querySelector("[data-overskrift4]").innerHTML = omos.acf.overskrift4;
    document.querySelector("[data-tekst4]").innerHTML = omos.acf.tekst4;

    document.querySelector("[data-img5]").src = omos.acf.img5.url;
    document.querySelector("[data-overskrift5]").innerHTML = omos.acf.overskrift5;
    document.querySelector("[data-tekst5]").innerHTML = omos.acf.tekst5;

}
