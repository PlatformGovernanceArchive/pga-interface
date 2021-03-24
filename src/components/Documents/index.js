import React from "react";

import { DataContext } from "../../contexts/dataContext";
import Documents from "./documents";

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default props => (
  <DataContext.Consumer>
    {({ platforms }) => (
      <Documents
        platforms={platforms}
        {...props}
      />
    )}
  </DataContext.Consumer>

);
