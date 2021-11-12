
import React, { useState } from 'react';
import { Form, Button, Nav, Spinner, Alert } from 'react-bootstrap';
import { Link,useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Signup = () => {

    const [loginData,setLoginData] = useState({});
    const history = useHistory();
    const {user,registerUser,isLoading,authError} = useAuth();

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);

        console.log(newLoginData);
    }

    const handleSignup = (e) => {
        if(loginData.password !== loginData.password1) {
            alert('Please enter your right password');
            return;
        }
        registerUser(loginData.email,loginData.password,loginData.name,history);
        e.preventDefault();
    }

    return (
        <div>
            <h3 className="d-flex justify-content-center mt-5">Please Sign Up Here</h3>
            {!isLoading && <Form onSubmit={handleSignup} className=" w-50 container container-fluid my-4">

                <Form.Group  className="mb-3" controlId="formBasicEmail">
                    <Form.Label>User Name </Form.Label>
                    <Form.Control onBlur={handleOnBlur} name="name" type="text" placeholder="Enter name" />
                </Form.Group>

                <Form.Group  className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleOnBlur} name="email" type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group  className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handleOnBlur} name="password" type="password" placeholder="Enter Password" />
                </Form.Group>
                <Form.Group  className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control onBlur={handleOnBlur} name="password1" type="password" placeholder="Confirm Password" />
                </Form.Group>
            
                <Button className="w-25 p-2"variant="primary" type="submit">
                    Sign Up
                </Button>
                {/* Go to Sign Up Page*/}
                <Nav.Link as={Link} to="/login" className="fw-bold m-3">Already Signed Up? Please Log In</Nav.Link> 
            </Form>}
            {isLoading && <Spinner animation="border" />}

            {user?.email && <Alert variant="success">
                User signed up successfully!
            </Alert>}
            {
                authError && <Alert variant="danger">
                {authError.message || authError}
            </Alert>
            }
        </div>
    );
};

export default Signup;