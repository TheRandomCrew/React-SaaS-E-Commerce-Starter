import React from 'react';
import ReactDOM from 'react-dom';
// Font, change it here: https://github.com/KyleAMathews/typefaces
import 'typeface-clear-sans';
import * as serviceWorker from './util/serviceWorker';
import AppRouter from './router/router';

ReactDOM.render(<AppRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
