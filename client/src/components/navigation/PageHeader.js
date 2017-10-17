import React from 'react';
import "./Footer.css";

const PageHeader = ({children}) => (
  <div style={{backgroundColor: "#4C714E", color: "#EEEEEE"}}>
    <div className="container">
      <div className="display-4 pb-5 pt-5 text-center">
        <strong>
          {children}
        </strong>
      </div>
    </div>
  </div>
);

export default PageHeader;
