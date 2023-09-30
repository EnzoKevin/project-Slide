import React from "react";
import "./index.css";

import Column from "./component/column";
import homeImg from "../images/home-post-1-418x315.jpg";
import homeImg2 from "../images/home-post-2-418x315.jpg";
import homeImg3 from "../images/home-post-3-418x315.jpg";

export default (props) => {
  return (
    <section className="section_column">
      <div className="container">
        <div className="columns_title_align">
          <h2 className="heading_decorated">RECENT NEWS</h2>
        </div>
        <div className="columns_align_below">
          <Column
            img={homeImg}
            title="FUTURE PROOFING HOSPITALS"
            link="/"
            a="21/02/2007"
            cite="by Brian Willianson"
            text="By improving the physical layout of hospitals and medical facilities, we can enhance and increase safety mechanisms, improve care, and… "
          />
          <Column
            img={homeImg2}
            title="BIKE PARTS WAREHOUSE, DE"
            link="/"
            a="jan.20, 2023"
            cite="by Brian Willianson"
            text="Delaware proved to be a very friendly place to work at… While invited there for completing a mid-sized warehouse for…"
          />
          <Column
            top="up_column"
            img={homeImg3}
            title="JOY HOTEL & CASINO"
            link="/"
            a="jan.20, 2022"
            cite="by Brian Willianson"
            text="This hotel & casino complex is our most recent completed building… The whole structure that took us 6 months to…

          "
          />
        </div>
      </div>
    </section>
  );
};
