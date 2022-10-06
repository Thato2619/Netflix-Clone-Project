import React, {useEffect, useState} from 'react'
import axios from "./axios"
import "./Row.css"

//baseUrl for the lack of functionlaity 
const baseUrl = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, isLargeRow }) {
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
                    key={movie.id} /*assists with uniqueness to the movies by ID*/
                    className={`{row_posters} ${isLargeRow && "row_posterLarge"}`}
                    src={`${baseUrl}${isLargeRow ? movie.poster_path: movie.backdrop_path}`} 
                    alt={movie.name}
                    />
                ))}
            
            </div>

            {/**container=> posters */}
        </div>
    )
}

export default Row;