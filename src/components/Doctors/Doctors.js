import "./Doctors.css";
import doctorData from "../../doctors.json";

const Doctors = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row mx-auto mt-5">
          {doctorData.map((data) => (
            <div className="doctor-div mt-5 col-lg-3 col-md-6">
              <img src={data.image} alt="" />
              <h1>{data.name}</h1>
              <h5>{data.desg}</h5>
              <h3>{data.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Doctors;
