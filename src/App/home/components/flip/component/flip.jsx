import React from "react";
import "./flip.css";

export default (props) => {
  return (
    <div className="flip_box">
      <div className="flip_box_inner">
        <div className="flip_box_front">
          <div className="front_flip_align">
            <figure className="flip_figure">
              <img src={props.img} className="flip_img" />
            </figure>
            <div className="flip_title_align ">
              <h6>
                <a className="flip_title ">{props.name}</a>
              </h6>
            </div>
          </div>
        </div>
        <div className="flip_box_back">
          <figure className="flip_figure">
            <img src={props.img} className="flip_img2" />
          </figure>
          <div className="flip_text_align">
            <a href={props.link == "" ? "0" : "/"} className="flip_link ">
              {props.a}
            </a>
            <div className="flip_align_p">
              <p className="flip_p ">{props.text}</p>
              <button className="flip_btn_link">
                <a href="0">VIEW PROJECTS</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
