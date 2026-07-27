import { Navigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  return loggedInUser ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
