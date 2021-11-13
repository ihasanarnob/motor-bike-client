import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PlaceOrder = () => {
    const {user} = useAuth();
    const {id} = useParams();

    const [order,setOrder] = useState({});

    useEffect(() => {
        fetch( `http://localhost:5000/placeOrder/${id}` )
        .then(res => res.json())
        .then(data => setOrder(data))
    },[])

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div>
            <div className="mb-5 p-3 text-primary bg-light">
            <h5> User Name : {user.displayName} </h5>
             <h5> Logging email: {user.email} </h5>
            </div>

            <div className=" container row row-cols-1 row-cols-md-2 g-4">

                <Card>
                    <Card.Img className="w-50" variant="top" src={order.imageUrl} />
                    <Card.Body>
                    <Card.Title>{order.name}</Card.Title>
                    <Card.Text>
                        {order.description}
                    </Card.Text>
                    </Card.Body>
                </Card>
                <div>
                    <h4>Personal Information</h4>
                    <div className="addProduct my-3">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("address")} placeholder="Enter Address" />
                <input {...register("city")} placeholder="Enter City Name" />
                <input type="number" {...register("phone")} placeholder="Contact Number" />
                <input className="bg-primary" type="submit" />
            </form>
            
        </div>
                </div>


            </div>
        </div>
    );
};

export default PlaceOrder;