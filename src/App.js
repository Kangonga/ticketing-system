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
import Sidebar from './shared/components/sidebar/Sidebar'
import Topbar from "./shared/components/topbar/Topbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({})
export default function App(){
    const [ mode, useMode ] = useState('light')
    const [ user, setUser ] = useState('admin')
    return(
        <>
            <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <UserContext.Provider value={{ user, setUser }}>
                    <ThemeContext.Provider value={{ mode,useMode }}>
                        <CssBaseline />
                        <Box display='flex' justifyContent='flex-start'>
                            <Sidebar></Sidebar>
                        <Box display='flex' flexDirection='column' flex={2} >
                            <Topbar></Topbar>
                            <Box>
                            <Routes>
                                <Route path="/admin">
                                    <Route index element={<AdminDashboard />}/>
                                    {/* <Route path="login" element={<Login />} /> */}
                                    <Route path="devs">
                                        <Route index element={<DataTable />} />
                                        <Route path=":devId" element={<SingleView />} />
                                        <Route path="new" element={<CreateUser type={'developer'} />} />
                                    </Route>
                                    <Route path="tickets">
                                        <Route index element={<TicketsDataTable/>} />
                                        {/* <Route path=":ticketId" element={<TicketChat />} /> */}
                                        {/* <Route path="new" element={<NewItem />} /> */}
                                    </Route>
                                    <Route path="agents">
                                        <Route index element={<AgentDataTable data={'agents'}/>} />
                                        <Route path=":agentId" element={<SingleView />} />
                                        <Route path="new" element={<CreateUser type={'agent'}/>} />
                                    </Route>
                                </Route>

                                {/* <Route path="/dev">
                                    <Route index element={<List />} />
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
                                    <Route path=":agentId" element={<ListItem />} />
                                    <Route path="new" element={<NewItem />} />
                                    <Route path="me" element={<NewItem />} />
                                    <Route path="login" element={<Login />} />
                                </Route> */}
                            </Routes>
                            </Box>
                        </Box>
                        </Box>
                    </ThemeContext.Provider>
                </UserContext.Provider>
                </QueryClientProvider>
            </BrowserRouter>
        </>
    )
}