import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

//passing current video state to component
var mapStateToProps = (state) => ({
  video: state.currentVideo
});

// no dispatch from player (no data send);

// wiring React component to Redux container
var VideoPlayerContainer = connect(mapStateToProps, null)(VideoPlayer);

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

export default VideoPlayerContainer;
