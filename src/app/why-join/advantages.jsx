import React from "react";
import AdvantagesData from "./advantagesData";

const Advantages = () => {
  return (
    <div className="advantagesWhyjoin">
      <div className="container">
        <div className="row">
          <div className="col-md-12 core mt-2">
            <div className="heading2 wow zoomIn">
              <h2 style={{fontWeight:'bolder'}}>
                
                  Advantages to Academic Institutions to partner with{" "}
                  <span>GLOBAL ACADEMY OF DOCTORATES </span>
               
              </h2>
            </div>
            <p style={{ fontSize: "20px" }}>
              The decision for an academic institution to become a partner of
              the Global Academy of Doctorates and join as a member depends on
              several factors. Here are some potential reasons why an academic
              institution might consider such a partnership{" "}
            </p>
          </div>
          <div className="clearfix" />
          <AdvantagesData/>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
