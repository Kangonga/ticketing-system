import {
  AreaChart as Chart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { data } from "./data";

export default function AreaChart() {
  return (
    <ResponsiveContainer width='100%' minHeight='80%' height='100%'>
      <Chart data={data} 
        >
        <defs>
          <linearGradient id="tickets" x1="0" y1="0" x2="0" y2="1">
            <stop offset="20%" stopColor="#CD5C5C" stopOpacity={0.8}/>
            <stop offset="80%" stopColor="#C71585" stopOpacity={0.3}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="total" stroke="#82ca9d" fillOpacity={1} fill="url(#tickets)" />
      </Chart>
    </ResponsiveContainer>
  )
}
