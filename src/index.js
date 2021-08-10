import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainApp from './App';
import store from "./redux/redux-store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

window.store = store;


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <MainApp/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);