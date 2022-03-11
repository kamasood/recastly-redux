import Redux from 'redux';

// default parameter for state
// switch, must return in each case
var currentVideoReducer = (state = null, action) => {
  switch (action.type) {
  case 'CHANGE_VIDEO':
    return action.video;
  default:
    return state;
  }
};

export default currentVideoReducer;
