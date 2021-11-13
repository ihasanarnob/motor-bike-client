import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Featured = () => {
    const [bikeInfo,setBikeInfo] = useState([]);
    const {user} = useAuth();

    useEffect(() => {
        fetch('http://localhost:5000/featured')
        .then(res => res.json())
        .then(data => setBikeInfo(data))
    },[]);

    const handlePurchase = (index) => {
        const data = bikeInfo[index];
        data.email = user.email;
        console.log(data);

        // my orders////
        fetch("http://localhost:5000/purchase", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result.insertedId);
            if (result.insertedId) {
                alert('Booking Proceeded')
            }
          });
      };


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
                        {/* <button className="btn btn-primary">Proceed Purchase</button> */}
                        <button onClick={()=>handlePurchase(index)} className="btn btn-primary">Proceed Purchase</button>
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