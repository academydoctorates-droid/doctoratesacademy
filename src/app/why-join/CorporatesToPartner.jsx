import React from "react";
import CorporatesData from "./CorporatesData";

const Corporate = () => {
  return (
    <div className="benefits">
      <div className="container">
        <div className="row">
          <div className="col-md-12 core mt-2">
            <div className="heading2 wow zoomIn">
              <h2 style={{fontWeight:'bolder'}}>
                  Advantages to Corporates to partner with <span>GLOBAL ACADEMY OF DOCTORATES</span>
              </h2>
            </div>
            <p style={{ fontSize: "20px" }}>
              Corporates and industries might consider becoming partners of the
              Global Academy of Doctorates and joining as members for several
              reasons, depending on their specific goals and objectives. Here
              are some potential benefits:{" "}
            </p>
          </div>
          <div className="clearfix" />
          <CorporatesData />
        </div>
      </div>
    </div>
  );
};

export default Corporate;
