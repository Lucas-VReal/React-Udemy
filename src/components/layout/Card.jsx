import React from "react";
import "./Card.css";

export default (props) => {
  const cardStyle = {
    backgroundColor: props.color || "red",
    borderColor: "white",
  };
  return (
    <div className="Card">
      <div className="title" style={cardStyle}>
        {props.title}
      </div>
      <div className="content">{props.children}</div>
    </div>
  );
};
