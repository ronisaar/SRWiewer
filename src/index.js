import React from 'react';
import ReactDOM from 'react-dom';
import '../src/style/index.css';
import App from './App';
import { Provider } from 'react-redux';
import reducer from './reducers';
import * as serviceWorker from './serviceWorker';
// import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import saga from '../src/Data/saga';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer,composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(saga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
