import React from "react";

import { DataContext } from "../../contexts/dataContext";
import Navigation from "./navigation";

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default props => (
  <DataContext.Consumer>
    {({ platforms }) => (
      <Navigation
        platforms={platforms}
        {...props}
      />
    )}
  </DataContext.Consumer>
);
