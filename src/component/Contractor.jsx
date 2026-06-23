import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Contractor.module.css";

const Contractor = () => {
  const [contractors, setContractors] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/users/contractors")
      .then((res) => res.json())
      .then((data) => setContractors(data));
  }, []);

  return (
    <>
      <div className={style.addButton}>
        <button
          onClick={() =>
            navigate("/", {
              state: {
                fromApp: true,
                role: "Contractor",
              },
            })
          }
        >
          add new
        </button>
      </div>
      {/* table body  */}
      <div className={style.tableSection}>
        <table className={`table `}>
          <thead>
            <tr>
              <th>Name</th>
              <th>F/Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {contractors.map((item) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.fatherName}</td>
                <td>{item.email}</td>
                <td>{item.contact}</td>

                <td>
                  <button
                    onClick={() =>
                      navigate(`/App/contractorDetails/${item._id}`)
                    }
                  >
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Contractor;
