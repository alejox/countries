import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Countries = () => {

    const [country, setCountry] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [info, setInfo] = useState("");
    const getInfo = ()=>{

        switch (info) {
            case "demography":
                return(
                <div>
                    <h2>Demography</h2>
                    <p><b>population: </b> {country.population}</p>
                    <p><b>area: </b>{country.area}</p>
                </div>
                )
            case "location":
                return(
                <div>
                    <h2>Location</h2>
                    <p><b>continent: </b>{country.continents?.[0]}</p>
                    <p><b>region: </b>{country.region}</p>
                    <p><b>sub region: </b>{country.subregion}</p>
                </div>
                )
            case "capital":
                return(
                <div>
                    <h2>Capital</h2>
                    <p><b>Capital: </b>{country.capital?.[0]}</p>
                </div>
                )
            default:
                return(
                <>
                <div>
                    <h2>Demography</h2>
                    <p><b>population: </b> {country.population}</p>
                    <p><b>area: </b>{country.area}</p>  
                </div>

                <div>
                    <h2>Location</h2>
                    <p><b>continent: </b>{country.continents?.[0]}</p>
                    <p><b>region: </b>{country.region}</p>
                    <p><b>sub region: </b>{country.subregion}</p>
                </div>

                <div>
                    <h2>Capital</h2>
                    <p><b>Capital: </b>{country.capital?.[0]}</p>
                </div>
                </>

                )
        }
    }

    useEffect (() =>{
        axios.get('https://restcountries.com/v3.1/alpha/pe')
            .then((res) => {
                setCountry(res.data[0]);
                setIsLoading(false);
            });
            }, []);

    
    console.log(country);

    return (
        <div>
            {
                isLoading ? (
                    <h2>Is loading ...</h2>
                ) : (
                    <>
            <h1>{country.name?.official}</h1>
            <img src={country.flags?.png} alt="" />
            <div>
            <button onClick={() => setInfo("demography")}>Demography</button>
            <button onClick={() => setInfo("location")}>Location</button>
            <button onClick={() => setInfo("capital")}>Capital</button>
            <button onClick={() => setInfo("all")}>All</button>
            </div>
            {getInfo()}
            </>
                )
            }
        </div>
    );
};

export default Countries;