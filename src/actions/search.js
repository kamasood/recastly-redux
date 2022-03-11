import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

var handleVideoSearch = (q) => {

  // this is a thunk thing (returns a function instead of action object)
  return ((dispatch) => {
    var options = {
      key: YOUTUBE_API_KEY,
      query: q
    };

    searchYouTube(options, (videos) => {
      dispatch(changeVideo(videos[0]));
      dispatch(changeVideoList(videos));
    });
  });
};

export default handleVideoSearch;

// You can call this as the third argument in ReactDOM.render() to initialize state
// this.getYouTubeVideos('react tutorials');