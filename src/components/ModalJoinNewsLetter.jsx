import React from 'react'

const ModalJoinNewsLetter = ({closeModal}) => {
    return (
        <div>       
            <div>
                        <p className="lead">Please fill out this form and than check your email!</p>
                    </div>
                        <button onClick={() => closeModal(false)}> X </button>
                            <div className="react-modal-fade" tabIndex="-1">
                            <div class="react-modal-dialog">
                                <div class="react-modal-content">
                                <div class="react-modal-header">
                                    <h5 class="react-modal-title">Your information below.</h5>
                                <form>
                                <div className="mb-3">
                                    <label htmlfor="first-name" className="col-form-label">
                                    First Name:
                                    </label>
                                    <input type="text" className="form-control" id="first-name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlfor="last-name" className="col-form-label">Last Name:</label>
                                    <input type="text" className="form-control" id="last-name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlfor="email" className="col-form-label">Email:</label>
                                    <input type="email" className="form-control" id="email" />
                                </div>
                                <div className="mb-3">
                                    <label htmlfor="phone" className="col-form-label">Phone:</label>
                                    <input type="tel" className="form-control" id="phone" />
                                </div>
                                </form>
                                </div>
                                </div>
                                </div>
                            </div>
                    <button>Submit</button>
        </div>
    )
}

export default ModalJoinNewsLetter;
