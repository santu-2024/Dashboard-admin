import "./chart.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
 

export default function Chart() {  
    const data = [
        {
          name: 'Jan',
          "Active User": 5000,
        },
        {
            name: 'Feb',
            "Active User": 2000,
        },
        {
            name: 'Mar',
            "Active User": 3000,
        },
        {
            name: 'Apr',
            "Active User": 4000,
        },
        {
            name: 'May',
            "Active User": 1000,
        },
        {
            name: 'Jun',
            "Active User": 3000,
        },
        {
            name: 'Jul',
            "Active User": 5000,
        },
        {
            name: 'Aug',
            "Active User": 2000,
        },
        {
            name: 'Sep',
            "Active User": 3500,
        },
        {
            name: 'Oct',
            "Active User": 1000,
        },
        {
            name: 'Nov',
            "Active User": 5000,
        },
        {
            name: 'Dec',
            "Active User": 3000,
        },
    
      ]; 
  return (
    <div className="chart">
        <h3 className="chartTitle">User Analytics</h3>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
            <XAxis dataKey="name" stroke="#5550bd"/>
            <YAxis/>
            <Line type="monotone" datakey="Active User" stroke="#5550bd"/>
            <Line type="monotone" dataKey="Active User" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Tooltip/>
            <Legend/>
            <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>
         </LineChart>
        </ResponsiveContainer>
    </div>
  );
}
