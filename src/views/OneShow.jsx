import axios from 'axios';
import React, { useEffect, useState } from 'react';

const OneShow = props => {
    const [oneShow, setOneShow] = useState(null);

    useEffect(() => {
        axios.get(`https://api.tvmaze.com/shows/${props._id}/${props.name}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }, []);


    return(
        <>


        </>
    );
}

export default OneShow;

        // <div>
        //     {
        //         OneShow ? 
                
        //         <div className="card container" style={{width: "35rem"}}>
        //             <br/>
        //                 <div>
        //                     {/* <img className="card-img-top" src={} alt={}/> */}
        //                     <div className="card-body">
        //                         <h2 className="card-title">{}</h2>
        //                         <h5 className="card-text">Directed by: {}</h5>
        //                     </div>
        //                     <ul className="list-group list-group-flush">
        //                         <li className="list-group-item"></li>
        //                         <li className="list-group-item">Rated: {}</li>
        //                         <li className="list-group-item">Released Date: {}</li>
        //                         <li className="list-group-item">Short Movie Description: {}</li>
        //                     </ul>
        //                     <div className="card-body">
        //                         <a href="#" className="card-link">Card link</a>
        //                         <a href="#" className="card-link">Another link</a>
        //                     </div>
        //                 </div>
        //         </div>
                
        //         : " "
        //     }
        // </div>