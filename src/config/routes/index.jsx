import { Navigate, Route, Routes } from "react-router-dom";

import { useAuth } from "../../context/AuthContext"; 
import { AuthLayout } from "../../layout/Auth";
import { Login } from "../../views";

const Root = () => {
    // Define hooks or state for managing authentication or other logic here

    const {
        isAuthenticated,
        splashLoading,
        role,
    } = useAuth()

    return (
        <Routes>

            {/* 
                Need to import the DashboardLayout and AuthLayout components
                and use them to define the routes for the application.
            */}
            <Route
            exact
            path="/*"
            element={
                isAuthenticated ? (<Navigate to={"/home"} replace />) : (<Navigate to={"/login"} replace />)
            }
            />
            <Route
                exact
                path="/login"
                element={<Login />}
            />
        </Routes>
    )

}

export default Root;