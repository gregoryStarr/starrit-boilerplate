import React from 'react'
import "./style.css"
const VideoControls = (props) => (
    <div>
        <a onClick={()=>{
            if(!props.isPlaying){
                props.dispatch(props.onStart())
            }

        }}>Play</a>
        <a onClick={()=>{
            if(props.isPlaying){
                props.dispatch(props.onPause())
            }
        }}>Pause</a>
        <a onClick={()=>props.dispatch(props.onStop())}>Stop</a>
    </div>
);

export default VideoControls;