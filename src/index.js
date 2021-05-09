import React from 'react';
import reactDom from 'react-dom';
 import App from './App';
import './index.css'
import { Provider } from 'react-redux';
import { store } from './store';

reactDom.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
               </React.StrictMode>,

    document.querySelector("#root")
); 