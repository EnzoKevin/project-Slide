import { Link } from "react-router-dom";

import "./tables.css";

export default (props) => {
  return (
    <section className="grid_tables-item">
      <div className="orange_ball">
        <span className={`background_animation icon lr ${props.icon}`}></span>
      </div>

      <div className="table_inside_content">
        <Link className="table_a_title" to={props.link}>
          {props.title}
        </Link>
        <p>{props.text}</p>
      </div>
    </section>
  );
};
