import React from 'react';


const Form = props => {
    const {handleSubmit, onChangeHandler, myForm, errors} = props;

    return(
        <form onSubmit={handleSubmit} className="container text-left">
            <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input type="text" name="title" className="form-control" onChange={onChangeHandler} value={myForm.title}/>
                {
                    errors.title ? <span className="text-danger">{errors.title.message}</span> : ""
                }
            </div>

            <div className="form-group">
                <label htmlFor="poster">Poster:</label>
                <input type="text" name="poster" className="form-control" onChange={onChangeHandler} value={myForm.poster}/>
                {
                    errors.poster ? <span className="text-danger">{errors.poster.message}</span> : ""
                }
            </div>

            <div className="form-group">
                <label htmlFor="rating">Rating:</label>
                <select name="rating" className="form-control" onChange={onChangeHandler} value={myForm.rating}>
                    <option value="G">G</option>
                    <option value="PG">PG</option>
                    <option value="PG-13">PG-13</option>
                    <option value="R">R</option>
                    <option value="NC-17">NC-17</option>
                </select>
                {
                    errors.rating ? <span className="text-danger">{errors.rating.message}</span> : ""
                }
            </div>

            <div className="form-group">
                <label htmlFor="releaseDate">Release Date:</label>
                <input type="date" name="releaseDate" className="form-control" onChange={onChangeHandler} value={myForm.releaseDate}/>
                {
                    errors.releaseDate ? <span className="text-danger">{errors.releaseDate.message}</span> : ""
                }
            </div>

            <div className="form-group">
                <label htmlFor="director">Director:</label>
                <input type="text" name="director" className="form-control" onChange={onChangeHandler} value={myForm.director}/>
                {
                    errors.director ? <span className="text-danger">{errors.director.message}</span> : ""
                }
            </div>

            <div className="form-group">
                <label htmlFor="description">Film Description:</label>
                <textarea name="description" cols="20" rows="5" className="form-control" onChange={onChangeHandler} value={myForm.description}></textarea>
                {
                    errors.description ? <span className="text-danger">{errors.description.message}</span> : ""
                }
            </div>
            <br/>

            <input type="submit" value="Submit" className="btn btn-primary"/>
            
            <div></div>
            <br/>
        </form>
    );
}

export default Form;