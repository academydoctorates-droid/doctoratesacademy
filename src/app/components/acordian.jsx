"use client"
import React, { useState } from "react";

const Accordion = () => {
  const accordionData = [


    {
      title: "Honorary Members",
      content:
        "Distinguished scholars may be invited by the GB to join the academy as honorary members. The GB may decide to waive off the membership fee from Honorary Members. The GB may offer some special privileges to honorary members from time to time.",
    },
    {
      title: "Founder Members",
      content:
        "Doctorates who are associated with the GAD from inception and working with the President/Founder President will be enrolled as Founder members. They will not enjoy any special privileges but will have all powers and functions as other general life members.",
    },
    {
      title: "Life Member",
      content:
        "Individuals interested in the areas of activity of the Academy by practice or profession, who fulfil the qualifications laid down for Members are eligible to apply online or Life Membership. The detailed procedure and fee shall be prescribed through notification by the GB.",
    },
    {
      title: "Associate Member",
      content:
        "Research scholars pursuing doctrates degrees may register as Associate members which can be upgraded to full-life membership on completion of doctrates",
    },
    {
      title: "Annual Member",
      content:
        "Individuals interested in the areas of activity of the Academy by practice or profession, who fulfil the qualifications laid down for Members are eligible to apply online for Annual Membership. The detailed procedure and fee shall be prescribed through notification by the GB.",
    },

    {
      title: "Corporate Members",
      content:
        "Firms, Companies, Industries interested in or connected with the area of activity of the Academy shall be eligible to apply online for admission as Corporate Members. The detailed procedure and fee shall be prescribed through notification by the GB. The company may nominate up to 5 representatives to upload their credentials on the academy website but they will be treated as members without voting rights. The representatives of the companies cannot become an office-bearer of the Academy.",
    },

    {
      title: "Institutional Members",
      content:
        "Universities, educational institutions, Research Laboratories, Associations, Academies Institutions, NGOs interested in or connected with the area of activity of the Academy shall be eligible to apply online for admission as Institutional Members. The detailed procedure and fee shall be prescribed through notification by the GB.The institution may nominate up to 5 representatives to upload their credentials on the academy website but they will be treated as members without voting rights. The representatives of the institutions cannot become an office-bearer of the Academy.",
    },


    // {
    //     title: "RIGHTS AND PRIVILEGES OF MEMBERS",
    //     content:
    //       "•	A Life Member is entitled for 50% reduction in registration fee of all Academy events.Every Corporate and Institutional Member shall have the right to nominate up to 5 representatives while becoming members who shall attend General Body Meetings and act on its behalf. The nominees shall not have voting rights and cannot hold any office of the Academy. Corporate members can change their representative by giving 3 months advance intimation to the Academy. Corporate and Institutional members may have access to database for nominating the experts specialists for consultancy and nomination for various committees and expert panels.",
    // },

  ];

  const [openPanel, setOpenPanel] = useState(null);

  const togglePanel = (index) => {
    setOpenPanel((prevOpenPanel) => (prevOpenPanel === index ? null : index));
  };

  return (
    <>

      <div className="faq_box2">
        <div className="faq_upper">
          <div className="row">
            <div className="col-xs-6">
              <h2>TYPES OF MEMBERS</h2>{" "}
            </div>
            <div className="col-xs-6 view">
              {" "}
              {/* <a href="#" className="btn btn_new2">
              View All
            </a>{" "} */}
            </div>
            <div className="clearfix" />
          </div>
        </div>
        <div className="desc_box2">
          {accordionData.map((item, index) => (
            <div className="accordian_content" key={index}>
              <button
                className={`accordion ${openPanel === index ? "active" : ""
                  }`}
                onClick={() => togglePanel(index)}
              >
                <span>
                  <div className="faq_num">{index + 1}</div> {item.title}
                </span>
              </button>
              <div
                className={`panel3 ${openPanel === index ? "show" : ""}`}
              >
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="clearfix"> </div>
      </div>
    </>
  );
};

export default Accordion;
