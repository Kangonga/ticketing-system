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
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    { field: 'opened', headerName: 'Total Opened', width: 130 },
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

export const ticketColumns = [
    { field: 'id', headerName: 'ID', width: 130 },
    { field: 'title', headerName: 'title', width: 200 },
    { field: 'agent', headerName: 'Reported by', width: 130 },
    { field: 'status', headerName: 'Status', width: 80 },
    { field: 'developer', headerName: 'Assignee', width: 130},
    { field: 'source', headerName: 'Source', width: 80 },
    { field: 'priority', headerName: 'Priority', width: 80 },
];

export const closedTicketColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'title', width: 200 },
    { field: 'agent', headerName: 'Reported by', width: 130 },
    { field: 'status', headerName: 'Status', width: 130 },
    { field: 'assignee', headerName: 'Assignee', width: 130},
    { field: 'source', headerName: 'Source', width: 100 },
    { field: 'priority', headerName: 'Priority', width: 130 },
    { field: 'open', headerName: 'Opened at', width: 100 },
    { field: 'close', headerName: 'Closed at', width: 100 },
];