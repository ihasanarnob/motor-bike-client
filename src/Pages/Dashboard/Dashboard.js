import React from 'react';
import { Button, Col, Nav, Navbar, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

import {
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
import Payment from '../Payment/Payment';
import Purchase from '../Purchase/Purchase';
import Reviews from '../Home/Reviews/Reviews';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProducts from '../AddProducts/AddProducts';
import AdminRoute from '../Login/AdminRoute/AdminRoute';
import ManageAllProducts from '../ManageAllProducts/ManageAllProducts';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const {user,admin,logout} = useAuth();
    return (
        <>
        <div className="mb-5 p-3 text-primary bg-light">
            <h5> User Name : {user.displayName} </h5>
             <h5> Logging email: {user.email} </h5>
            </div>
        <Row className="container">
        <Col xs={6} md={3}>
        <Navbar bg="light" variant="primary" >
            <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link as={Link} to={`${url}/payment`}>Pay</Nav.Link>
            <Nav.Link as={Link} to={`${url}/purchase`}>My Purchase</Nav.Link>
            <Nav.Link as={Link} to={`${url}/reviews`}>Reviews</Nav.Link>
            {/* <Nav.Link as={Link} to={`${url}/logout`}>Logout</Nav.Link> */}
            <Button onClick={logout} variant="light">Logout</Button>

            {
                admin && <> <Nav.Link as={Link} to={`${url}/makeAdmin`}>Make Admin</Nav.Link>
                <Nav.Link as={Link} to={`${url}/addProducts`}>Add Products</Nav.Link>
                <Nav.Link as={Link} to={`${url}/manageProducts`}>Manage All Products</Nav.Link>
                 </>
            }
            </Nav>
            </Navbar>
        </Col>
        <Col xs={12} md={9}>

        <Switch>
        <Route exact path={path}>
          <Purchase></Purchase>
        </Route>
        <Route path={`${path}/payment`}>
        <Payment></Payment>
        </Route>
        <Route path={`${path}/purchase`}>
        <Purchase></Purchase>
        </Route>
        <Route path={`${path}/reviews`}>
        <Reviews></Reviews>
        </Route>
        <AdminRoute path={`${path}/makeAdmin`}>
        <MakeAdmin></MakeAdmin>
        </AdminRoute>
        <AdminRoute path={`${path}/addProducts`}>
        <AddProducts></AddProducts>
        </AdminRoute>
        <AdminRoute path={`${path}/manageProducts`}>
        <ManageAllProducts></ManageAllProducts>
        </AdminRoute>
    
      </Switch>

        </Col>
      </Row>
      </>
    );
};

export default Dashboard;