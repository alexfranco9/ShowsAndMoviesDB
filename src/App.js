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

function App() {
    

  return (
    <>
      <Navbar/>
      <div>
        <Router>
          <Home path="/" />
          <Addmovie path="/add" />
          <Onemovie path="/movie/:_id" />
          <MoviesList path="/movielist"/>
          <Update path="/movie/update/:_id" />
          <Onemovie path="/shows/:_id"/>
        </Router>
      </div>
    </>
  );
}

export default App;
