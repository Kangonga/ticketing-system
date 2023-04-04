import { Avatar } from "@mui/material";

export const devColumns = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    { field: 'closedTickets', headerName: 'Total closed', width: 130 },
    { field: 'status', headerName: 'Status', width: 130, renderCell:(params)=>params.row.status },
    {
      field: 'avatar',
      headerName: 'Avatar',
      width: 90,
      renderCell:(params)=>{
        return(<>
        <Avatar src={`${params.row.avatar}`}></Avatar>
        </>)
      }
    }
];
