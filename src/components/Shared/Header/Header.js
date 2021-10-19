import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import mainlogo from "../../../images/icons8-clinic-50.png";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <header>
        <NavLink className="logo" to="/Home">
          <img className="logo-img" src={mainlogo} alt="" />
          <span>AR.Hospital</span>
        </NavLink>
        <div className="d-flex nav-div  align-items-center justify-content-center">
          <nav className="nav-bar">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/doctors">Doctors</NavLink>
            <NavLink to="/department">Department</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
          {user?.email && (
            <span className="user-name">{user?.displayName}</span>
          )}

          {user?.email ? (
            <button className="login-btn" onClick={logOut}>
              Logout
            </button>
          ) : (
            <NavLink to="/login">
              <button className="login-btn">Login</button>
            </NavLink>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
