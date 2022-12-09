import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import { searchRevs } from './reducers';
import './index.css';
import './containers/App.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';

const root = ReactDOM.createRoot(document.getElementById('root'));

const logger = createLogger();
const store = createStore(searchRevs, applyMiddleware(logger));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
