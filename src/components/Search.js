import React from 'react';

// Search is still passed handler function from mapDispatchToProps
// Instead of updating input text state, it dispatches search action

var Search = ({handleSearchInputChange}) => (

  <div className="search-bar form-inline">
    <input
      className="form-control"
      type="text"
      onChange={(e) => handleSearchInputChange(e.target.value)}
    />
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

export default Search;
