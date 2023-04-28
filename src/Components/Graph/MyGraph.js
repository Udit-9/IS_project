import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const MyGraph = () => {
  const [data, setData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetch('http://qts.iitkgp.ac.in/last/shm/100')
        .then(response => response.json())
        .then(newData => {
          setData(prevData => {
            const newLabels = [...prevData.labels, new Date().toLocaleTimeString()];
            const newDataset = {
              label: 'My Data',
              data: [...prevData.datasets[0].data, newData.value],
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1,
            };
            return { labels: newLabels, datasets: [newDataset] };
          });
        })
        .catch(error => console.error(error));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return <Line data={data} />;
};

export default MyGraph;
