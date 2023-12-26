import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'react-multi-carousel/lib/styles.css'

import { Provider } from 'react-redux';
import store from './redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <React.StrictMode>
      <App/>
      </React.StrictMode>
  </Provider>
 
);


