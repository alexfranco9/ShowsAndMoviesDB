import React, { useState }from 'react';
import ModalJoinNewsLetter from './ModalJoinNewsLetter';



const SectionOne = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <section className="bg-dark text-light p-5 text-center text-sm-start">
            <div className="container">
                <div className="d-sm-flex align-items-start justify-content-between">
                    <div>
                        <h1>Home for all <span className="text-warning">Shows and Movies!</span> </h1>
                        <p>Welcome! Browse our free library of shows and movies. Thank you! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, ad quidem! Magni, quasi possimus! Ab dolore illum libero labore obcaecati deleniti voluptas animi aliquid ipsum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, soluta eligendi dolore cum deserunt odit minima blanditiis ipsam facere reiciendis sint quisquam repellendus aspernatur rem quaerat sapiente corrupti, architecto explicabo. lo</p>

                        {/* Modal to join news letter here. */}
                        <button 
                        className="btn btn-primary btn-lg mb-2" onClick={() => {
                        setOpenModal(true); }}
                        >Join our news letter!</button>
                        {openModal && <ModalJoinNewsLetter closeModal={setOpenModal}/>}
                        
                    </div>
                    <img 
                        className="img-fluid d-none d-md-block m-1" 
                        style={{width: "350px"}}
                        src="/img/pexels-chi-2.jpg" 
                        alt=""/>
                    <img 
                        className="img-fluid d-none d-md-block m-1" 
                        style={{width: "350px"}}
                        src="/img/pexel-chi-theater.jpg" 
                        alt="image of Chicago Theater"/>
                </div>
            </div>
        </section>
    )
}

export default SectionOne;
