import React, { Component } from 'react';
import './App.css';
import Video from "./components/video"
//import {bindActionCreators} from "redux/";
import {pauseVideo, playVideo, stopVideo} from "./components/video/actions";
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
    return {
        videoSource: state.videoSource,
        isPlaying: state.isPlaying,
        isPaused: state.isPaused,
        showControls:state.showControls
    };
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch,
        onStart: playVideo,
        onStop: stopVideo,
        onPause:pauseVideo
        }
    };


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          VideoBox - A Video Challenge...
        </header>
          <Video type="video/mp4" controls="false" {...this.props} loop>
          </Video>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
