import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import InfoBox from "./InfoBox";

export default function SearchBox() {
    const [city, setCity] = useState("");
    const [weatherInfo, setWeatherInfo] = useState(null);
    const [cityName, setCityName] = useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "1031e82180981b48e6b9fba105594774";

    const getWeatherInfo = async () => {
        const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        const jsonResponse = await response.json();
        const result = {
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        };
        setWeatherInfo(result);
        setCityName(jsonResponse.name);  // Set the city name from the API response
    };

    const handleChange = (evt) => {
        setCity(evt.target.value);
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        getWeatherInfo();
        setCity("");
    };

    return (
        <div>
            <h3 style={{ color: "black" }}>Search for the weather</h3>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <br /> <br />
                <Button variant="contained" type="submit">Search</Button> <br />
            </form>
            {weatherInfo && <InfoBox result={weatherInfo} cityName={cityName} />}
        </div>
    );
}
