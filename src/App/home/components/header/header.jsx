import React, { useState } from "react";
import "./header.css";

import Logo from "../images/logo-inverse-construction.png";
import { Nav } from "./navigation/navigate.tsx";

export const Header = ({ props }) => {
  const [Turn1, setTurn1] = useState(false);
  const [Turn2, setTurn2] = useState(false);
  const [Turn3, setTurn3] = useState(false);
  const [Turn4, setTurn4] = useState(false);
  const [Turn5, setTurn5] = useState(false);
  const [Turn6, setTurn6] = useState(false);
  const [Turn7, setTurn7] = useState(false);

  const [isOver, setOver] = useState(false);

  return (
    <header className="header">
      <nav className="navigation ">
        <div className="header_navigation_ul">
          <a href="" className="Logo">
            <img src={Logo} className="logo_header" />
          </a>
          <div className="navigation_header_ul_icon">
            <ul className="nav-list">
              <Nav title="HOME" link="/" />
              <Nav title="ABOUT" link="/about" />
              <Nav title="SERVICES" link="/services" />
              <Nav title="PROJECTS" link="/projects" />
              <Nav title="PAGES" link="/pages" />
              <Nav title="BLOG" link="/blog" />
              <Nav title="CONTACTS" link="/contacts" />
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
