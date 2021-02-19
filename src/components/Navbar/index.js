import React from "react";

import { DataContext } from "../../contexts/dataContext";
import Navbar from "./navbar";

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default props => (
  <DataContext.Consumer>
    {() => (
      <Navbar
        {...props}
      />
    )}
  </DataContext.Consumer>
);
