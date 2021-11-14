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
    },[email]);

    const handleDeleteOrder = (id) => {
      const deleteConfirmation = window.confirm('Are you sure you want to cancel your order?')
      if(deleteConfirmation){
        const url = `http://localhost:5000/purchase/${id}`
        fetch(url,{
          method : 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
          if(data.deletedCount > 0) {
            alert('Order Cancelled!')
            const remaining = orders.filter(order => order._id !== id)
            setOrders(remaining);
          }
        })
      }
    }


    return (
        <div className="container">

            <div className="container row row-cols-1 row-cols-md-3 g-4">
            {
                orders.map(order=> <div key={order._id} className="col">
                <div className="card">
                  <img src={order.imageUrl} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">{order.name}</h5>
                    <p className="card-text"> {order.description} </p>
                    <button onClick={()=> handleDeleteOrder(order._id)} className="btn btn-danger py-2 px-4">Cancel Order</button>
                  </div>
                </div>
              </div> )
            }
            </div>
        </div>
    );
};

export default Purchase;