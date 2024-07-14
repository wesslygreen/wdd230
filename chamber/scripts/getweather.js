const weather = document.querySelector("#weather");
const weatherIcon = document.querySelector("#weather-icon");

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=41.91278209564208&lon=12.481905906133596&appid=d1b070fe2f96f702ee25c897fbb773f5&units=imperial';
async function apiFetch()
{
    try
    {
        const response = await fetch(url);
        if (response.ok)
        {
            const data = await response.json();
            displayResults(data);
        }
        else
        {
            throw Error(await response.text());
        }
    }
    catch (error)
    {
        console.log(error);
    }
}
 
function displayResults(data)
{
    let desc = data.weather[0].description;
    weather.innerHTML = `${data.main.temp}&deg;F - ${desc}`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute('src',iconsrc);
    weatherIcon.setAttribute('alt',desc);
}
 
apiFetch();