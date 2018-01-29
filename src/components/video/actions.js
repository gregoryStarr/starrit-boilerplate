import {PLAY, PAUSE, STOP, SETSOURCE, GETSOURCE, FETCH} from "./actionTypes";

export const playVideo = ()  => {
    return {
        type: PLAY,
        isPlaying: true
    }
}

export const pauseVideo = (pauseBool) =>  {
    return {
        type: PAUSE,
        isPaused: pauseBool
    }
}

export const stopVideo = () => {
    return {
        type: STOP,
        isPlaying: false
    }
}

export const setSource = (source)  =>  {
    return {
        type: SETSOURCE,
        videoSource: source
    }
}

export const getSource = (source)  =>  {
    return {
        type: GETSOURCE,
        videoSource: source
    }
}

const fetch = (url, params) => ({
    type: FETCH,
    url,
    params,
});

export const getRepos = username => async dispatch => {
    try {
        const url = `https://api.github.com/users/${username}/repos?sort=updated`;
        const response = await fetch(url)
        const responseBody = await response.json();
        dispatch(addRepos(responseBody));
    } catch (error) {
        console.error(error);
        dispatch(clearRepos());
    }
}