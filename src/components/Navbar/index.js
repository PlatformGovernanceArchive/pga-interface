import React from "react";

import { DataContext } from "../../contexts/dataContext";
import Navbar from "./navbar";


export default props => (
  <DataContext.Consumer>
    {() => (
      <Navbar
        {...props}
      />
    )}
  </DataContext.Consumer>
);
