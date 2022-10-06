import React, {useEffect, useState} from 'react'
import axios from "./axios"

//baseUrl for the lack of functionlaity 
const baseUrl = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl }) {
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

    console.log(movies); 
    return(
        <div className="row">
            {/** prop ~ title */}
            <h2>{title}</h2>

            <div className="row-poster">
                {/** several row_posters */}

                {movies.map(movie => (
                    <img 
                    className="row_posters"
                    src={`${baseUrl}${movie.poster_path}`} alt={movie.name}/>
                ))}
            
            </div>

            {/**container=> posters */}
        </div>
    )
}

export default Row;