import React from "react";
import "./column.css";

export default (props) => {
  return (
    <section className={`column_elements ${props.top}`}>
      <figure className="column_img_align">
        <img className="column_img" src={props.img} alt="" />
      </figure>

      <div className="text_column_align">
        <h6 className="column_h6">
          <a className="column_a">{props.title}</a>
        </h6>
        <div className="inline_column">
          <time dateTime="2023">
            <a href="" className="column_a_inverted">
              {props.a}
            </a>
          </time>
          <a href={props.link} className="column_link">
            <cite className="column_cite">{props.cite}</cite>
          </a>
        </div>

        <p className="column_text">{props.text}</p>
      </div>
    </section>
  );
};
