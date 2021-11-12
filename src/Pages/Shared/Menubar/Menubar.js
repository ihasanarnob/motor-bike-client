import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Menubar = () => {
    const {user,logout} = useAuth();
    return (
        <div>
             <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand className="font-"> <h3 className="text-primary">ASAP Wheels</h3> </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/featured">Featured Bikes</Nav.Link>
                        <Nav.Link as={Link} to="/purchase">Purchase</Nav.Link>
                        <Nav.Link as={Link} to="/manageOrders">Manage Orders</Nav.Link>

                        {user?.email ?
                            <Button className ="mx-2" onClick={logout} variant="light">Logout</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        <Navbar.Text>
                            Welcome : <a style={{textDecoration: "none"}} href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Menubar;