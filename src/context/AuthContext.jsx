import { useContext, createContext, useEffect, useState } from "react";

const initialAuthState = {
    isAuthenticated: false,
    user: null,
    token: null,
    role: null,
    splashLoading: true,
}

const AuthContext = createContext(initialAuthState);


export const AuthProvider = ({children}) => {
    const [authState, setAuthState] = useState(initialAuthState);

    const fnEnableAuth = (user, token, role) => {
        setAuthState({
            isAuthenticated: true,
            user: user,
            token: token,
            role: role,
            splashLoading: false,
        });
    }

    return (
        <AuthContext.Provider value={{ ...authState, setAuthState, fnEnableAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}