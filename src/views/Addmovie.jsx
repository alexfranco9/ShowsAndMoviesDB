import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import Form from '../components/Form';

const Addmovie = props => {
    const [myForm, setMyForm] = useState({
        title: "",
        poster: "",
        rating: "",
        releaseDate: "",
        director: "",
        description: ""
    });

    const [errors, setErros] = useState({});

    const onChangeHandler = e => {
        setMyForm({...myForm, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/movies/create", myForm)
            .then(res => {
                if(res.data.err) {
                    console.log("There were errors");
                    setErros(res.data.err.errors);
                } else {
                    console.log("Succes movie created!")
                    // After movie is succesfully added navigate to movies list page.
                    navigate("/movieslist");
                }
            })
            .catch(err => console.log("Something went wrong posting", err))
    }

    return(
        <div>
            <h3>Let's add your favorite movie!</h3>
            <Form handleSubmit={handleSubmit} myForm={myForm} errors={errors} onChangeHandler={onChangeHandler}/>
        </div>
    );
}

export default Addmovie;