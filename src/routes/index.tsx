import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoadingSpinner } from "../components/common/LoadingSpinner";
import AccountSetup from "../pages/Employee/AccountSetup";

// const Home = lazy(() => import("../pages/Home"));

const NotFound = lazy(() => import("../pages/NotFound"));

export const AppRoutes = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<AccountSetup />} />
        
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </Suspense>
  );
};
