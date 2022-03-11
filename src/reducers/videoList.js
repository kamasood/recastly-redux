import Redux from 'redux';

// default parameter for state
// default state in case of bad return too
var videoListReducer = (state = [], action) => {
  switch (action.type) {
  case 'CHANGE_VIDEO_LIST':
    return action.videos || [];
  default:
    return state;
  }
};

export default videoListReducer;
