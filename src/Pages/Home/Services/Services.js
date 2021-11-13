import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Services = () => {

    const [services,setServices] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="container mt-5 mb-2">
            <h3 className="d-flex justify-content-center">Featured Bikes 2021</h3>
            <div className="row row-cols-1 row-cols-md-3 g-4 ">

                {
                    services.map((service,index) =>  <div key={service._id} className="col">
                    <div className="card">
                    <img src={service.imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{service.name}</h5>
                        <p className="card-text">{service.description}</p>
                        <h6 className="card-text"> BDT. {service.price}</h6>
                        <Link to = {`/placeOrder/${service._id}`} >
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

export default Services;