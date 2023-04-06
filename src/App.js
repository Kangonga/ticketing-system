import { Box, CssBaseline } from "@mui/material";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeContext } from "./context/ThemeContext";
import { UserContext } from "./context/UserContext";
import AdminDashboard from "./features/admin/pages/adminDashboard/AdminDashboard";
import CreateUser from "./features/admin/pages/createUser/CreateUser";
import SingleView from "./features/admin/pages/userSingleView/SingleView";
import DataTable from "./features/admin/components/datagrid/DataGrid";
import AgentDataTable from "./features/agents/datagrid/DataGrid";
import TicketsDataTable from "./features/tickets/datagrid/DataGrid";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Login from "./shared/pages/login/Login"
import CreateTicket from "./shared/pages/createTickets/CreateTicket";
import TicketChat from "./shared/pages/ticketChat/TicketChat";
import Profile from "./shared/pages/profilePage/Profile";

import { useSelector } from "react-redux";

const queryClient = new QueryClient({})
export default function App(){
    useSelector((store)=>console.log(store.user))

    const [ mode, useMode ] = useState('light')
    const [ user, setUser ] = useState('admin')
    return(
        <>
            <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <UserContext.Provider value={{ user, setUser }}>
                    <ThemeContext.Provider value={{ mode,useMode }}>
                        <CssBaseline />
                            <Box>
                            <Routes>
                                <Route path="admin">
                                    <Route index element={<AdminDashboard />}/>
                                    <Route path="login" element={<Login user={'admin'}/>} />
                                    <Route path="profile" element={<Profile user={'admin'}/>} />
                                    <Route path="devs">
                                        <Route index element={<DataTable />} />
                                        <Route path=":devId" element={<SingleView />} />
                                        <Route path="new" element={<CreateUser type={'developer'} />} />
                                    </Route>
                                    <Route path="tickets">
                                        <Route index element={<TicketsDataTable/>} />
                                        <Route path=":ticketId" element={<TicketChat />} />
                                        <Route path="new" element={<CreateTicket />} />
                                    </Route>
                                    <Route path="agents">
                                        <Route index element={<AgentDataTable data={'agents'}/>} />
                                        <Route path=":agentId" element={<SingleView />} />
                                        <Route path="new" element={<CreateUser type={'agent'}/>} />
                                    </Route>
                                </Route>

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
                </UserContext.Provider>
                </QueryClientProvider>
            </BrowserRouter>
        </>
    )
}