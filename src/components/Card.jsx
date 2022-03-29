import React from 'react';
import { Link } from '@reach/router';

const Card = props => {
    return(
        <div className="card" style={{width: "15rem", display: "inline-flex", margin: ".3rem"}} >
            <img src={props.movie.poster} alt={props.movie.title} style={{width: "15rem", height: "22rem"}}/>
            <div className="card-body">
                <h3 className="card-title">{props.movie.title}</h3>
                <h5>Rated: {props.movie.rating}</h5>
                <p className="card-text">{props.movie.director}</p>
                <p className="card-text">{props.movie.releaseDate}</p>
                <Link to={`/movie/${props.movie._id}`} className="btn btn-primary">See full movie description.</Link>
            </div>
        </div>
    );
}

export default Card;