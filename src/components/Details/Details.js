import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import "./Details.css";

const Details = () => {
  const { serviceId } = useParams();
  const { services } = useAuth();
  const service_Id = services?.find((e) => e?.id === serviceId);
  // console.log(service_Id);

  return (
    <>
      <div className="row container mt-5 p-5 text-center mx-auto">
        <div className="col-md-12 col-lg-12 col-xl-6 col-12">
          <img className="srImg" src={service_Id?.img} alt="" />
        </div>
        <div className="col-lg-6">
          <h1>{service_Id?.title}</h1>
          <p className="srDetail">{service_Id?.details}</p>
        </div>
      </div>
    </>
  );
};

export default Details;
