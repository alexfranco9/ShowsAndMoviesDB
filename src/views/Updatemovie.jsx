import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import Form from '../components/Form';

const Update = props => {
    const [myForm, setMyForm] = useState({});
    const [errors, setErros] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:8000/api/movies/${props._id}`)
            .then(res => setMyForm(res.data))
            .catch(err => console.log(err))
    }, []);

    const onChangeHandler = e => {
        setMyForm({...myForm, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/movies/update/${props._id}`, myForm)
            .then(res => {
                if(res.data.err) {
                    console.log("There were errors");
                    setErros(res.data.err.errors);
                } else {
                    console.log("Success movie updated!")
                    // After movie is succesfully added navigate to home page.
                    navigate("/");
                }
            })
            .catch(err => console.log("Something went wrong updating", err))
    }

    return(
        <div>
            <h1>This is the update page!</h1>
            <Form handleSubmit={handleSubmit} myForm={myForm} errors={errors} onChangeHandler={onChangeHandler}/>
        </div>
    );
}

export default Update;