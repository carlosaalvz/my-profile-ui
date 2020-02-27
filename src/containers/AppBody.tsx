import React from "react";
import "./AppBody.scss";

interface BodyProps {
  title1:String;
  title2:String;
  description:String
}

const AppBody: React.FC<BodyProps> = props => (
    <div className="body-content">
      <div className="title1">{props.title1}</div>
      <div className="title2">{props.title2}</div>
      <div className="description">{props.description}</div>
    </div>
);

export default AppBody;