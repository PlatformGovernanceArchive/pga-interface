import React from "react";

import { DataContext } from "../../contexts/dataContext";
import Timeline from "./timeline";


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
