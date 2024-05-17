import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

import MainBar from "./components/MainBar";
import { Routes, Route } from "react-router-dom";

import Users from "./components/mainbar/Users";
import UserDetails from "./components/UserDetails";
import ProtectedRoute from "./components/ProtectedRoutes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      >
        <Route index element={<Users />} />
        <Route
          path="/dashboard/guarantors"
          element={
            <ProtectedRoute>
              <MainBar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/loans"
          element={
            <ProtectedRoute>
              <MainBar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/decision-models"
          element={
            <ProtectedRoute>
              <MainBar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/savings"
          element={
            <ProtectedRoute>
              <MainBar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/loan-request"
          element={
            <ProtectedRoute>
              <MainBar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/whitelist"
          element={
            <ProtectedRoute>
              <MainBar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/karma"
          element={
            <ProtectedRoute>
              <MainBar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/organization"
          element={
            <ProtectedRoute>
              <MainBar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/loans-products"
          element={
            <ProtectedRoute>
              <MainBar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/savings-products"
          element={
            <ProtectedRoute>
              <MainBar />
            </ProtectedRoute>
          }
        />{" "}
        <Route
          path="/dashboard/fees-and-charges"
          element={
            <ProtectedRoute>
              <MainBar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/transactions"
          element={
            <ProtectedRoute>
              <MainBar />
            </ProtectedRoute>
          }
        />{" "}
        <Route
          path="/dashboard/services-account"
          element={
            <ProtectedRoute>
              <MainBar />
            </ProtectedRoute>
          }
        />{" "}
        <Route
          path="/dashboard/services"
          element={
            <ProtectedRoute>
              <MainBar />
            </ProtectedRoute>
          }
        />{" "}
        <Route
          path="/dashboard/settlement"
          element={
            <ProtectedRoute>
              <MainBar />
            </ProtectedRoute>
          }
        />{" "}
        <Route
          path="/dashboard/reports"
          element={
            <ProtectedRoute>
              <MainBar />
            </ProtectedRoute>
          }
        />{" "}
        <Route
          path="/dashboard/preferences"
          element={
            <ProtectedRoute>
              <MainBar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/fees-and-pricing"
          element={
            <ProtectedRoute>
              <MainBar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/audit-logs"
          element={
            <ProtectedRoute>
              <MainBar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/:id"
          element={
            <ProtectedRoute>
              <UserDetails />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
