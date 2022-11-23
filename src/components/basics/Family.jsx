import React, { cloneElement } from "react";

export default (props) => {
  return (
    <span>
      {React.Children.map(props.children, (child) => {
        return cloneElement(child, props);
      })}
    </span>
  );
};
