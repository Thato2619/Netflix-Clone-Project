import React, { useEffect, useState } from 'react'
import axios from "./axios"
import requests from './Requests';

function Banner() {
    const [movie, setMovie] = useState([]);

    //use useEffect to run code on a condition
    useEffect(() =>{
        async function fetchData() {
            const request = await axios.get(requests.fetchTrending);
            console.log(request.data.results);
        }
        fetchData();
    }, []);
    return (
        <header> {/** add backgroun image*/}
            {/** title */}
            {/** div with 2buttons */}
            {/**description */}
        </header>
    )
}

export default Banner