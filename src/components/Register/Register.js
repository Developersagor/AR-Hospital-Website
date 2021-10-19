import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Register.css";

const Register = () => {
  const { signInUsingGoogle } = useAuth();

  return (
    <div className="text-center mt-5">
      <div className="login-form">
        <h1 className="form-title">PLEASE REGISTER</h1>
        <form className="form-container">
          <input type="email" placeholder="Your Email" required />
          <br />
          <input type="password" placeholder="Your Password" required />
          <input type="submit" value="Register" className="form-login-btn" />
        </form>
        <div>
          <h3>Or Login With</h3>
          <div>
            <button className="sing-in-btn" onClick={signInUsingGoogle}>
              Google
            </button>
            <button className="sing-in-btn">Github</button>
            <h3 className="pb-5">
              Already Have An Account <Link to="/login">Please Login</Link>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
