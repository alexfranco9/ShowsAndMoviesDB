import React from 'react';
import { Link } from '@reach/router';

const Navbar = props => {
    return(
        <div>
            <div className="navbar navbar-expand-sm navbar-light bg-light">
                <div className="navbar-nav">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/movieslist" className="nav-link">Movies</Link>
                    <Link to="/add" className="nav-link">Add New Movie</Link>
                </div>
            </div>
            <div>
                <br/>
                <br/>
            </div>
        </div>
    );
}

export default Navbar;