import react from "react";
import "./index.css";

import Flip from "./component/flip";
import content1 from "../images/project-1-480x361.jpg";
import content2 from "../images/project-2-480x361.jpg";
import content3 from "../images/project-3-480x361.jpg";
import content4 from "../images/project-4-480x361.jpg";
import content5 from "../images/project-5-480x361.jpg";
import content6 from "../images/project-6-480x361.jpg";
import content7 from "../images/project-7-480x361.jpg";
import content8 from "../images/project-8-480x361.jpg";

export default (props) => {
  return (
    <div className="grid_flip_align">
      <>
        <Flip
          a="commercial"
          name="commercial"
          text="Its probably the most diverse category of construction to work in. But weve got experience…"
          img={content1}
        />

        <Flip
          a="CULTURAL / LIFESTYLE"
          name="CULTURAL / LIFESTYLE"
          text="Working on a socially important building, such as a park involves additional landscape construction expertise.…"
          img={content2}
        />

        <Flip
          a="DATA / TECNOLOGY"
          name="DATA / TECNOLOGY"
          text="While building a headquarters building for an IT company is relatively easy, we’ve also…

          "
          img={content3}
        />

        <Flip
          a="EDUCATIONAL"
          name="EDUCATIONAL"
          text="Educational institutions can be much more creative than your regular school or a college campus!…

          "
          img={content4}
        />

        <Flip
          a="GOVERNMENT / MILITARY"
          name="GOVERNMENT / MILITARY"
          text="The US military and States governments used our expertise and manpower to build numerous military-grade…

          "
          img={content5}
        />

        <Flip
          a="HEALTHCARE"
          name="HEALTHCARE"
          text="We can build any type of healthcare buildings. From a small private medical clinic to…

          "
          img={content6}
        />

        <Flip
          a="MANUFACTURING / INDUSTRIAL"
          name="MANUFACTURING / INDUSTRIAL"
          text="Building a manufacturing facility or a factory house can be much more challenging than building…"
          img={content7}
        />
        <Flip
          a="WAREHOUES / LOGISTICS"
          name="WAREHOUES / LOGISTICS"
          text="While building a warehouse for an e-store is no easy feat itself, think about building…

          "
          img={content8}
        />
      </>
    </div>
  );
};
