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

function App() {
  return (
    <div className="">
     <Router>
        <Menubar></Menubar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
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
    </div>
  );
}

export default App;
