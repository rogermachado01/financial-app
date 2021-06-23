import React from 'react';
import './App.css';
import { ThemeComponentConfigs } from './components/globas';
import Routes from './routes/index';
import SideBar from "./components/SideBar";

function App() {
  return (
    <React.Fragment>
      <ThemeComponentConfigs/>
      <SideBar/>
      <Routes/>
    </React.Fragment>
  );
}

export default App;
