import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './Pages/Home/Home/Home';
import Menubar from './Pages/Shared/Menubar/Menubar';
import Footer from './Pages/Shared/Footer/Footer';
import Error404 from './Pages/Error404/Error404';
import Login from './Pages/Login/Login/Login';
import Signup from './Pages/Login/Signup/Signup';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Purchase from './Pages/Purchase/Purchase';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Featured from './Pages/Featured/Featured';
import AddProducts from './Pages/AddProducts/AddProducts';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div className="">
    <AuthProvider>
     <Router>
        <Menubar></Menubar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/featured">
            <Featured></Featured>
          </Route>
          <PrivateRoute path="/placeOrder/:id">
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>
          <Route path="/addProducts">
            <AddProducts></AddProducts>
          </Route>
          <PrivateRoute path="/purchase">
            <Purchase></Purchase>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <Signup></Signup>
          </Route>

        {/* error page */}
          <Route path="/*">
            <Error404></Error404>
          </Route>

          </Switch>
          <Footer></Footer>
      </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
