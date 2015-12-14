import React from 'react';

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>Validation</h1>

        <ul>
          <li>don't allow i18n violations to be committed</li>
          <li>turn light red when code touched by commit is in violation</li>
          <li>runs via command line in desktop and CI environments</li>
          <li>needs to be fast</li>
          <li>prefer AST inspection over regexes and prefer rules in SCM</li>
        </ul>

      </div>
    );
  }
}
