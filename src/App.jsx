import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="appContent">
        <Sidebar />
        <div className="headerFoter">
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  );
}
export default App;
