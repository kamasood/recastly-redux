import React from 'react';
import PropTypes from 'prop-types';
import VideoListEntry from './VideoListEntry.js';

// Video list is unchanged (it was already stateless functional component)
// Still passed videos and handleClick function from mapState/Dispatch in container

var VideoList = ({videos, handleVideoListEntryTitleClick}) => (
  <div className="video-list">
    {
      videos.map(video => (
        <VideoListEntry
          key={video.etag}
          video={video}
          handleVideoListEntryTitleClick={handleVideoListEntryTitleClick}
        />
      ))
    }
  </div>
);

VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

export default VideoList;
