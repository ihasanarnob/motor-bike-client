import React from 'react';
import './AddProducts.css';
import { useForm } from "react-hook-form";

const AddProducts = () => {
    const { register, handleSubmit,reset } = useForm();

    const onSubmit = data => {
    fetch('https://fast-taiga-86694.herokuapp.com/addProducts',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => {
        if(result.insertedId) {
            alert('Seccessfully added a product')
            reset();
        }
    })
  }
    return (
        <div className="addProduct my-3">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="Name" />
                <input type="number" {...register("price")} placeholder="Price" />
                <textarea {...register("description")} placeholder="Description" />
                <input {...register("imageUrl")} placeholder="Image URL" />
                <input className="bg-secondary" type="submit" />
            </form>
            
        </div>
    );
};

export default AddProducts;