import React from 'react';

import Intro from './Intro';
import Validation from './Validation';
import Localization from './Localization';
import Resource from './Resource';
import I18nStudio from './I18nStudio';
import Linters from './Linters';
import Globalyzer from './Globalyzer';
import LRM from './LRM';
import Recommendation from './Recommendation';

const slideComponents = [
  Intro,
  Validation,
  Localization,
  Resource,
  I18nStudio,
  Linters,
  Globalyzer,
  LRM,
  Recommendation
];

export default slideComponents.map((SlideComponent, idx) => {
  return <SlideComponent key={ idx } />;
});
