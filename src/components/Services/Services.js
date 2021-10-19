import React from "react";
import "./Services.css";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const Services = () => {
  const { services } = useAuth();
  return (
    <div className="container mt-5 text-center">
      <h2 className="mt-5 mb-3">OUR SERVICES</h2>
      <hr />
      <div className="row text-center">
        {services?.map((service) => (
          <div className="col-md-6 col-lg-4 col-xl-3 col-12 service-box mt-5">
            <img src={service.img} alt="" />
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <Link to={`/detail/${service?.id}`}>
              <button className="detail-btn">See Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
