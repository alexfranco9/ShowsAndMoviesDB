import React from 'react'

const OneShow = props => {
    return (
        <div className="card" style={{width: "15rem", display: "inline-flex", margin: ".3rem"}} >
            <img src={props.image.medium} alt={props.movie.title} style={{width: "15rem", height: "22rem"}}/>
            <div className="card-body">
                <h3 className="card-title">{props.name}</h3>
                <h5>Rated: {props.rating.average}</h5>
                <p className="card-text">{props.summary}</p>
            </div>
        </div>
    )
}

export default OneShow;