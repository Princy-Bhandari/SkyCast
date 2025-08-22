import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './SearchBox.css';

export default function SearchBox({updateInfo}){

    let[city, setCity]= useState("");
    let[error, setError]= useState(false);
    const API_URL= "https://api.openweathermap.org/data/2.5/weather";
    const API_kEY = "75b56bfdd5d0246800c274a4bb13d4b7";

    let getWeatherInfo = async()=>{
        try {
            let response = await fetch(
            `${API_URL}?q=${city}&appid=${API_kEY}&units=metric`
         );
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result = {
            city:city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLikes: jsonResponse.main.feelsLikes,
            weather: jsonResponse.weather[0].description,

        };
        console.log(result);
        return result;
        } catch (error) {
            throw error;
        }

    };

    let handleChange = (event) =>{
        setCity(event.target.value);

    };

    let handleSubmit = async (event) =>{
        try {
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        } catch (error) {
            setError(true);
            
        }
    };

    return(  
        <>
          <div className='SearchBox'>
            <form onSubmit={handleSubmit} style={{color: 'white'}}>
                <TextField id="outlined-basic" 
                 label="City Name" variant="outlined"  required value={city} onChange={handleChange} />
                <br></br><br></br>
                <Button variant="contained" type='submit'>Contained</Button>
                {error && <p style={{color: "red"}}>No such place exists!</p>}

            </form>
          </div>
        </>
    )
};