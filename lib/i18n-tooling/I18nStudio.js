import React from 'react';

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>I18n Studio</h1>

          <ul>
            <li>
            Pros:
              <ul>
                <li>CA product</li>
                <li>handles all steps: validation, localization, bundle management</li>
                <li>some localization automation</li>
                <li>pre-built rulesets</li>
              </ul>
            </li>
          </ul>

        <ul>
          <li>
          Cons:
            <ul>
              <li>command line doesn't work in OSX (this is a deal-breaker)</li>
              <li>rules are defined as regexes: difficult to maintain and slow</li>
              <li>no IDE integrations</li>
              <li>no github integrations</li>
            </ul>
          </li>
        </ul>

      </div>
    );
  }
}
