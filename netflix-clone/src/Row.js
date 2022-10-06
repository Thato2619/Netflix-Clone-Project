import React, {useEffect, useState} from 'react'
import axios from "./axios"

function Row({ title }) {
    const[movies, setMovies] = useState([]);

    //A snippet of code which runs based on a specific condition/variable
    useEffect(() => {
        //if [], run code once when row loads(don't run it again)
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            console.log(request.data.results);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);
    return(
        <div>
            {/** prop ~ title */}
            <h2>{title}</h2>

            {/**container=> posters */}
        </div>
    )
}

export default Row;