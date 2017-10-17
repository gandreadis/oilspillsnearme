import React from 'react';
import "./Footer.css";

const ContentSection = ({title, backgroundColor, color, children}) => (
  <div style={{backgroundColor, color}}>
    <div className="container pb-5 pt-5">
      <h3 className="text-center mb-3">
        {title}
      </h3>
      {children}
    </div>
  </div>
);

ContentSection.defaultProps = {
  color: "#111111",
  backgroundColor: "#ededed",
};

export default ContentSection;
