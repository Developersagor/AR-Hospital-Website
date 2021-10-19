import React from "react";
import "./HomePage.css";
import newsImg1 from "../../images/news/Check-your-Baby-280x215.jpg";
import newsImg2 from "../../images/news/Great-Team-280x215.jpg";
import newsImg3 from "../../images/news/Operation-Facilities-280x215.jpg";
import newsImg4 from "../../images/news/Our-Profesional-Doctor-280x215.jpg";
import girlImg from "../../images/doctor-tahu-bulat-280x280.jpg";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="banner">
        <div>
          <h1>The Best Hospital and Doctors</h1>
          <p>Best Treatment and Happy Life</p>
          <Link to="/services">
            <button className="btn-1">Cheake Services</button>
          </Link>
          <Link to="/doctors">
            <button className="btn-2">Find Doctors</button>
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="d-flex news-container-title align-items-center justify-content-center mt-5 text-center">
          <div>
            <h2>Latest News</h2>
            <p>
              Latest up-to-date information from our public relation department.
            </p>
            <br />
            <hr className="mx-auto" />
          </div>
        </div>

        <div className="row text-center mt-3 news-desc g-4">
          <div className="col-md-6 col-lg-4 col-xl-3 col-12  box ">
            <div>
              <img src={newsImg2} alt="" />
              <h2>Together we can do so much</h2>
              <p>
                Chosen from among all others by the Immortal Elders - Solomon,
                Hercules, Atlas, Zeus, Achilles, Mercury...
              </p>
            </div>
          </div>{" "}
          <div className="col-md-6 col-lg-4 col-xl-3 col-12  box">
            <img src={newsImg4} alt="" />
            <h2>The Three Musketeers Surgical Team</h2>
            <p>
              One thousand years ago, superstition and the sword ruled. It was a
              time of darkness. It...
            </p>
          </div>{" "}
          <div className="col-md-6 col-lg-4 col-xl-3 col-12  box">
            <img src={newsImg3} alt="" />
            <h2>Accredited surgical facility</h2>
            <p>
              Since the dawn of time, there has been a process to developing web
              presentations....
            </p>
          </div>{" "}
          <div className="col-md-6 col-lg-4 col-xl-3 col-12  mt-4 box">
            <img src={newsImg1} alt="" />
            <h2>Health checks for babies</h2>
            <p>
              Somewhere out in space live The Herculoids! Zok, the laser-ray
              dragon! Igoo, the giant rock ape!...
            </p>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3 col-12  mt-4 box">
            <img src={newsImg2} alt="" />
            <h2>Together we can do so much</h2>
            <p>
              Chosen from among all others by the Immortal Elders - Solomon,
              Hercules, Atlas, Zeus, Achilles, Mercury...
            </p>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3 col-12  mt-4 box">
            <img src={newsImg4} alt="" />
            <h2>The Three Musketeers Surgical Team</h2>
            <p>
              One thousand years ago, superstition and the sword ruled. It was a
              time of darkness. It...
            </p>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3 col-12  mt-4 box">
            <img src={newsImg1} alt="" />
            <h2>Health checks for babies</h2>
            <p>
              Somewhere out in space live The Herculoids! Zok, the laser-ray
              dragon! Igoo, the giant rock ape!...
            </p>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3 col-12  box">
            <img src={newsImg3} alt="" />
            <h2>Accredited surgical facility</h2>
            <p>
              Since the dawn of time, there has been a process to developing web
              presentations....
            </p>
          </div>
        </div>
        <div></div>
      </div>
      {/* OUR PHILOSOPHY SECTION*/}
      <div className="row mt-5 mb-5">
        <div className="col-md-12 col-lg-12 col-xl-6 col-12">
          <img className="img-fluid" src={girlImg} alt="" />
        </div>
        <div className="col-md-6 col-lg-12 col-xl-6 col-12 p-content">
          <div className="p-5">
            <h2>OUR PHILOSOPHY</h2>
            <p>This is the subtitle for the heading</p>
            <p>
              Patients have an important role to play at each stage of their
              care and the five safety tips will serve to encourage them to be
              more involved in their health care.
            </p>
            <p>
              Patients can do a lot of small things to make their health-care
              experience as safe as possible.
            </p>

            <p>
              Hospitals are places of recovery and healing but there are also
              safety risks for patients, such as infections, falls and
              medication errors that can happen despite our best efforts.
            </p>
            <button className="btn-3">Learn More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
