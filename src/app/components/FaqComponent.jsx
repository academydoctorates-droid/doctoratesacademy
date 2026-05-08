"use client";
import React from "react";

import { useState } from "react";

import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";


const FaqComponent = ({ faqData }) => {
  const [openPanel, setOpenPanel] = useState(null);

  const togglePanel = (index) => {
    setOpenPanel((prevOpenPanel) => (prevOpenPanel === index ? null : index));
  };

  return (
    <>
    {/* className="faq_box" */}
      <div style={{marginBottom:"10px"}} >
        <div className="desc_box">
          {faqData &&
            faqData.map((faq, index) => (
              // <div key={index} >
              //   <button
              //   style={{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",display:"flex",justifyContent:"space-between",padding:"9px",fontSize:"18px"}}
              //     className={`accordion ${
              //       openPanel === index ? "active" : ""
              //     }`}
              //     onClick={() => togglePanel(index)}
              //   >
              //     <span>
              //       <div className="faq_num ">{index + 1}</div> {faq.title}{" "}
              //       <i>+</i>
              //     </span>
              //   </button>
              //   <div
              //     className="panel2"
              //     style={{
              //       maxHeight: openPanel === index ? "1000px" : "0",
              //       overflow: "hidden",
              //       transition: "max-height 0.2s ease-out",
              //     }}
              //   >
              //     <p>{faq.description}</p>
              //   </div>
              // </div>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  style={{marginTop:"5px",fontSize:"18px"}}
                >
                  <div className="faq_num ">{index + 1}</div> 
                   {faq.title}
                </AccordionSummary>
                {/* <AccordionDetails style={{fontSize:"17px"}}>
                 
                {faq.description}
                </AccordionDetails> */}
          <AccordionDetails style={{ fontSize: "17px" }}>
  <div dangerouslySetInnerHTML={{ __html: faq.description }} style={{fontSize:"17px"}} />
</AccordionDetails>
              </Accordion>
            ))}
        </div>
        <div className="clearfix"> </div>
      </div>
    </>
  );
};

export default FaqComponent;
