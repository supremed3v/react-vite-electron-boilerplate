import { Routes, Route, Navigate } from "react-router-dom";
import {Login} from "@/views/index"

export const AuthLayout = () => {
    return (
        <Routes>
            <Route exact path="/*" element={<Navigate to={"/login"} replace />} />
            <Route exact path="/login" element={<Login />} />
        </Routes>
    )
}