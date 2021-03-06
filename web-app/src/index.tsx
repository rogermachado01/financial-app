import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from "@chakra-ui/react"

import { Router } from "react-router";
import { createBrowserHistory } from "history";

import { store } from './store'
import { Provider as ReduxProvider} from 'react-redux'

const history = createBrowserHistory();



ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Router history={history}>
        <ReduxProvider store={store}>
            <App />
        </ReduxProvider>
      </Router>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
