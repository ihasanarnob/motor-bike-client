
import React, { useState } from 'react';
import { Form, Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Signup = () => {

    const [loginData,setLoginData] = useState({});

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);

        console.log(newLoginData);
    }

    const handleSignup = (e) => {
        if(loginData.Password !== loginData.Confirm_Password){
            alert('Please enter your right password');
            return;
        }
        e.preventDefault();
    }

    return (
        <div>
            <h3 className="d-flex justify-content-center mt-5">Please Sign Up Here</h3>
            <Form onSubmit={handleSignup} className=" w-50 container container-fluid my-4">
                <Form.Group  className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleOnBlur} name="Email" type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group  className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handleOnBlur} name="Password" type="password" placeholder="Enter Password" />
                </Form.Group>
                <Form.Group  className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control onBlur={handleOnBlur} name="Confirm_Password" type="password" placeholder="Confirm Password" />
                </Form.Group>
            
                <Button className="w-25 p-2"variant="primary" type="submit">
                    Sign Up
                </Button>
                {/* Go to Sign Up Page*/}
                <Nav.Link as={Link} to="/login" className="fw-bold m-3">Already Signed Up? Please Log In</Nav.Link> 
            </Form>
        </div>
    );
};

export default Signup;