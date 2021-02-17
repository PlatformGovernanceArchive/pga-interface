import React from 'react';

import { DataContext } from '../../contexts/dataContext';
import PolicyOverview from './policyOverview';


export default props => (
  <DataContext.Consumer>
    {({platforms}) => (
      <PolicyOverview
        platforms={platforms}
        {...props}
      />
    )}
  </DataContext.Consumer>
);
