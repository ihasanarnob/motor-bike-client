import React, { useState } from 'react';
import { Form, Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {

    const [loginData,setLoginData] = useState({});

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);

        console.log(field,value);
    }

    const handleLogin = (e) => {

        e.preventDefault();
    }

    return (
        <div>
            <h3 className="d-flex justify-content-center mt-5">Please Login</h3>
            <Form onSubmit={handleLogin} className=" w-50 container container-fluid my-4">
                <Form.Group  className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleOnBlur} name="Email" type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group  className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handleOnBlur} name="Password" type="password" placeholder="Password" />
                </Form.Group>
            
                <Button className="w-25 p-2"variant="primary" type="submit">
                    Login
                </Button>
                {/* Go to Sign Up Page*/}
                <Nav.Link as={Link} to="/signup" className="fw-bold m-3">New User? Sign Up First</Nav.Link> 
            </Form>
        </div>
    );
};

export default Login;