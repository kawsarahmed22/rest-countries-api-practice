const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries => {
    const countriesHtml = countries.map(country => getCountryHtml(country))
    
    const container = document.getElementById('countries');
    container.innerHTML = countriesHtml.join(' ')
}

const getCountryHtml = country => {
    console.log(country);
    const{name, flags, area, capital} = country

    return `
    <div class="country">
        <h2>${name.common}</h2>
        <h3>${capital}</h3>
        <p>${area}</p>
        <img src=${flags.png}>

    </div>


    `
}

loadCountries()