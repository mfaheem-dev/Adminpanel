import { BrowserRouter, Routes, Route } from "react-router-dom";

import Rigister from "../component/Rigister";
import LoginPage from "../component/loginPagr";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Rigister />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
