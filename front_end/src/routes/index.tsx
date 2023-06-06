import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import PublicRoutes from "../pages/PublicRoutes";
import ProtectedRoutes from "../pages/ProtectdRoutes";
import DashboardPage from "../pages/DashboardPage";
import InfoPage from "../pages/InfosPage";

const Router = () => (
   <Routes>
      <Route path="/" element={<PublicRoutes />}>
         <Route path="/" element={<LoginPage />} />
      </Route>

      <Route path="/Protected" element={<ProtectedRoutes />}>
         <Route path="/Protected/Dashboard" element={<DashboardPage />} />

         <Route path="/Protected/infoPage" element={<InfoPage />} />
      </Route>
   </Routes>
);

export default Router;