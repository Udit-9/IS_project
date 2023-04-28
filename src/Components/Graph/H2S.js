// import React, { useState, useEffect } from "react";
// import { Line } from "react-chartjs-2";

// const Graphy = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const intervalId = setInterval(fetchData, 1000);

//     return () => clearInterval(intervalId);
//     fetch("http://qts.iitkgp.ac.in/last/shm/60")
    //   .then(response => response.json())
    //   .then(data => setData(data.slice(0, 30)));
//   }, []);

//   const chartData = {
//     labels: data.map((_, i) => i + 1),
//     datasets: [
//       {
//         label: "My Data",
//         data: data.map(d => NH3.value),
//         fill: false,
//         borderColor: "rgba(75,192,192,1)",
//         tension: 0.1
//       }
//     ]
//   };

//   return <Line data={chartData} />;
// };

// export default Graphy;



import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
// import axios from "axios";


// function sendEmail() {

//   // const formData= new FormData();
//   // formData['name']="udit";
//   // formData['email']='udidjain28@gmail.com'
//   const eventTarget = {
//       target: {
//         elements: {
//           from_email: { value:'udidjain28@gmail.com'  },
//         }
//       }
//     };
//   const dummyEvent = new Event('submit');
//   Object.defineProperty(dummyEvent, 'target', { value: eventTarget.target });

//   const emailDetails = {
//       reply_to: 'udidjain28@gmail.com',
//       from_name: 'UDIT',
//       from_email: 'udidjain28@gmail.com',
//       subject: 'Test Email from emailjs',
//       message: 'Chala gya mail'
//   };
//   emailjs.send('service_gik6hko', 'template_niyd37n', emailDetails, '1wSyTEU0rIYFVQ0RT')
//     .then((result) => {
//       console.log(result.text);
//       console.log("mail sent")
//     }, (error) => {
//       console.log(error.text);
//       console.log("mail not sent")

//     });
// }


const H2S = () => {
  const [data, setData] = useState([]);
  var i=0;
  const fetchData = async () => {
    fetch("http://qts.iitkgp.ac.in/last/shm/2000")
    .then(response => response.json())
    .then(data => setData(data.slice(i, 50+i)));
    i+=3;
    // setData(response.data.slice(0,30));
  };

  useEffect(() => {
    const intervalId = setInterval(fetchData, 3000);
    return () => clearInterval(intervalId);
  }, []);

  const chartData = {
    
    labels: data.map((_, i) => i + 1),

    datasets: [
      {
        label: "H2S (ppm)",
        data: data.map(d => d.H2S),
        fill: false,
        borderColor: "orange",
        tension: 0.5
      }
    ]
  };

  return (
    <div style={{ width: '130%', height: '130%' }}>
      <Line data={chartData} />
    </div>
  );
};

export default H2S;
