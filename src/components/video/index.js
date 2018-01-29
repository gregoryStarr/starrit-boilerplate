import React, {Component} from 'react'

import './style.css';
import VideoControls from "./controls";

class Video extends Component{
    constructor(props){
        super(props);
        console.log("Constructed")
    }

    componentDidMount(){
        this.videoElementReference.play()
        /*


                // Pause the video when the slider handle is being dragged
                seekBar.addEventListener("mousedown", function() {
                    video.pause();
                });

        // Play the video when the slider handle is dropped
                seekBar.addEventListener("mouseup", function() {
                    video.play();
                });


                // Event listener for the volume bar
                volumeBar.addEventListener("change", function() {
                    // Update the video volume
                    video.volume = volumeBar.value;
                });*/
    }


    componentWillUpdate(next){
        //debugger
        let playPromise = null;
        if( next.isPlaying && this.videoElementReference.paused){
            playPromise = this.videoElementReference.play();
        }else if(!playPromise && !this.videoElementReference.paused){
                this.videoElementReference.pause();
        }
    }


    render(){
        const {
            videoSource,
            isPlaying,
            type,
            onStart,
            onStop,
            onPause,
            dispatch,
            showControls} = this.props;

        return (
            <section>
                <video className="Video" ref={(videoEl) => { this.videoElementReference = videoEl; }}>
                    <source src={videoSource} type={type} />
                    Your browser does not support the video tag.
                </video>
                {showControls && <VideoControls onStart={onStart} onStop={onStop} isPlaying={isPlaying} onPause={onPause} dispatch={dispatch}/>}
            </section>
        )
    }
}

export default Video