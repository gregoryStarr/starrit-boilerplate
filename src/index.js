import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from "redux";
import {playerReducers} from "./components/video/reducers";
import { composeWithDevTools } from 'redux-devtools-extension';
const initialState = {
    videoSource:'',
    isPlaying:false,
    isPaused:false,
    showControls:true
}


const logger = store => dispatch => action => {
    return dispatch(action)
}

const store = createStore(
    playerReducers,
    initialState,composeWithDevTools(
        applyMiddleware(logger),
        // other store enhancers if any
    ))

ReactDOM.render(
        <Provider store={store} ><App /></Provider>,
    document.getElementById('root'));
registerServiceWorker();
store.dispatch({type:"SET_VIDEO_SOURCE", videoSource:'http://localhost:3000/video'})
store.dispatch({type:"VIDEO_PLAY"})