import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Style from "./ContractorDetails.module.css";

const ContractorDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [contractor, setContractor] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/api/users/contractor/${id}`)
      .then((res) => res.json())
      .then((data) => setContractor(data));
  }, [id]);

  // delete user
  const deleteUser = () => {
    fetch(`http://localhost:5000/api/users/user/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        alert("Contractor Deleted");
        navigate("/App/contractor");
      });
  };

  // edit page
  const editUser = () => {
    navigate(`/App/user/${id}`);
  };

  return (
    <div className={Style.container}>
      <div className={Style.topButtons}>
        <button className={Style.delete} onClick={deleteUser}>
          Delete
        </button>

        <button className={Style.edit} onClick={editUser}>
          Edit
        </button>
      </div>

      <div className={Style.card}>
        <div className={Style.row}>
          <b>Name</b>
          <span>{contractor.name}</span>

          <b>Status</b>
          <span>{contractor.status}</span>
        </div>

        <div className={Style.row}>
          <b>F/Name</b>
          <span>{contractor.fatherName}</span>

          <b>Country</b>
          <span>{contractor.country}</span>
        </div>

        <div className={Style.row}>
          <b>Email</b>
          <span>{contractor.email}</span>

          <b>Province</b>
          <span>{contractor.province}</span>
        </div>

        <div className={Style.row}>
          <b>CNIC</b>
          <span>{contractor.cnic}</span>

          <b>Location</b>
          <span>{contractor.district}</span>
        </div>

        <div className={Style.row}>
          <b>Contact</b>
          <span>{contractor.contact}</span>

          <b>Address</b>
          <span>{contractor.address}</span>
        </div>

        <div className={Style.row}>
          <b>ID</b>
          <span>{contractor.username}</span>

          <b>Password</b>
          <span>{contractor.password}</span>
        </div>
      </div>

      <button
        className={Style.back}
        onClick={() => navigate("/App/contractor")}
      >
        Back
      </button>
    </div>
  );
};

export default ContractorDetails;
