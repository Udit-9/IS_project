import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Card, Space, Statistic, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getCustomers, getInventory, getOrders, getRevenue } from "../../API";
import Graf2 from "../../Components/Graph/Graf2";

import Cmnt from "../../Components/Graph/Cmnt";
import Graph3 from "../../Components/Graph/Graph3";
import NH3 from "../../Components/Graph/NH3";
import H2S from "../../Components/Graph/H2S";
import Ngrap from "../../Components/Graph/Ngrap";
import MyGraph from "../../Components/Graph/MyGraph";
import Graf from "../../Components/Graph/Graf";


// import Graph2 from '../../Components/Graph/Graph2'
// import logo from './img/iconn.png'; 

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


function Dashboard() {
  const [orders, setOrders] = useState(0);
  const [inventory, setInventory] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    getOrders().then((res) => {
      setOrders(res.total);
      setRevenue(res.discountedTotal);
    });
    getInventory().then((res) => {
      setInventory(res.total);
    });
    getCustomers().then((res) => {
      setCustomers(res.total);
    });
  }, []);

  const [hydrodenSulphideData, setHydrogenSulphideData] = useState(0);
  const [nitrogen, setnitrogen] = useState(0);
  const [idx, setidx] = useState(0);


  const fetchData = async () => {
    var sum = 0, sum2 = 0;
    await fetch("http://qts.iitkgp.ac.in/last/shm/60").then((data) => {
      console.log("Api data", data)
      const res = data.json();
      return res
    }).then((res) => {
      console.log("ressss", res)
      for (const val of res) {
        sum = (val.NH3);
        sum2 += (val.H2S);
      }
      
      // sum=val.NH3;
      sum2 /= 60;
      setHydrogenSulphideData(sum.toFixed(2));
      setnitrogen(sum2.toFixed(2))
      setidx(((sum + sum2) / 2).toFixed(0))
    })

  }
  useEffect(() => {
    const intervalId = setInterval(fetchData, 5000);
    return () => clearInterval(intervalId);
  }, []);



  return (
    <Space direction="vertical">
      <div
        width={40}  
        // src=""
        // Stats of NR Toilet-1
      ></div>
      

      <Space >

        <DashboardCard

          icon={
            <img src="https://www.pngitem.com/pimgs/m/420-4203780_transparent-sensor-icon-png-h2s-icon-png-download.png" width="50" height="50" className="logo" alt="" />

          }
          title={"H2S Concentration"}
          value={hydrodenSulphideData}
          
        />
        <DashboardCard
          icon={
            <img src="data:image/png;base64,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" width="50" height="50" className="logo" alt="" />
    
          }
          title={"NH3 Concentration"}
          value={nitrogen}
        />

        <DashboardCard
          icon={
            <img src="data:image/png;base64,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" width="50" height="50" className="logo" alt="" />

          
          }

          title={"Hygiene Index"}
          value={4}

        />
      </Space>
      {/* <Graphy/> */}
      {/* <Cmnt/> */}
      {/* <Ngrap/> */}
      {/* <MyGraph/> */}

      {/* <div style={{ display: 'flex', width: '100%' }}>
        <div style={{ width: '50%' }}>
          <NH3 />
        </div>
        <div style={{ width: '50%' }}>
          <Graf />
        </div>
      </div>

      <div style={{ display: 'flex', width: '100%' }}>
        <div style={{ width: '50%' }}>
          <H2S />

        </div>
        <div style={{ width: '50%' }}>
          <Graf2 />
        </div>
      </div> */}


      {/* <div style={{ display: 'flex', width: "100%", height: "100%"}}> */}
      {/* <H2S/> */}

      

      <NH3/>
      <Graf/>

      {/* <div style={{ display: 'flex' , width: "100%"}}>
      <Graf2/>

      <Graf/>
      </div>  */}



      {/* <Graph3/> */}
    </Space>

  );
}

function DashboardCard({ title, value, icon }) {
  return (
    <Card>
      <Space>
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}
function RecentOrders() {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      setDataSource(res.products.splice(0, 3));
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Typography.Text>Recent Orders</Typography.Text>
      <Table
        columns={[
          {
            title: "Title",
            dataIndex: "title",
          },
          {
            title: "Quantity",
            dataIndex: "quantity",
          },
          {
            title: "Price",
            dataIndex: "discountedPrice",
          },
        ]}
        loading={loading}
        dataSource={dataSource}
        pagination={false}
      ></Table>
    </>
  );
}

function DashboardChart() {
  const [reveneuData, setReveneuData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    getRevenue().then((res) => {
      const labels = res.carts.map((cart) => {
        return `User-${cart.userId}`;
      });
      const data = res.carts.map((cart) => {
        return cart.discountedTotal;
      });

      const dataSource = {
        labels,
        datasets: [
          {
            label: "Revenue",
            data: data,
            backgroundColor: "rgba(255, 0, 0, 1)",
          },
        ],
      };

      setReveneuData(dataSource);
    });
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Order Revenue",
      },
    },
  };

  return (
    <Card style={{ width: 500, height: 250 }}>
      <Bar options={options} data={reveneuData} />
    </Card>
  );
}
export default Dashboard;
