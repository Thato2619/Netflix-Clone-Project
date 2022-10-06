import React, {useEffect, useState} from 'react'

function Row({ title }) {
    const[movies, setMovies] = useState([]);

    //A snippet of code which runs based on a specific condition/variable
    useEffect(() => {
        //
    }, [])
    return(
        <div>
            {/** prop ~ title */}
            <h2>{title}</h2>

            {/**container=> posters */}
        </div>
    )
}

export default Row;