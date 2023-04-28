/*NH3 prediction*/

import emailjs from '@emailjs/browser';
import { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function sendEmail() {

  const eventTarget = {
    target: {
      elements: {
        from_email: { value: 'udidjain28@gmail.com' },
      }
    }
  };
  const dummyEvent = new Event('submit');
  Object.defineProperty(dummyEvent, 'target', { value: eventTarget.target });

  const emailDetails = {
    reply_to: 'cooldudeoni@gmail.com',
    from_name: 'Toilet-1, NR',
    from_email: 'cleaning_management@gmail.com',
    subject: 'Test Email from emailjs',
    message: 'Chala gya mail'
  };

  emailjs.send('service_1ocwybn', 'template_ui5i2of', emailDetails, '0Gjh5o8H9-8FXYsFV')
    .then((result) => {
      console.log(result.text);
      console.log("mail sent")
    }, (error) => {
      console.log(error.text);
      console.log("mail not sent")

    });
}
sendEmail();

const options = {
  type: 'category',
  position: 'bottom',


  // indexAxis: 'x',
  // elements: {
  //   bar: {
  //     borderWidth: 2,
  //   },
  // },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      fontSize: 50,
      fontWeight: "bold",
      text: 'NH3 concentration vs Time',


    },
  },
};

const Graf = () => {
  const [data, setData] = useState({
    labels: [
      {
        label: [],
      }
    ],
    datasets: [
      {
        label: 'Dataset 1',
        data: [],
        borderColor: 'green',
        backgroundColor: 'red',
      }
      //   ,
      //   {
      //     label: 'Dataset 2',
      //     data:[],
      //     borderColor: 'black',
      //     backgroundColor: 'red',
      //   },
    ],
  });
  useEffect(() => {
    const fetchData = async () => {
      const url = 'http://qts.iitkgp.ac.in/last/shm/50'
      const labelSet1 = [];
      const labelSet2 = [];
      const dataSet1 = [];
      const dataSet2 = [];
      var cnt1 = 0, cnt = 0, cnt2 = 0, cnt3 = 0, cnt4 = 0, cnt5 = 0;
      var sum1 = 0, sum2 = 0, sum3 = 0, sum4 = 0, sum5 = 0;
      await fetch(url).then((data) => {
        console.log("Api data", data)
        const res = data.json();
        return res
      }).then((res) => {
        console.log("ressss", res)
        for (const val of res) {
          cnt++;
          dataSet1.push(val.NH3);
          if (val.NH3 > 3.38) {
            // sendEmail();
          }
          labelSet1.push(cnt);
          if (cnt > 4) {
            labelSet2.push(cnt);
          }

          cnt1++;
          cnt2++;
          cnt3++;
          cnt4++;
          cnt5++;
          if (cnt1 > 0) {
            sum1 += (val.NH3);
          }
          if (cnt2 > 1) {
            sum2 += (val.NH3);
          }
          if (cnt3 > 2) {
            sum3 += (val.NH3);
          }
          if (cnt4 > 3) {
            sum4 += (val.NH3);
          }
          if (cnt5 > 4) {
            sum5 += (val.NH3);
          }
          if (cnt % 5 == 0 && cnt > 0) {
            dataSet2.push((sum1) / 5);
            sum1 = 0;
          }
          if (cnt % 5 == 1 && cnt > 1) {
            dataSet2.push((sum2) / 5);
            sum2 = 0;
          }
          if (cnt % 5 == 2 && cnt > 2) {
            dataSet2.push((sum3) / 5);
            sum3 = 0;
          }
          if (cnt % 5 == 3 && cnt > 3) {
            dataSet2.push((sum4) / 5);
            sum4 = 0;
          }
          if (cnt % 5 == 4 && cnt > 4) {
            dataSet2.push((sum5) / 5);
            sum5 = 0;
          }

        }
        setData({
          labels: labelSet1
          ,
          datasets: [
            {
              label: 'Predicted',
              data: dataSet2,
              borderColor: 'blue',
              lineTension: 0.5,

              // backgroundColor: 'white',
            },
            {
              lineTension: 0.5,
              label: 'NH3 concn.',
              data: dataSet1,
              borderColor: 'orange',
              // backgroundColor: 'white',
            }
       
          ],
        })
        console.log("arrData", data)
      }).catch(e => {
        console.log("error", e)
      })
    }

    fetchData();
  }, [])

  return (
    <div style={{ width: '97%', height: '90%' }}>
      {
        console.log("dataaaaaaaa", data)
      }
      <Line options={options} data={data} />
    </div>)
}
export default Graf;







// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Line } from 'react-chartjs-2';



// const Ngrap = () => {
//   const [chartData, setChartData] = useState({});

//   const chart = () => {
//     let apiData = [];
//     let labels = [];
//     var cnt=0;

//     axios
//       .get('http://qts.iitkgp.ac.in/last/shm/10')
//       .then((res) => {
//         for (const val of res) {
//           // this.setState({ count: this.state.count + 1 })
//           apiData.push(val.H2S);
//           cnt++;
//           labels.push(cnt);
//         }

//         setChartData({
//           labels: labels,
//           datasets: [
//             {
//               label: 'Data',
//               data: apiData,
//               backgroundColor: ['rgba(75, 192, 192, 0.6)'],
//               borderWidth: 4,
//             },
//           ],
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   useEffect(() => {
//     chart();
//   }, []);

//   return (
//     <div className='chart'>
//       <Line data={chartData} options={{ responsive: true }} />
//     </div>
//   );
// };

// export default Ngrap;
