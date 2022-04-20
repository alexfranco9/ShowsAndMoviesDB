import React from 'react';
import { Link } from '@reach/router';

const Card = props => {
    return(
        <div className="card" style={{width: "15rem", display: "inline-flex", margin: ".5rem"}} >
            <img src={props.movie.poster} alt={props.movie.title}/>
            <div className="card-body">
                <h4 className="card-title">{props.movie.title}</h4>
                <h6>Rated: {props.movie.rating}</h6>
                <p className="card-text">{props.movie.director}</p>
                <Link to={`/movie/${props.movie._id}`} className="btn btn-primary">Full movie description</Link>
            </div>
        </div>
    );
}

export default Card;