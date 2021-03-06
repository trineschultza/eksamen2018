document.addEventListener("DOMContentLoaded", hentJson);

async function hentJson() {

    let jsonObjekt = await fetch("http://meifriis.com/kea/scharlingwoodwp/wp-json/wp/v2/planke/31");
    let planke = await jsonObjekt.json();

    document.querySelector("[data-img]").src = planke.acf.img.url;

    document.querySelector("[data-overskrift2]").innerHTML = planke.acf.overskrift2;
    document.querySelector("[data-tekst2]").innerHTML = planke.acf.tekst2;
    document.querySelector("[data-img2]").src = planke.acf.img2.url;


    document.querySelector("[data-overskrift4]").innerHTML = planke.acf.overskrift4;
    document.querySelector("[data-tekst4").innerHTML = planke.acf.tekst4;
    document.querySelector("[data-img4]").src = planke.acf.img4.url;

    document.querySelector("[data-overskrift5]").innerHTML = planke.acf.overskrift5;
    document.querySelector("[data-tekst5").innerHTML = planke.acf.tekst5;
    document.querySelector("[data-img5]").src = planke.acf.img5.url;
    document.querySelector("[data-img6]").src = planke.acf.img6.url;

    document.querySelector("[data-overskrift6]").innerHTML = planke.acf.overskrift6;
    document.querySelector("[data-tekst6").innerHTML = planke.acf.tekst6;

}
