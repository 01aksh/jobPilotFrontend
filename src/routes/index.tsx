import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoadingSpinner } from "../components/common/LoadingSpinner";
import EmployeesDetails from "../components/Employees/EmployeesDetails";
import AccountSetup from "../pages/Employee/AccountSetup";

const NotFound = lazy(() => import("../pages/NotFound"));

export const AppRoutes = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<AccountSetup />} />
        <Route path="/employee-details/:id" element={<EmployeesDetails />} />

        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </Suspense>
  );
};
