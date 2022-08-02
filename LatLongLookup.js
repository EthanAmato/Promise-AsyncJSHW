async function getCityData(cityName){
    let lookup = "https://geocode.xyz/"+cityName+"?json=1&auth=11637807769316e15955155x11333"
    let response = await fetch(lookup);
    let locationData = await response.json();
    console.log(`The latitude and longitude of ${cityName} is ${locationData.longt},${locationData.latt}`);
}

let city = "Tokyo"

getCityData(city);