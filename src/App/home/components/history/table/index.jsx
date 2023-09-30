import React from "react";
import "./index.css";
import Tables from "./tableComponents/tables";

export default (props) => {
  return (
    <section>
      <div className="table_section">
        <img src="" alt="" />
        <h2 className="heading_decorated">OUR SERVICES</h2>
        <div className="grid_tables">
          <Tables
            img={"./images/obra.jpeg"}
            title={"PRE-CONSTRUCTION SERVICES"}
            text={
              "We take our time on initial planning before any construction begins, to balance all the financial and efficiency issues beforehand"
            }
            icon={"lnr-pencil"}
            link={"/"}
          />
          <Tables
            img={"./images/obra.jpeg"}
            title={`GENERAL CONTRACTING`}
            text={`We have a long list of professional contractors, whom our engineers and architects enjoy to work with on a majority of our projects!`}
            icon={"lnr-users"}
            link={"/"}
          />
          <Tables
            img={"./images/obra.jpeg"}
            title={"CONSTRUCTION SERVICES"}
            text={`Our customers love the pace/quality tempo that we show during each of the principal construction processes!`}
            icon={"lnr-briefcase"}
            link={"/"}
          />
          <Tables
            img={"./images/obra.jpeg"}
            title={"CONSTRUCTION MANAGEMENT"}
            text={`Construction project management is essential. We're using the most time and iterations efficient life cycles methods for that.`}
            icon={"lnr-apartment"}
            link={"/"}
          />
          <Tables
            img={"./images/obra.jpeg"}
            title={"BUILDING INFORMATION MODELING (BIM)"}
            text={`Oftentimes physical and functional essence of any construction project needs to be represented digitally, in a 3D model format.`}
            icon={"lnr-home"}
            link={"/"}
          />
          <Tables
            img={"./images/obra.jpeg"}
            title={"DESIGN-BUILD"}
            text={`If a project is not too complex, we may hire a designer-builder type of contractor, to make the longevity of the construction shorter`}
            icon={"lnr-pencil"}
            link={"/"}
          />
        </div>
      </div>
    </section>
  );
};
