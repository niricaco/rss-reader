function loadCountry() {
    fetch("https://restcountries.com/v3.1/name/hungary").then(r => r.json()).then(showCountry);
}

function showCountry(country) {
    console.log(country);
    const NAME = country[0].name.official;
    document.getElementById("name").textContent = NAME;
}

window.addEventListener("load", loadCountry);