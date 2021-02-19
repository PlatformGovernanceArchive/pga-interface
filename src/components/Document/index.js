import React from "react";

import { DataContext } from "../../contexts/dataContext";
import Document from "./document";

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default props => (
  <DataContext.Consumer>
    {({ platforms }) => (
      <Document
        platforms={platforms}
        {...props}
      />
    )}
  </DataContext.Consumer>
);
