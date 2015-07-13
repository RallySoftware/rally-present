import React from 'react';

const statelessApiSrc = require('../../images/statelessApi.png');

export default React.createClass({
  render() {
    return (
      <div>
        <h1>PropTypes are the API</h1>

        <p>Remove state and public mutating methods (like 'toggle').</p>

        <img src={ statelessApiSrc } />
      </div>
    );
  }
});