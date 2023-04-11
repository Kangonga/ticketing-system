import { Box, CssBaseline } from "@mui/material";
import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { ThemeContext } from "./context/ThemeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Login from "./shared/pages/login/Login"

import RequireAdminAuth from "./authRoutes/RequireAdminAuth";


const queryClient = new QueryClient({})
export default function App(){
    const [ mode, useMode ] = useState('light')
    return(
        <>
            <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                    <ThemeContext.Provider value={{ mode,useMode }}>
                        <CssBaseline />
                            <Box>
                            <Routes>
                            <Route path="/" element={<Login />} />
                            <Route path="/admin/login" element={<Login />} />
                            <Route path="admin/*" element={<RequireAdminAuth />} />

                                {/* <Route path="/dev">
                                        <Route index element={<List />} />
                                        <Route path="login" element={<Login user={'developer'}/>} />
                                        <Route path=":devId" element={<ListItem />} />
                                        <Route path="new" element={<NewItem />} />
                                        <Route path="me" element={<NewItem />} />
                                    <Route path="login" element={<Login />} />
                                </Route>

                                <Route path="/tickets">
                                    <Route index element={<List />} />
                                    <Route path=":ticketId" element={<TicketChat />} />
                                    <Route path="new" element={<NewItem />} />
                                </Route>
                                
                                <Route path="/agent">
                                    <Route index element={<List />} />
                                    <Route path="login" element={<Login user={'agent'}/>} />
                                    <Route path=":agentId" element={<ListItem />} />
                                    <Route path="new" element={<NewItem />} />
                                    <Route path="me" element={<NewItem />} />
                                    <Route path="login" element={<Login />} />
                                </Route> */}
                            </Routes>
                            </Box>
                    </ThemeContext.Provider>
                </QueryClientProvider>
            </BrowserRouter>
        </>
    )
}