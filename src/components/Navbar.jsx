import React from 'react';
import { Link } from '@reach/router';


const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3">
            <div className="container">
                <a href="#" className="navbar-brand">Shows and Movies DB!</a>

                <button
                    className="navbar-toggler"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/movieslist" className="nav-link">Movies</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/add" className="nav-link">Add New Movie</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        
    );
}

export default Navbar;