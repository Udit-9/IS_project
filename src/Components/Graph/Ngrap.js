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

import emailjs from '@emailjs/browser';

import { Line } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
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

// Email.send({
//     SecureToken : "37ff7e44-b416-46c1-a200-185e55b01256",
//     To : 'udidjain28@gmail.com',
//     From : "cooldudeoni@gmail.com",
//     Subject : "Chill Hai",
//     Body : "Mail sent successfully"
// }).then(
//   message => alert(message)
// );
function sendEmail() {

    // const formData= new FormData();
    // formData['name']="udit";
    // formData['email']='udidjain28@gmail.com'
    const eventTarget = {
        target: {
          elements: {
            from_email: { value:'udidjain28@gmail.com'  },
          }
        }
      };
    const dummyEvent = new Event('submit');
    Object.defineProperty(dummyEvent, 'target', { value: eventTarget.target });

    const emailDetails = {
        reply_to: 'udidjain28@gmail.com',
        from_name: 'Toilet-1',
        from_email: 'udidjain28@gmail.com',
        subject: 'Test Email from emailjs',
        message: 'Chala gya mail'
    };
    emailjs.send('service_gik6hko', 'template_niyd37n', emailDetails, '1wSyTEU0rIYFVQ0RT')
      .then((result) => {
        console.log(result.text);
        console.log("mail sent")
      }, (error) => {
        console.log(error.text);
        console.log("mail not sent")

      });
  }
//   sendEmail();

const Ngrap = () => {
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
        ],
    });
    useEffect(() => {
        const fetchData = async () => {
            const url = 'http://qts.iitkgp.ac.in/last/shm/20'
            const labelSet1 = [];
            const dataSet1 = [];
            const labelSet2 = [];
            const dataSet2 = [];
            var cnt1 = 0,cnt=0,cnt2=0,cnt3=0,cnt4=0,cnt5=0;
            var sum1 = 0,sum2=0,sum3=0,sum4=0,sum5=0;
            await fetch(url).then((data) => {
                console.log("Api data", data)
                const res = data.json();
                return res
            }).then((res) => {
                console.log("ressss", res)
                for (const val of res) {
                    cnt++;
                    dataSet1.push(val.NH3);
                    labelSet1.push(cnt);    
                    
                    if(val.NH3>3.3)
                    {
                        sendEmail();
                    }
                }
                setData({
                    labels: labelSet1,
                    datasets: [
                        {
                            lineTension: 0.5,
                            label: 'NH3',
                            data: dataSet1,
                            borderColor: 'green',
                            // backgroundColor: 'white',
                        }
                        //   ,
                        //   {
                        //     label: 'Dataset ID2',
                        //     data:dataSet2,
                        //     borderColor: 'black',
                        //     backgroundColor: 'yellow',
                        //   },
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
        <div style={{ width: '120%', height: '120%' }}>
            {
                console.log("dataaaaaaaa", data)
            }
            <Line options={options} data={data} />
        </div>)
}
export default Ngrap;







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
