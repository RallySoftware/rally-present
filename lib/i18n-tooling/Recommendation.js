import React from 'react';

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>Recommendation</h1>

        <ul>
          <li>Use language specific linters for validation
            <ul>
              <li>will require stories to write rules (i18n lint rulesets are not readily available)</li>
              <li>use I18nStudio regex ruleset as starting point</li>
              <li>open source our i18n rulesets, this is a great place to give back to the community</li>
            </ul>
          </li>
          <li>Assuming we outsource localization:
            <ul><li>don't bother with Globalyzer licenses</li></ul></li>
          <li>If we do localization ourselves:
            <ul><li>localization teams might want Globalyzer licenses</li></ul></li>
          <li>Use Lingoport Resource Manager for code->TM->translation pipeline
            <ul><li>dependent on me finishing evaluation</li></ul></li>
        </ul>

      </div>
    );
  }
}
