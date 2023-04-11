import { Box, CssBaseline } from "@mui/material";
import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { ThemeContext } from "./context/ThemeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Login from "./shared/pages/login/Login"

import RequireAdminAuth from "./authRoutes/RequireAdminAuth";
import RequireDeveloperAuth from "./authRoutes/RequireDeveloperAuth";
import RequireAgentAuth from "./authRoutes/RequireAgentAuth";


const queryClient = new QueryClient({})
export default function App(){
    const [ mode, useMode ] = useState('light')
    return(
        <>
            <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                    <ThemeContext.Provider value={{ mode,useMode }}>
                        <CssBaseline />
                            <Routes>
                                <Route path="/" element={<Login />} />
                                <Route path="/admin/login" element={<Login />} />
                                <Route path="admin/*" element={<RequireAdminAuth />} />
                                <Route path="dev/*" element={<RequireDeveloperAuth />} />
                                <Route path="/agents" element={<RequireAgentAuth />} />
                            </Routes>
                    </ThemeContext.Provider>
                </QueryClientProvider>
            </BrowserRouter>
        </>
    )
}