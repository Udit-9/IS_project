// import React from 'react'
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// export default function Graph_new() {
//     let price = [];
//     console.log("price", price);
//     price = price? (price.map((x) => {
//         return { ...x, time: new Date(x.time), name:(new Date(x.time)).getHours()+":"+(new Date(x.time)).getMinutes()+":"+(new Date(x.time)).getSeconds()  }
//     })):[]
//     const data = [
//         {
//           name: 'Page A',
//           uv: 4000,
//           pv: 2400,
//           amt: 2400,
//         },
//         {
//           name: 'Page B',
//           uv: 3000,
//           pv: 1398,
//           amt: 2210,
//         },
//         {
//           name: 'Page C',
//           uv: 2000,
//           pv: 9800,
//           amt: 2290,
//         },
//         {
//           name: 'Page D',
//           uv: 2780,
//           pv: 3908,
//           amt: 2000,
//         },
//         {
//           name: 'Page E',
//           uv: 1890,
//           pv: 4800,
//           amt: 2181,
//         },
//         {
//           name: 'Page F',
//           uv: 2390,
//           pv: 3800,
//           amt: 2500,
//         },
//         {
//           name: 'Page G',
//           uv: 3490,
//           pv: 4300,
//           amt: 2100,
//         },
//       ];
      
//   return (
//     <ResponsiveContainer width="100%" height="80%">
//         <LineChart
//           width={500}
//           height={300}
//           data={price}
//           margin={{
//             top: 5,
//             right: 30,
//             left: 20,
//             bottom: 5,
//           }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis style={{color: '#FFFFFF'}} dataKey="name" />
//           <YAxis />
//           <Tooltip payload={[{ name: '05-01', value: 12, unit: 'kg' }]}/>
//           <Legend style={{color: '#FFFFFF'}} />
//           <Line type="monotone" strokeWidth={3} dataKey="price" stroke="#00d09c" activeDot={{ r: 8 }} />
//         </LineChart>
//       </ResponsiveContainer>
//   )
// }


import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
      
    },
    title: {
      display: true,
      text: 'Variation of concentration with time',
      
    },
  },
};

const labels = ['0', '1', '2', '3', '4', '5', '6'];
// let labels=[]
// let time= new Date();
// for( let i=0;i<10;i++)
// {
//     labels.push(time);
//     time.setMinutes(time.getMinutes+5);
// }

export const data = {
  
  labels,
  datasets: [
    // {
    //   label: 'NH3',
    //   data: labels.map(() => Math.floor((Math.random() * 10) + 1)),
    //   borderColor: 'rgb(255, 99, 132)',
    //   backgroundColor: 'rgba(255, 99, 132, 0.5)',
    // },
    {
      label: 'H2S',
      data: labels.map(() => Math.floor((Math.random() * 10) + 1)),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};




export default function App() {
  return <Line options={options} data={data} width={"500%"} length={"1000%"}/>;
}
