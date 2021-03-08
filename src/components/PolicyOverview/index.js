import React from 'react';

import { DataContext } from '../../contexts/dataContext';
import PolicyOverview from './policyOverview';

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default props => (
  <DataContext.Consumer>
    {({ platforms }) => (
      <PolicyOverview
        platforms={platforms}
        {...props}
      />
    )}
  </DataContext.Consumer>
);
