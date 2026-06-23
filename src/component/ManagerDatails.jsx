import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Style from "./ManagerDatails.module.css";

const ManagerDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [manager, setManager] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/api/users/manager/${id}`)
      .then((res) => res.json())
      .then((data) => setManager(data));
  }, [id]);

  // delete manager
  const deleteManager = () => {
    fetch(`http://localhost:5000/api/users/user/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        alert("Manager Deleted");
        navigate("/App/manager");
      });
  };

  // edit manager
  const editManager = () => {
    navigate(`/App/user/${id}`);
  };

  return (
    <div className={Style.container}>
      <div className={Style.topButtons}>
        <button className={Style.delete} onClick={deleteManager}>
          Delete
        </button>

        <button className={Style.edit} onClick={editManager}>
          Edit
        </button>
      </div>

      <div className={Style.card}>
        <div className={Style.row}>
          <b>Name</b>
          <span>{manager.name}</span>

          <b>Father Name</b>
          <span>{manager.fatherName}</span>
        </div>

        <div className={Style.row}>
          <b>Email</b>
          <span>{manager.email}</span>

          <b>Contact</b>
          <span>{manager.contact}</span>
        </div>

        <div className={Style.row}>
          <b>CNIC</b>
          <span>{manager.cnic}</span>

          <b>Province</b>
          <span>{manager.province}</span>
        </div>

        <div className={Style.row}>
          <b>District</b>
          <span>{manager.district}</span>

          <b>Username</b>
          <span>{manager.username}</span>
        </div>
      </div>

      <button className={Style.back} onClick={() => navigate("/App/manager")}>
        Back
      </button>
    </div>
  );
};

export default ManagerDetails;
