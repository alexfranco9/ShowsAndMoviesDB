import React from 'react';

const MovieAPICard = ({ shows, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>
    }

    return(
    <div>
        {shows.map(show => (                
            <div key={show.id} className="card text-center" style={{width: "18rem", display: "inline-block", margin: ".5rem"}}>
                <img className="card-img-top" src={show.image.medium} alt={show.name}/>
                    <div className="card-body">
                        <h3 className="card-title">{show.name}</h3>
                        <h6>Show Rating: {show.rating.average}</h6>
                        <p className="card-text">Premiered on: {show.premiered}</p>
                        <a href="#" className="btn btn-primary">See full show summary.</a>
                    </div>
            </div>
        ))}
    </div>
    );
}

export default MovieAPICard;