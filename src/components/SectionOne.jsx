import React from 'react';


const SectionOne = () => {
    return (
        <section className="bg-dark text-light p-5 text-center text-sm-start">
            <div className="container">
                <div className="d-sm-flex align-items-start justify-content-between">
                    <div>
                        <h1>Home for all <span className="text-warning">Shows and Movies!</span> </h1>
                        <p>Welcome! Browse our free library of shows and movies. Thank you!</p>
                        <button className="btn btn-primary btn-lg">Join our news letter!</button>
                    </div>
                    <img 
                    className="img-fluid d-none d-sm-block" 
                    style={{width: "350px"}}
                    src="/img/pexels-chi-2.jpg" 
                    alt=""/>
                    <img 
                        className="img-fluid d-none d-sm-block" 
                        style={{width: "350px"}}
                        src="/img/pexel-chi-theater.jpg" 
                        alt="image of Chicago Theater"/>
                </div>
            </div>
        </section>
    )
}

export default SectionOne;
