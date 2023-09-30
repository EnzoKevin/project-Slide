import React from "react";
import "./index.css";

import Img from "../../images/logo-inverse-construction.png";

export default (props) => {
  return (
    <section className="footer">
      <div className="footer_align">
        <div className="footer_column">
          <img src={Img} alt="" />
          <p>
            Construction's core values have been shaped over more than 10 years
            of delivering the finest construction services to our clients. They
            stood to the test of time and these principles remain our bedrock
            lynchpins. We never tried to cut on either quality, the pace of work
            or any other construction aspect. We stay true to our full promise
            of efficiency!
          </p>
        </div>
        <nav className="footer_nav_align">
          <h6 className="footer_h6">NAVIGATION</h6>
          <ul className="footer_ul">
            <li>
              <a href="" className="footer_list_a">
                Industry News
              </a>
            </li>
            <li className="margin_top-10">
              <a href="" className="footer_list_a">
                Projects in Development
              </a>
            </li>
            <li className="margin_top-10">
              <a href="" className="footer_list_a">
                Our Services
              </a>
            </li>
            <li className="margin_top-10">
              <a href="" className="footer_list_a">
                Contacts
              </a>
            </li>
          </ul>
        </nav>
        <div className="footer_coments">
          <h6 className="footer_h6">RECENT COMMENTS</h6>
          <p className="minimal_p minimal_adjust">Brian Williamson on</p>
          <p className="comment_text">
            <a href="" className="footer_comments_ul">
              Construction's core values have been shaped over more than 10
              years of
            </a>
          </p>
          <p className="minimal_p minimal_adjust">Brian Williamson on</p>
          <p className="comment_text">
            <a href="" className="footer_comments_ul">
              Construction's core values have been shaped over more than 10
              years of
            </a>
          </p>
          <p className="minimal_p minimal_adjust">Brian Williamson on</p>
          <p className="comment_text">
            <a href="" className="footer_comments_ul">
              How to save 10 grand a year with digital blueprints
            </a>
          </p>
        </div>
        <div className="footer_contacts">
          <h6 className="footer_h6">CONTACT</h6>
          <p className="minimal_p">
            Address 4578 Marmora Road, Glasgow, D04 89GR
          </p>
          <div className="footer_number">
            <ul className="footer_phone_ul">
              <li className="minimal_p Phone">Phones: </li>
              <li className="footer_li_number">
                <a href="" className="transition_orange">
                  (800) 123-0045
                </a>
              </li>
              <li className="footer_li_number point_before">
                <a href="" className="transition_orange">
                  (800) 123-0045
                </a>
              </li>
            </ul>
          </div>
          <p className="minimal_p">
            E-mail:
            <a href="" className="footer_list_a normal">
              info@demolink.org
            </a>
          </p>
          <p className="minimal_p">We are open Mn-Fr: 10 am-8 pm</p>
        </div>
      </div>
    </section>
  );
};
