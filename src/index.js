import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from "redux";
import {playerReducers} from "./components/video/reducers";
import { composeWithDevTools } from 'redux-devtools-extension';
import {loggerMiddleware} from "./middleware";
import thunk from 'redux-thunk'

const initialState = {
    videoSource:'',
    isPlaying:false,
    isPaused:false,
    showControls:true
}




const store = createStore(
    playerReducers,
    initialState,composeWithDevTools(
        applyMiddleware(loggerMiddleware, thunk),
        // other store enhancers if any
    ))

ReactDOM.render(
        <Provider store={store} ><App /></Provider>,
    document.getElementById('root'));
registerServiceWorker();
store.dispatch({type:"SET_VIDEO_SOURCE", videoSource:'http://localhost:3000/video'})
store.dispatch({type:"VIDEO_PLAY"})