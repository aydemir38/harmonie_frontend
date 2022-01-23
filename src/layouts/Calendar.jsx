
import React, { useEffect, useState } from 'react';
import axios from 'axios';




export default function Count() {
    const [countries, setCountries] = useState([]);
    useEffect(() => {

        axios.get("https://restcountries.com/v3.1/all").then((response) =>{

         setCountries(response.data)});

            
    }, []);

    return (
        <div>
            {countries.map(country => {
                return (
                    <div key={country.name.common}>
                        <h1>{country.name.official}</h1>
                    </div>
                );
            })}


        </div>
    )



}




/*
export default function calendar() {
    var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://working-days.p.rapidapi.com/',
  params: {
    country_code: 'US',
    command: 'analyse',
    start_date: '2013-01-01',
    end_date: '2013-12-31'
  },
  headers: {
    'x-rapidapi-host': 'working-days.p.rapidapi.com',
    'x-rapidapi-key': '2fd3c89b7emsh50d70ea166a6477p1b46fcjsn73388887521d'
  }
};

axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});
    return (
        <div>

        </div>
    )
}
*/




