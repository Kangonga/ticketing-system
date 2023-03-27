import { EngineeringOutlined, Groups2Outlined, SupportAgentOutlined } from "@mui/icons-material";
import {  IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Container, WidgetFooter } from "./styles";

export default function Widget({ type }){
    let data = {}
    const navigate = useNavigate()

    switch ( type ){
        case "devs":
            data = {
                title: 'Developers',
                body:'100',
                linkText: 'See all developers',
                icon: <EngineeringOutlined />,
                route: 'devs',
                color:'coral'
            };
            break;
        case "agents":
            data = {
                title: 'Agents',
                body:'100',
                linkText: 'See all agents',
                icon: <SupportAgentOutlined />,
                route: 'agents',
                color:'#D9ADE6'
            };
            break;
        case "customers":
            data = {
                title: 'Customers',
                body:'100',
                linkText: 'See all customers',
                icon: <Groups2Outlined />,
                route: 'customers',
                color:'#7DCDEF'

            };
            break;
        case "tickets":
            data = {
                title: 'Tickets',
                body:'100',
                linkText: 'See all tickets',
                icon: <Groups2Outlined />,
                route: 'tickets',
                color:'#89EC79'
            };
            break;
        default:
            break
    }
    return (
        <>
            <Container>
                <section>
                    <Typography color='gray' fontSize='1.1rem'>{data?.title}</Typography>
                </section>

                <section>
                    <Typography fontSize='1.5rem'>{data?.body}</Typography>
                </section>

                <WidgetFooter>
                    <Typography fontSize='0.9rem' className="link" onClick={()=>navigate(`${data?.route}`)}>
                        {data?.linkText}
                    </Typography>
                    <IconButton sx={{backgroundColor:data?.color}}>
                        {data?.icon}
                    </IconButton>
                </WidgetFooter>
                
            </Container>
        </>
    )
}