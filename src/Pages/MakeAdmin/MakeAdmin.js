import React, { useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';

const MakeAdmin = () => {
    const [email,setEmail] = useState('');
    const [success,setSuccess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = (e)=> {
        const user = {email};
        fetch('https://fast-taiga-86694.herokuapp.com/users',{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                console.log(data);
                setSuccess(true);
            }
        })

        e.preventDefault();
    }
    return (
        <div>
            <h2>Admin</h2>
            <form onSubmit={handleAdminSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control  className="w-75" onBlur={handleOnBlur} type="email" placeholder="Enter email" />
            </Form.Group>
            <Button type="submit" variant="dark">Make Admin</Button>
            </form>
            { success && <Alert variant="success">
                Made Admin successfully!
            </Alert>}
        </div>
    );
};

export default MakeAdmin;