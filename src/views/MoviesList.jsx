import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import axios from 'axios';

const MoviesList = props => {
    const [allMovies, setAllMovies] = useState(null);
    const [reloadAPI, setReloadApi] = useState(true);

    useEffect(() => {
        axios.get("http://localhost:8000/api/movies")
            .then(res => setAllMovies(res.data))
            .catch(err => console.log(err))
    }, [reloadAPI])

    const update = () => {
        setReloadApi(!reloadAPI);
    }


    return(
            <div className="container mt-5">
                {
                    allMovies ? 
                    allMovies.map((movie, i) => {
                        return <Card movie={movie} update={update}/> 
                    })
                    : ""
                }
            </div>
    );
}

export default MoviesList;