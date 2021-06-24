import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from "react-redux";
import { store, persistor } from './store'
import { PersistGate } from "redux-persist/integration/react";
import App from './App';


const app = (
    <Provider store={store}>
        <PersistGate Loading={null} persistor={persistor}>

            <App />

        </PersistGate>

    </Provider>

);

ReactDom.render(app, document.getElementById("root"));