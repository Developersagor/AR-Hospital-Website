import React from "react";
import "./NotFound.css";
import errorImg from "../../images/error.png";

const NotFound = () => {
  return (
    <div className="not-found">
      <img src={errorImg} alt="" />
      <h2>Page Not Found!! 404</h2>
    </div>
  );
};

export default NotFound;
