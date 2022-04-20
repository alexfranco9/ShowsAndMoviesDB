import React from 'react'

export const Footer = () => {
    return (
        <div className="p-5 bg-dark text-white text-center position-relative">
            <div className="container">
                <p className="lead">Copyright &copy; 2022 Shows and Movies DB! By Alex Franco.</p>

                {/* Icon is not appearing on the page, however you can hover over the screen find it and click it. */}
                
                <a href="#" className="position-absolute bottom-0 end-0 p-5">
                <button className="btn-warning">Back to top!</button>
                {/* <i className="bi bi-arrow-up-square"></i> */}
                </a>
            </div>
        </div>
    )
}

export default Footer;
