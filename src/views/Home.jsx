import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ShowAPICard from '../components/ShowAPICard';
import Pagination from '../components/Pagination';



const Home = () => {
    const [shows, setShows] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [showsPerPage] = useState(25);

    useEffect(() => {
        const fetchShows = async () => {
            setLoading(true);
            const res = await axios.get("https://api.tvmaze.com/shows");
            setShows(res.data);
            setLoading(false);
        };
        
        fetchShows();
    }, []);
    console.log(shows);

    const indexOfLastShow = currentPage * showsPerPage;
    const indexOfFirstShow = indexOfLastShow - showsPerPage;
    const currentShows = shows.slice(indexOfFirstShow, indexOfLastShow);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div>
            
            <div className="App">
            <ShowAPICard shows={currentShows} loading={loading}/>
            <Pagination showsPerPage={showsPerPage} totalShows={shows.length} paginate={paginate}/>
            </div>
        </div>
        
    )
};

export default Home;

