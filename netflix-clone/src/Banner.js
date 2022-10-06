import React, { useEffect, useState } from 'react'
import axios from "./axios"
import requests from './Requests';

function Banner() {
    const [movie, setMovie] = useState([]);

    //use useEffect to run code on a condition
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchTrending)
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    }, []);
    console.log(movie);

    {/** add backgroun image in header*/}
    return ( 
        //begin to add background image in 'banner' container
        //use <style></style>
        <header className="banner"> 
        style={{ 
            backgroundSize: "cover",
            backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
            backgroundPosition: "center center" ,//centres the image in background
        }}
            <div className="banner_content">
            {/** title */}
            <h1>
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            {/** div with 2buttons */}
            {/**description */}
            </div>
        </header>
    )
}

export default Banner