import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const Purchase = () => {
    const {user} = useAuth();
    const email = user.email;

    const [orders,setOrders] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/purchase/${email}`)
        .then(res => res.json())
        .then(data => setOrders(data));
    },[])


    return (
        <div className="container">
            <div className="my-5 p-3 text-primary bg-dark">
            <h5> User Name : {user.displayName} </h5>
             <h5> Logging email: {user.email} </h5>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                orders.map(order=> <div key={order._id} className="col">
                <div className="card">
                  <img src={order.imageUrl} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">{order.name}</h5>
                    <p className="card-text"> {order.description} </p>
                    {/* <button onClick={()=> handleDeleteBooking(order._id)} className="btn btn-danger py-2 px-4">Cancel Booking</button> */}
                  </div>
                </div>
              </div> )
            }
            </div>
        </div>
    );
};

export default Purchase;