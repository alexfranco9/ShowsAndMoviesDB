import React from 'react';

const ShowAPICard = ({ shows, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>
    }

    return(
    <div className="container">
        {shows.map(show => (                
            <div key={show.id} className="card" style={{width: "15rem", display: "inline-block", margin: ".5rem"}}>
                <img className="card-img-top" src={show.image.medium} alt={show.name}/>
                    <div className="card-body">
                        <h5 className="card-title">{show.name}</h5>
                        <p>Rating: {show.rating.average}</p>
                        {/* <p className="card-text">Premiered on: {show.premiered}</p> */}
                        <a href={`/shows/${show.id}/${show.name}`} className="btn btn-primary">See full show summary.</a>
                    </div>
            </div>
        ))}
    </div>
    );
}

export default ShowAPICard;
