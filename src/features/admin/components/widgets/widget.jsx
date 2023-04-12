import { EngineeringOutlined, Groups2Outlined, SupportAgentOutlined } from "@mui/icons-material";
import {  IconButton, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { Container, WidgetFooter } from "./styles";
import { fetchAgents, fetchDevelopers, fetchTickets } from '../../../../data/fetchData'

export default function Widget({ type }){
    const devNumber = useQuery(["fetchDevNum"], fetchDevelopers, {networkMode:'offlineFirst'})
    const agentNumber = useQuery(["fetchAgentNum"], fetchAgents, {networkMode:'offlineFirst'})
    const ticketNumber = useQuery(["fetchTicketNum"], fetchTickets, {networkMode:'offlineFirst'})

    let data = {}
    const navigate = useNavigate()

    switch ( type ){
        case "devs":
            data = {
                title: 'Developers',
                body:devNumber.isFetched?devNumber.data.length:'loading',
                linkText: 'See all developers',
                icon: <EngineeringOutlined />,
                route: 'devs',
                color:'coral'
            };
            break;
        case "agents":
            data = {
                title: 'Agents',
                body:agentNumber.isFetched?agentNumber.data.length:'loading',
                linkText: 'See all agents',
                icon: <SupportAgentOutlined />,
                route: 'agents',
                color:'#D9ADE6'
            };
            break;
        case "customers":
            data = {
                title: 'Customers',
                body:devNumber.isFetched?devNumber.data.length:'loading',
                linkText: 'See all customers',
                icon: <Groups2Outlined />,
                route: 'customers',
                color:'#7DCDEF'

            };
            break;
        case "tickets":
            data = {
                title: 'Tickets',
                body:ticketNumber.isFetched?ticketNumber.data.length:'loading',
                linkText: 'See all tickets',
                icon: <Groups2Outlined />,
                route: 'tickets',
                color:'#89EC79'
            };
            break;
            case "devOpenTickets":
                data = {
                    title: 'Tickets in Progress',
                    body:ticketNumber.isFetched?ticketNumber.data.length:'loading',
                    linkText: 'See all tickets',
                    icon: <Groups2Outlined />,
                    route: 'tickets',
                    color:'#89EC79'
                };
                break;
                case "devClosedTickets":
                    data = {
                        title: 'My total closed Tickets',
                        body:ticketNumber.isFetched?ticketNumber.data.length:'loading',
                        linkText: 'See all tickets',
                        icon: <Groups2Outlined />,
                        route: 'tickets',
                        color:'#89EC79'
                    };
                    break;
                    case "devTotalOpenTickets":
                        data = {
                            title: 'Total open Tickets',
                            body:ticketNumber.isFetched?ticketNumber.data.length:'loading',
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