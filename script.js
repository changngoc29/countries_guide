const searchInput = document.querySelector('.search__input');
const searchBtn = document.querySelector('.search__btn');

const result = document.querySelector('.result');

searchBtn.onclick = function() {
    const name = searchInput.value;
    const finalURL = `https://restcountries.com/v2/name/${name}?fullText=true`;

    fetch(finalURL)
        .then((response) => response.json())
        .then((data) => {
            console.log(data[0]);
            console.log(data[0].flags.svg)
            console.log(data[0].nativeName);
            console.log(data[0].capital);
            console.log(data[0].region);
            console.log(data[0].population);
            console.log(Object.values(data[0].currencies)[0]['name']);
            console.log(Object.values(data[0].currencies)[0]['code']);
            console.log(data[0].languages)
            console.log( data[0].languages.map((e) => {
                return e.name;
            }).toString().split(',').join(', '));
            

            result.innerHTML = `
                <img class="country__img" src="${data[0].flags.svg}">
                <h2 class = "country__name">${data[0].name}</h2>
                <div class="country__info">
                    <h4>
                    Capital: <span>${data[0].capital}</span>
                    </h4>
                    <h4>
                    Continent: <span>${data[0].region}</span>
                    </h4>
                    <h4>
                    Population: <span>${data[0].population}</span>
                    </h4>
                    <h4>
                    Currency: <span>${Object.values(data[0].currencies)[0]['name']} - ${Object.values(data[0].currencies)[0]['code']}</span>
                    </h4>
                    <h4>
                    Common Languages: <span>${data[0].languages.map((e) => {
                        return e.name;
                    }).toString().split(',').join(', ')}</span>
                    </h4>
                </div>
            `

        })
        .catch((error) => {
            result.innerHTML = `
            <p class="error">Have some problems with the country name. 
            Please input it again or you can check list of names
            <a href="https://en.wikipedia.org/wiki/ISO_3166-1#Current_codes" target="_blank">here</a>
            </p>
            `
        })
}