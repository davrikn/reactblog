import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import BlogReducer from "./store/reducers/blogReducer";
import thunk from 'redux-thunk';
import { BrowserRouter } from "react-router-dom";

const rootReducer = combineReducers({
        blog: BlogReducer,
    }
)

const reduxStore = createStore(rootReducer, compose(applyMiddleware(thunk)))
ReactDOM.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
