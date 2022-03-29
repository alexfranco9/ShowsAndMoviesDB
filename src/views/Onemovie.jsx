import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';

const Onemovie = props => {
    const [oneMovie, setOnMovie] = useState(null);
    useEffect(() => {
        axios.get(`http://localhost:8000/api/movies/${props._id}`)
            .then(res => setOnMovie(res.data))
            .catch(err => console.log(err))
    }, []);

    const deleteMovie = _id => {
        axios.delete(`http://localhost:8000/api/movies/delete/${props._id}`)
        .then(navigate("/"))
        .catch(err => console.log("Something went wrong posting", err))
    }

    return(
        <div>
            <h1>This is the One Movie page!</h1>
            {
                oneMovie ? 
                
                <div className="card container" style={{width: "30rem"}}>
                    <br/>
                        <div>
                            <img className="card-img-top" src={oneMovie.poster} alt={oneMovie.title}/>
                            <div className="card-body">
                                <h2 className="card-title">{oneMovie.title}</h2>
                                <h5 className="card-text">Directed by: {oneMovie.director}</h5>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"></li>
                                <li className="list-group-item">Rated: {oneMovie.rating}</li>
                                <li className="list-group-item">Released Date: {oneMovie.releaseDate}</li>
                                <li className="list-group-item">Short Movie Description: {oneMovie.description}</li>
                            </ul>
                            <div className="card-body">
                                <a href="#" className="card-link">Card link</a>
                                <a href="#" className="card-link">Another link</a>
                                <Link to={`/movie/update/${props._id}`} className="btn btn-primary">Update Movie.</Link>
                                <button className="btn btn-danger" onClick={() => deleteMovie(props._id)}>Delete Movie.</button>
                            </div>
                        </div>
                </div>
                
                : " "
            }
        </div>
    );
}

export default Onemovie;