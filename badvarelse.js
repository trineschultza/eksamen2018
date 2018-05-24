document.addEventListener("DOMContentLoaded", hentJson);

async function hentJson() {

    let jsonObjekt = await fetch("http://meifriis.com/kea/scharlingwoodwp/wp-json/wp/v2/badvarelse/33");
    let badvarelse = await jsonObjekt.json();

    document.querySelector("[data-overskrift]").innerHTML = badvarelse.acf.overskrift;
    document.querySelector("[data-img]").src = badvarelse.acf.img.url;

    document.querySelector("[data-overskrift2]").innerHTML = badvarelse.acf.overskrift2;
    document.querySelector("[data-tekst2]").innerHTML = badvarelse.acf.tekst2;

    document.querySelector("[data-overskrift3]").innerHTML = badvarelse.acf.overskrift3;
    document.querySelector("[data-img3]").src = badvarelse.acf.img3.url;
    document.querySelector("[data-tekst3]").innerHTML = badvarelse.acf.tekst3;

    document.querySelector("[data-overskrift4]").innerHTML = badvarelse.acf.overskrift4;
    document.querySelector("[data-tekst4]").innerHTML = badvarelse.acf.tekst4;
    document.querySelector("[data-img4]").src = badvarelse.acf.img4.url;
    document.querySelector("[data-img5]").src = badvarelse.acf.img5.url;
    document.querySelector("[data-img6]").src = badvarelse.acf.img6.url;
}
