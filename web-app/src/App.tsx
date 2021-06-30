import React from 'react';
import './App.css';
import { ThemeComponentConfigs } from './components/Globas';
import Routes from './routes/index';
import SideBar from "./components/SideBar";
import TopMenu from './components/TopMenu';

function App() {
  return (
    <React.Fragment>
      <ThemeComponentConfigs/>
      {/* <TopMenu/> */}
      <Routes/>
    </React.Fragment>
  );
}

export default App;
