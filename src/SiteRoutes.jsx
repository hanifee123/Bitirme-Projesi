import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Plajlar from "./pages/Plajlar";

function SiteRoutes({ data }) {
  return (
    <Routes>
      <Route path="/" element={<Home data={data} />} />
      <Route path="/plajlar" element={<Plajlar data={data} />} />
    
    </Routes>
  );
}

export default SiteRoutes;
