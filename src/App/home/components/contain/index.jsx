import React from "react";
import "./index.css";

import Text from "./content/text";
import img from "../images/home-history.jpg";

export default (props) => {
  return (
    <section className="contain_comp">
      <Text
        title="OUR HISTORY"
        subtitle="OUR CONSTRUCTION COMPANY HAS BEEN FOUNDED 10 YEARS AGO, AT THE VERY PEAK OF THE BUILDING FRENZY IN THE US..."
        text="Since then we've built hundreds of commercial, government and private buildings and facilities. It may not sound like a lot, but if you estimate the manpower, working hours, materials, planning and correlating that were all involved in completing each separate project, then our productivity is immense!"
        img={img}
      />
    </section>
  );
};
