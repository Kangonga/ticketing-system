import { Box, CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import Sidebar from './shared/components/sidebar/Sidebar'
import Topbar from "./shared/components/topbar/Topbar";

export default function App(){
    return(
        <>
            <BrowserRouter>
                <Box display='flex' justifyContent='flex-start'>
                    <Sidebar></Sidebar>
                <Box display='flex' flexDirection='column' flex={2} >
                    <Topbar></Topbar>
                </Box>
                </Box>
            </BrowserRouter>
        </>
    )
}