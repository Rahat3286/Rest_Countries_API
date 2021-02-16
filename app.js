fetch(`https://restcountries.eu/rest/v2/all`)
    .then(res => res.json())
    // .then(data => console.log(data));
    .then(data => displayCountries(data));

const displayCountries = countries => {
    // console.log(countries);
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
            const countryInfo = `
            <div class="container mt-5">
                <div class="card" style="width: 15rem;">
                    <img class="card-img-top" src="${country.flag}" alt="Card image cap">
                    <div class="card-body">
                        <h3 class="card-text">${country.name}</h3>
                    </div>
                </div>
            </div>    
            `;
            countryDiv.innerHTML = countryInfo;
            countriesDiv.appendChild(countryDiv);
    });
}


// for (let i = 0; i < countries.length; i++) {
//     const country = countries[i];
//     const countryDiv = document.createElement('div');
//     const countryInfo = `
//     <div class="container mt-5">
//         <div class="card" style="width: 15rem;">
//             <img class="card-img-top" src="${country.flag}" alt="Card image cap">
//             <div class="card-body">
//                 <h3 class="card-text">${country.name}</h3>
//             </div>
//         </div>
//     </div>    
//     `
//     countryDiv.innerHTML = countryInfo;
//     countriesDiv.appendChild(countryDiv);