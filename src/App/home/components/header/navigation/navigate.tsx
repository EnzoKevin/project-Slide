import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Navi} from "./nav.types";

export  const Nav = ({link, title,}: Navi) => {

  const [up, setUp] = useState("down");

  
  return (
    <>
        <li className="home">
          <button className="nav-btn">
    <Link to={link} className="nav-Link">
            {title}
    </Link>
          </button>
        </li>
    </>
  );
};
