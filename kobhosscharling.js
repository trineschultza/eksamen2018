document.addEventListener("DOMContentLoaded", hentJson);

async function hentJson() {

    let jsonObjekt = await fetch("http://meifriis.com/kea/scharlingwoodwp/wp-json/wp/v2/kobhosscharling/39");
    let kobhosscharling = await jsonObjekt.json();

    document.querySelector("[data-overskrift]").innerHTML = kobhosscharling.acf.overskrift;
    document.querySelector("[data-img]").src = kobhosscharling.acf.img.url;
    document.querySelector("[data-tekst]").innerHTML = kobhosscharling.acf.tekst;

    document.querySelector("[data-overskrift2]").innerHTML = kobhosscharling.acf.overskrift2;
    document.querySelector("[data-tekst2]").innerHTML = kobhosscharling.acf.tekst2;
    document.querySelector("[data-img3]").src = kobhosscharling.acf.img3.url;
    document.querySelector("[data-img4]").src = kobhosscharling.acf.img4.url;

    document.querySelector("[data-overskrift6]").innerHTML = kobhosscharling.acf.overskrift6;
    document.querySelector("[data-tekst6]").innerHTML = kobhosscharling.acf.tekst6;
    document.querySelector("[data-img6]").src = kobhosscharling.acf.img6.url;

    document.querySelector("[data-overskrift7]").innerHTML = kobhosscharling.acf.overskrift7;
    document.querySelector("[data-overskrift8]").innerHTML = kobhosscharling.acf.overskrift8;
    document.querySelector("[data-tekst8]").innerHTML = kobhosscharling.acf.tekst8;
    document.querySelector("[data-img10]").src = kobhosscharling.acf.img10.url;

    document.querySelector("[data-overskrift11]").innerHTML = kobhosscharling.acf.overskrift11;
    document.querySelector("[data-tekst11]").innerHTML = kobhosscharling.acf.tekst11;
    document.querySelector("[data-overskrift12]").innerHTML = kobhosscharling.acf.overskrift12;
    document.querySelector("[data-tekst12]").innerHTML = kobhosscharling.acf.tekst12;
    document.querySelector("[data-img12]").src = kobhosscharling.acf.img12.url;

    document.querySelector("[data-overskrift13]").innerHTML = kobhosscharling.acf.overskrift13;
    document.querySelector("[data-tekst13]").innerHTML = kobhosscharling.acf.tekst13;
    document.querySelector("[data-img13]").src = kobhosscharling.acf.img13.url;
}
