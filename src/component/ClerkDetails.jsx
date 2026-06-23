import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Style from "./ClerkDetails.module.css";

const ClerkDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [clerk, setClerk] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/api/users/clerk/${id}`)
      .then((res) => res.json())
      .then((data) => setClerk(data));
  }, [id]);

  // delete clerk
  const deleteClerk = () => {
    fetch(`http://localhost:5000/api/users/user/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        alert("Clerk Deleted");
        navigate("/App/clerk");
      });
  };

  // edit clerk
  const editClerk = () => {
    navigate(`/App/user/${id}`);
  };

  return (
    <div className={Style.container}>
      <div className={Style.topButtons}>
        <button className={Style.delete} onClick={deleteClerk}>
          Delete
        </button>

        <button className={Style.edit} onClick={editClerk}>
          Edit
        </button>
      </div>

      <div className={Style.card}>
        <div className={Style.row}>
          <b>Name</b>
          <span>{clerk.name}</span>

          <b>Father Name</b>
          <span>{clerk.fatherName}</span>
        </div>

        <div className={Style.row}>
          <b>Email</b>
          <span>{clerk.email}</span>

          <b>Contact</b>
          <span>{clerk.contact}</span>
        </div>

        <div className={Style.row}>
          <b>CNIC</b>
          <span>{clerk.cnic}</span>

          <b>Province</b>
          <span>{clerk.province}</span>
        </div>

        <div className={Style.row}>
          <b>District</b>
          <span>{clerk.district}</span>

          <b>Username</b>
          <span>{clerk.username}</span>
        </div>
      </div>

      <button className={Style.back} onClick={() => navigate("/App/clerk")}>
        Back
      </button>
    </div>
  );
};

export default ClerkDetails;
