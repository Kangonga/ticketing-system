import { styled } from "@mui/material";

export const Container = styled('div')(({ theme })=> ({
    flex:'1',
    borderRadius: ' 10px',
    boxShadow: ' 2px 2px 5px rgba(0, 0, 0, 0.3)',
    padding: ' 20px',
    height:'280px',
    minWidth:'20rem'
}))

export const PieChartContainer = styled('div')(({ theme })=>({
    height:'240px',
}))