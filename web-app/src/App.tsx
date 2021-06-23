import React from 'react';
import './App.css';
import { ThemeComponentConfigs } from './components/globas';
import Routes from './routes/index';

function App() {
  return (
    <React.Fragment>
      <ThemeComponentConfigs/>
      <Routes/>
    </React.Fragment>
  );
}

export default App;
