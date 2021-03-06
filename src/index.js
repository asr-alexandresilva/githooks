import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';

import store from './store';

const GlobalStyle = createGlobalStyle`
*{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
  body {
    background-color: ${props => (props.bodyColor ? props.bodyColor : '#ffffff')};
  }
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle bodyColor="#F2F7FA"></GlobalStyle>
    <Provider store={store}>
      <Routes></Routes>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
