import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-clear-sans';
import * as serviceWorker from './util/serviceWorker';
import { Grommet } from 'grommet';
import AppRouter from './router/router';

const theme = {
    global: {
      colors: {
        'light-2': '#f5f5f5',
        'text': {
          'light': 'rgba(0, 0, 0, 0.87)',
        },
        'primary': '#777',
      },
      edgeSize: {
        small: '14px',
      },
      elevation: {
        light: {
          medium: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
        },
      },
      font: {
        size: '14px',
        height: '20px',
      },
    },
    button: {
      border: {
        width: '1px',
        radius: '4px',
      },
      padding: {
        vertical: '8px',
        horizontal: '16px',
      }
    },
  };

ReactDOM.render(<Grommet theme={theme} full>
    <AppRouter />
</Grommet>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
