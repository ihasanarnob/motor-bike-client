import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Featured = () => {
    const [bikeInfo,setBikeInfo] = useState([]);

    useEffect(() => {
        fetch('https://fast-taiga-86694.herokuapp.com/featured')
        .then(res => res.json())
        .then(data => setBikeInfo(data))
    },[]);


    return (
        <div className="container my-3">
            <h3>Featured bikes</h3>
            <div className="row row-cols-1 row-cols-md-3 g-4 ">

                {
                    bikeInfo.map((info,index) =>  <div key={info._id} className="col">
                    <div className="card">
                    <img src={info.imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{info.name}</h5>
                        <p className="card-text">{info.description}</p>
                        <h6 className="card-text"> BDT. {info.price}</h6>
                    </div>
                    <div className="card-footer">
                        <Link to = {`/placeOrder/${info._id}`} >
                        <button className="btn btn-primary">Proceed Purchase</button>
                        </Link>
                    </div>
                    </div>
                </div>  )
                }
            </div>
            

        </div>
    );
};

export default Featured;