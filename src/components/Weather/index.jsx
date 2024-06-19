import React, { useState } from 'react';
import styles from '../Weather/weather.module.css'
import Container from 'react-bootstrap/Container';


const api = {
  link: "https://api.weatherapi.com/v1/current.json",
  key: "1a330ff7b099465db4d202400240305"
};

function Weather() {
  const [inputValue, setInputValue] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const enter = async (e) => {
    if (e.key === "Enter") {
      try {
        const res = await fetch(`${api.link}?key=${api.key}&q=${inputValue}`);
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await res.json();
        console.log(result);
        setWeatherData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  };

  const displayAdvice = () => {
    const weatherCondition = weatherData?.current.condition.text.trim();
    const adviceContainer = document.getElementById("quote");

    if (weatherCondition) {
      if (weatherCondition.toLowerCase().includes("sunny")) {
        adviceContainer.innerHTML = "Don't forget to put on SPF!";
      } else if (weatherCondition.toLowerCase().includes("clear")) {
        adviceContainer.innerHTML = "Don't forget to put on SPF anyway!";
      } else if (weatherCondition.toLowerCase().includes("rain")) {
        adviceContainer.innerHTML = "Remember to bring an umbrella!";
      } else if (weatherCondition.toLowerCase().includes("cloud")) {
        adviceContainer.innerHTML = "It might rain later, so be prepared!";
      } else if (weatherCondition.toLowerCase().includes("wind")) {
        adviceContainer.innerHTML = "Hold onto your hats, it's windy out there!";
      } else if (weatherCondition.toLowerCase().includes("snow")) {
        adviceContainer.innerHTML = "Bundle up, it's snowing!";
      } else if (weatherCondition.toLowerCase().includes("overcast")) {
        adviceContainer.innerHTML = "Expect overcast skies.";
      } else if (weatherCondition.toLowerCase().includes("patchy sleet possible")) {
        adviceContainer.innerHTML = "Watch out for possible sleet.";
      } else if (weatherCondition.toLowerCase().includes("patchy freezing drizzle possible")) {
        adviceContainer.innerHTML = "Be cautious of freezing drizzle.";
      } else if (weatherCondition.toLowerCase().includes("blizzard")) {
        adviceContainer.innerHTML = "Stay indoors, it's a blizzard!";
      } else if (weatherCondition.toLowerCase().includes("fog")) {
        adviceContainer.innerHTML = "Drive carefully in the fog.";
      } else if (weatherCondition.toLowerCase().includes("drizzle")) {
        adviceContainer.innerHTML = "Take an umbrella for the drizzle.";
      } else if (weatherCondition.toLowerCase().includes("sleet")) {
        adviceContainer.innerHTML = "Beware of sleet.";
      } else if (weatherCondition.toLowerCase().includes("ice pellets")) {
        adviceContainer.innerHTML = "Be cautious of ice pellets.";
      } else if (weatherCondition.toLowerCase().includes("thunder")) {
        adviceContainer.innerHTML = "Stay indoors during thunderstorms.";
      } else {
        adviceContainer.innerHTML = "No specific advice for this condition";
      }
    } else {
      adviceContainer.innerHTML = "No specific advice. Enter the city!";
    }
  };


  const getOurDate = () => {
    const myDate = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const day = days[myDate.getDay()];
    const todayDate = myDate.getDate();
    const month = months[myDate.getMonth()];
    const year = myDate.getFullYear();
    return `${day} ${todayDate} ${month} ${year}`;
  };

  return (
    <Container  className={styles.container}>
      <div className={styles.container} >
        <div className={styles.header} >
          <h1>Weather for today:</h1>
          <input
            className={styles.input}
            spellCheck="false"
            type="text"
            placeholder="Please enter city..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={enter}
          />
        </div>

        {weatherData && (
          <div className={styles.header}>
            <div id="whenWhere">
              <p id="city">{weatherData.location.name}</p>
              <p id="date">{getOurDate()}</p>
            </div>
            <div className={styles.now}>
              <div className={styles.temp}>
                <p id="temperatureInС">{Math.round(weatherData.current.temp_c)}<span>°C</span></p>
                <p id="temperatureInF">{Math.round(weatherData.current.temp_f)}<span>°F</span></p>
              </div>
              <div className={styles.feel}>
                <p id="feelslikeinc">Feels like {Math.round(weatherData.current.feelslike_c)}<span>°C</span></p>
                <p id="feelslikeinf">Feels like {Math.round(weatherData.current.feelslike_f)}<span>°F</span></p>
              </div>
            </div>

            <div className={styles.info}>
              <p id="humidity">Humidity: {weatherData.current.humidity}%</p>
              <p id="cloud">{weatherData.current.condition.text}</p>
              <img src={weatherData.current.condition.icon} alt="Weather Icon" />
              <p id="wind_mph">Wind in mph: {Math.round(weatherData.current.wind_mph)}<span>mph</span></p>
              <p id="wind_kph">Wind in kph: {Math.round(weatherData.current.wind_kph)}<span>kph</span></p>
              <p id="pressure_mb">Pressure (mb): {weatherData.current.pressure_mb} mb</p>
              <p id="pressure_in">Pressure (in): {weatherData.current.pressure_in} inHg</p>
              <p id="uv">UV: {weatherData.current.uv}</p>
            </div>

            <div className={styles.quotes}>
              <button onClick={displayAdvice} className="travel_btn">
                Click to get an advice:
              </button>
              <p id="quote"></p>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}

export default Weather;
