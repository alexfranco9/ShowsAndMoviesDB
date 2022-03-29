import React from 'react'

export const Pagination = ({ showsPerPage, totalShows, paginate}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalShows / showsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="container mt-2 mb-5">
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={() => paginate(number)} className="page-link">{number}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Pagination;
