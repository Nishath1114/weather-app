async function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "d93e40cf5130b8fe94e8924eb9f8332e";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data); // 👈 DEBUG

        if (data.cod !== 200) {
            alert(data.message);
            return;
        }

        document.getElementById("city-name").innerText = data.name;
        document.getElementById("temp").innerText = `Temp: ${data.main.temp}°C`;
        document.getElementById("condition").innerText = data.weather[0].description;
        document.getElementById("humidity").innerText = `Humidity: ${data.main.humidity}%`;
        document.getElementById("wind").innerText = `Wind: ${data.wind.speed} km/h`;

    } catch (error) {
        console.log(error);
        alert("Error fetching data!");
    }
}