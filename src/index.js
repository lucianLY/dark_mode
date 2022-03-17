import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from './common/containers/App';
import './styles/_main.scss';
import Routes from './routes';
ReactDOM.render(
  <ThemeProvider>
    <Routes />
  </ThemeProvider>,
  document.getElementById('root')
);
