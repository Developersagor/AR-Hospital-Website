import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "../Contact/Contact";
import Department from "../Department/Department";
import Details from "../Details/Details";
import Doctors from "../Doctors/Doctors";
import HomePage from "../HomePage/HomePage";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Register from "../Register/Register";
import Services from "../Services/Services";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <HomePage></HomePage>
          </Route>
          <Route exact path="/home">
            <HomePage></HomePage>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <PrivateRoute exact path="/doctors">
            <Doctors></Doctors>
          </PrivateRoute>
          <PrivateRoute exact path="/department">
            <Department></Department>
          </PrivateRoute>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute exact path="/detail/:serviceId">
            <Details></Details>
          </PrivateRoute>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
};

export default Home;
