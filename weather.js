const api = {
    key: "194fdedc325e3c2e6c083f09b9572b15",
    base: "https://api.openweathermap.org/data/2.5/"
};

//Accessing html compoments using querySelector
let button = document.querySelector('.button');
let inputvalue = document.querySelector('.inputValue');
let nameVal = document.querySelector('.name');
let temp = document.querySelector('.temp');
let desc = document.querySelector('.desc');

//Adding event listener to the button
button.addEventListener('click', function () {
    // Get the city from the input field
    const city = inputvalue.value;

    if (city) {
        getWeather(city);
    } else {
        console.error("Please enter a city");
    }
});

// Function to fetch weather data
function getWeather(city) {
    fetch(`${api.base}weather?q=${city}&appid=${api.key}&units=metric`)
        .then(response => response.json())
        .then(data => {
            // Process the weather data
            console.log(data);
            displayData(data); // Call displayData with the fetched data
        })
        .catch(error => {
            console.error("Error:", error);
        });
}

// Function to display weather on HTML document
const displayData = (weather) => {
    temp.innerText = `${weather.main.temp}°C`;
    desc.innerText = `${weather.weather[0].main}`;
};