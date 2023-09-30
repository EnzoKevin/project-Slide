import React from "react";
import "./text.css";

export default (props) => {
  return (
    <div className="text_history">
      <div className="text_content">
        <h2 className="heading_decorated_history">{props.title}</h2>
        <h3 className="history_h3">{props.subtitle}</h3>
        <p>{props.text}</p>
        <a className="text_btn_history">READ MORE</a>
      </div>
      <img src={props.img} className="contain_img" />
    </div>
  );
};
