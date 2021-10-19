import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <section className="footer ">
        <div className="container text-center">
          <div className="box-container row d-flex  footer-link">
            <div className="box col-md-6 col-lg-3 col-12">
              <h3>our branches</h3>
              <NavLink to="/">
                {" "}
                <i className="fas fa-map-marker-alt footer-link"></i> india{" "}
              </NavLink>
              <NavLink to="/">
                {" "}
                <i className="fas fa-map-marker-alt footer-link"></i> USA{" "}
              </NavLink>
              <NavLink to="/">
                {" "}
                <i className="fas fa-map-marker-al footer-link"></i> france{" "}
              </NavLink>
              <NavLink to="/">
                {" "}
                <i className="fas fa-map-marker-alt footer-link"></i> japan{" "}
              </NavLink>
              <NavLink to="/">
                {" "}
                <i className="fas fa-map-marker-alt footer-link"></i> russia{" "}
              </NavLink>
            </div>

            <div className="box col-md-6 col-lg-3 col-12">
              <h3>quick links</h3>
              <NavLink to="/">
                {" "}
                <i className="fas fa-arrow-right footer-link"></i> home{" "}
              </NavLink>
              <NavLink to="/">
                {" "}
                <i className="fas fa-arrow-right footer-link"></i> services{" "}
              </NavLink>
              <NavLink to="/">
                {" "}
                <i className="fas fa-arrow-right footer-link"></i> Doctors{" "}
              </NavLink>
              <NavLink to="/">
                {" "}
                <i className="fas fa-arrow-right footer-link"></i> Department{" "}
              </NavLink>

              <NavLink to="/">
                {" "}
                <i className="fas fa-arrow-right footer-link"></i> Contact{" "}
              </NavLink>
            </div>

            <div className="box col-md-6 col-lg-3 col-12">
              <h3>our services</h3>
              <NavLink to="/">
                {" "}
                <i className="fas fa-check"></i> Nephrologist Care{" "}
              </NavLink>
              <NavLink to="/">
                {" "}
                <i className="fas fa-check"></i> Dental{" "}
              </NavLink>
              <NavLink to="/">
                {" "}
                <i className="fas fa-check"></i> Cardiology{" "}
              </NavLink>
              <NavLink to="/">
                {" "}
                <i className="fas fa-check"></i> Pulmonary{" "}
              </NavLink>
              <NavLink to="/">
                {" "}
                <i className="fas fa-check"></i> Urology{" "}
              </NavLink>
            </div>

            <div className="box col-md-6 col-lg-3 col-12">
              <h3>follow us</h3>
              <NavLink to="/">
                {" "}
                <i className="fab fa-facebook-f"></i> facebook{" "}
              </NavLink>
              <NavLink to="/">
                {" "}
                <i className="fab fa-twitter"></i> twitter{" "}
              </NavLink>
              <NavLink to="/">
                {" "}
                <i className="fab fa-instagram"></i> instagram{" "}
              </NavLink>
              <NavLink to="/">
                {" "}
                <i className="fab fa-linkedin"></i> linkedin{" "}
              </NavLink>
              <NavLink to="/">
                {" "}
                <i className="fab fa-pinterest"></i> pinterest{" "}
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
