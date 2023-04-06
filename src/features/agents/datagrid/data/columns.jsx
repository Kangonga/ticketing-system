import { Avatar } from "@mui/material";

export const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
];

export const devColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    { field: 'closed', headerName: 'Total closed', width: 130 },
    { field: 'status', headerName: 'Status', width: 130, renderCell:(params)=>params.row.status },
    {
      field: 'avatar',
      headerName: 'Avatar',
      width: 90,
      renderCell:(params)=>{
        return(<>
            {params.row.avatar}
        </>)
      }
    }
];

export const agentColumns = [
    { field: 'id', headerName: 'ID', width: 170 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    { field: 'openedTickets', headerName: 'Total Opened', width: 130 },
    {
      field: 'avatar',
      headerName: 'Avatar',
      width: 90,
      renderCell:(params)=>{
        return(<>
            <Avatar src={params.row.avatar}></Avatar>
        </>)
      }
    }
];

export const ticketColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'title', width: 200 },
    { field: 'agent', headerName: 'Reported by', width: 130 },
    { field: 'status', headerName: 'Status', width: 130 },
    { field: 'assignee', headerName: 'Assignee', width: 130},
    { field: 'source', headerName: 'Source', width: 130 },
    { field: 'priority', headerName: 'Priority', width: 130 },
];

export const closedTicketColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'title', width: 200 },
    { field: 'agent', headerName: 'Reported by', width: 130 },
    { field: 'status', headerName: 'Status', width: 130 },
    { field: 'assignee', headerName: 'Assignee', width: 130},
    { field: 'source', headerName: 'Source', width: 130 },
    { field: 'priority', headerName: 'Priority', width: 130 },
    { field: 'open', headerName: 'Opened at', width: 130 },
    { field: 'close', headerName: 'Closed at', width: 130 },

];