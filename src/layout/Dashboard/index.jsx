import { Routes, Route, Navigate } from "react-router-dom";
import {Login} from "@/views/index"

export const DashboardLayout = () => {
    return (
        <Routes>
            <Route exact path="/*" element={<Navigate to={"/dashboard"} replace />} />
            <Route exact path="/dashboard" element={<Login />} />
        </Routes>
    )
}