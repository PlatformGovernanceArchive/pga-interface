import React from "react";

import { DataContext } from "../../contexts/dataContext";
import Document from "./document";


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
