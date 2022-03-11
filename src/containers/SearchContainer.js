import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleVideoSearch from '../actions/search.js';

// mapping functions defined outside of container
// note how connect is invoked


// does this need to change?
var mapStateToProps = (state) => ({});

// passing function through props, onChange, function is invoked and dispatches thunk action function
var mapDispatchToProps = (dispatch) => ({
  handleSearchInputChange: (query) => {
    dispatch(handleVideoSearch(query));
  }
});

// wiring up components to Redux containers
var SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

export default SearchContainer;
