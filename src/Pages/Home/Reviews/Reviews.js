import React from 'react';
import { useForm } from "react-hook-form";


const Reviews = () => {
    const { register, handleSubmit,reset } = useForm();

    const onSubmit = data => {
        fetch('https://fast-taiga-86694.herokuapp.com/addReviews',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            if(result.insertedId) {
                alert('Review Posted')
                reset();
            }
        })
    }
    return (
        <div className="addProduct my-3">
            <h3>We Are Waiting To Know Your Opinion</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name")} placeholder="Reviewers Name" />
                <textarea {...register("description")} placeholder="Write Your Reviews" />
                <input className="bg-danger" type="submit" />
            </form>
        </div>
    );
};

export default Reviews;