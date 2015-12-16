import React from 'react';

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>Linters</h1>

        <p>eslint (javascript), checkstyle (java), htmllint (html, jsp, tag), eastwood (clojure)</p>

          <ul>
            <li>
            Pros:
              <ul>
                <li>great command line support</li>
                <li>rules written as code and stored in SCM</li>
                <li>fast</li>
                <li>active open source communities</li>
                <li>IDE integrations (quality varies)</li>
              </ul>
            </li>
          </ul>

        <ul>
          <li>
          Cons:
            <ul>
              <li>different tool for each language</li>
              <li>no localization automation</li>
              <li>no existing i18n rulesets</li>
            </ul>
          </li>
        </ul>

      </div>
    );
  }
}
