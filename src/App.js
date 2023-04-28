import { Space } from "antd";
// import { BarChart } from "recharts";
import "./App.css";
import AppFooter from "./Components/AppFooter";
import AppHeader from "./Components/AppHeader";
import PageContent from "./Components/PageContent";
import SideMenu from "./Components/SideMenu";
import Clock from "./Components/Graph/Clock";

import H2S from "./Components/Graph/H2S";
import Graf2 from "./Components/Graph/Graf2";


const Location = () => {
  return (
    <>

      <div style={{ margin: '4%' }}>
        <Clock/>       
        <H2S/> 
        <Graf2/>
      </div>

    </>
  )
}



function App() {
  return (
    <div className="App">
      <AppHeader />

      <div className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
        <PageContent></PageContent>
        <Location>
        </Location>
        {/* <div style={{ marginLeft: 'auto' }}>
          <Graf />
        </div> */}


      </div>
      <AppFooter />
    </div>
  );
}
export default App;
