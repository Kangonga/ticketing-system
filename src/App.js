import { CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import Sidebar from './shared/components/sidebar/Sidebar'

export default function App(){
    return(
        <>
            <BrowserRouter>
                <Sidebar></Sidebar>
            </BrowserRouter>
        </>
    )
}