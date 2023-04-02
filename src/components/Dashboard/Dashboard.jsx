import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Dashboard = () => {

    let students = [
        { id: 1, name: "Alice", math: 90, physics: 85, chemistry: 95 },
        { id: 2, name: "Bob", math: 80, physics: 75, chemistry: 85 },
        { id: 3, name: "Charlie", math: 95, physics: 90, chemistry: 80 },
        { id: 4, name: "David", math: 85, physics: 80, chemistry: 90 },
        { id: 5, name: "Eve", math: 75, physics: 85, chemistry: 95 },
        { id: 6, name: "Frank", math: 90, physics: 85, chemistry: 80 },
        { id: 7, name: "Grace", math: 85, physics: 90, chemistry: 85 },
        { id: 8, name: "Harry", math: 80, physics: 85, chemistry: 90 },
        { id: 9, name: "Isabel", math: 95, physics: 80, chemistry: 75 },
        { id: 10, name: "Jack", math: 90, physics: 90, chemistry: 85 }
      ];
      

    return (
        <div className='mx-12 mt-16'>
            <LineChart
            width={1000}
            height={300}
            data={students}
            >
              <Line stroke='#FF007F' dataKey='physics'></Line>  
              <Line stroke='#FFC01D' dataKey='math'></Line>  
              <Line stroke='#EE4B2B' dataKey='chemistry'></Line>  
              <XAxis dataKey='name'></XAxis>
              <YAxis></YAxis>
              <Tooltip></Tooltip>
            </LineChart>
            
        </div>
    );
};

export default Dashboard;