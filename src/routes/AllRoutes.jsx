import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import AdminDashboard from '../dashboards/AdminDashboard'
import BusinessDashboard from '../dashboards/BusinessDashboard'
import CustomerDashboard from '../dashboards/CustomerDashboard'
import Unauthorized from '../pages/Unauthorized'

import ProtectedRoute from './ProtectedRoute'
import PublicRoute from './PublicRoute'

function AllRoutes() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route path="/unauthorized" element={<Unauthorized />}></Route>

        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/business"
          element={
            <ProtectedRoute allowedRoles={["business"]}>
              <BusinessDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/customer"
          element={
            <ProtectedRoute allowedRoles={["customer"]}>
              <CustomerDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default AllRoutes
