import departmentData from "../../department.json";
import "./Department.css";
const Department = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Our Department</h1>
      <div className="row mt-5 ">
        {departmentData.map((data) => (
          <div className="col-lg-3 col-sm-6 col-12 " key={data.id}>
            <div className="card  p-4 mb-lg-5 mb-sm-3 mb-5  rounded-3 mx-sm-auto card-height">
              <img
                src={data.image}
                className="card-img-top rounded-3 img-fluid"
                alt="imagel"
              />
              <div className="card-body">
                <h3 className=" fw-bolder d-title ">{data.name}</h3>
                <p className="card-text text-size"> {data.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Department;
