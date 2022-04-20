import './App.css';
import React from 'react';
import { Router } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Addmovie from './views/Addmovie';
import Onemovie from './views/Onemovie';
import Update from './views/Updatemovie';
import MoviesList from './views/MoviesList';
import Footer from './components/Footer';
import SectionOne from './components/SectionOne';
import OneShow from './views/OneShow';

function App() {
    

  return (
    <>
      <Navbar/>
      <SectionOne/>
      <div>

        <Router className="App">
          <Home path="/" />
          <Addmovie path="/add"/>
          <Onemovie path="/movie/:_id" />
          <MoviesList path="/movieslist"/>
          <Update path="/movie/update/:_id" />
          <Onemovie path="/shows/:_id"/>
          {/* <OneShow path="https://api.tvmaze.com/shows/:_id"/> */}
        </Router>
        
      </div>
      <Footer/>
    </>
  );
}

export default App;
