import React from 'react';

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>Lingoport Globalyzer</h1>

          <ul>
            <li>
            Pros:
              <ul>
                <li>automation for string extraction and issue ignoring</li>
                <li>pre-built rulesets for javascript, java, and html</li>
                <li>displays issues on webapp</li>
                <li>best tool for actual localization work</li>
              </ul>
            </li>
          </ul>

        <ul>
          <li>
          Cons:
            <ul>
              <li>command line not very flexible</li>
              <li>rules written as regexes and stored in DB on remote server</li>
              <li>scanning is slow (but optimized to only scan changed files)</li>
              <li>stand alone eclipse app, no other IDE integrations</li>
            </ul>
          </li>
        </ul>

      </div>
    );
  }
}
