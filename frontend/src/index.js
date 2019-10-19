// ie-11 issue

import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import 'react-app-polyfill/ie11';

import "bootstrap/dist/css/bootstrap.css";
import "handsontable/dist/handsontable.full.css";

import * as serviceWorker from './serviceWorker';
import App from './App';

import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
