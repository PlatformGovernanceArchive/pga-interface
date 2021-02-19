import React from "react";

import { DataContext } from "../../contexts/dataContext";
import Timeline from "./timeline";

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default props => (
  <DataContext.Consumer>
    {({ platforms }) => (
      <Timeline
        platforms={platforms}
        {...props}
      />
    )}
  </DataContext.Consumer>
);
