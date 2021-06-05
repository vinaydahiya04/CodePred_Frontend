import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from "react-redux";
import { store } from './store'

import App from './App';


const app = (
    <Provider store={store}>
        <App />
    </Provider>

);

ReactDom.render(app, document.getElementById("root"));