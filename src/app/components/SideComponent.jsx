"use client";
import { useEffect, useState } from "react";
import MembersCarousel from "./memberscarousel";
import GalleryCarousel from "./gallerycarousel";
import { BASE_ASSET_URL } from "../utils";
import date from "date-and-time";
import OpinionModal from "./OpinionModal";
import { IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import Polls from "./Polls";
import Link from "next/link";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

const SideComponent = ({ faqdata, allEvents }) => {
  const [activeTab, setActiveTab] = useState("event");
  const [openPanel, setOpenPanel] = useState(null);
  const [events, setEvents] = useState([]);
  const [post, setPost] = useState([]);
  const [opinion, setOpinion] = useState([]);
  const [notification, setNotification] = useState([]);
  const [polls, setPolls] = useState([]);
  const [modalOpinionText, setModalOpinionText] = useState("");
  const [pollsArray, setPollsArray] = useState([]);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const handleOpenModal = () => {};

  useEffect(() => {
    const postData = allEvents.filter((item) => item.type.name === "Post");
    const eventData = allEvents.filter((item) => item.type.name === "Event");
    const opinionData = allEvents.filter(
      (item) => item.type.name === "Opinion"
    );
    const notificationData = allEvents.filter(
      (item) => item.type.name === "Notification"
    );
    const pollData = allEvents.filter((item) => item.type.name === "Poll");
    console.log("pollData-->", pollData);
    const pollJSXList = pollData.map((item) => {
      const options = item.polls.options.map((option, index) => ({
        id: index,
        text: option,
        votes: item.polls.votes[option] || 0,
      }));
      return <Polls question={""} options={options} id={item._id} />;
    });

    setEvents([eventData[0]]);
    setPost([postData[0]]);
    setOpinion([opinionData[0]]);
    setNotification([notificationData[0]]);
    setPolls([pollData[0]]);
    setPollsArray([pollJSXList[0]]);
  }, []);

  const togglePanel = (index) => {
    setOpenPanel((prevOpenPanel) => (prevOpenPanel === index ? null : index));
  };
  return (
        <div className="">
          <div className="right_title">
            <h3>Recent 10 Members</h3>
          </div>
          <MembersCarousel />
        
          <div className="faq_box">
            <div style={{display:'flex', alignItems:'center'}}>
             <div className="col-xs-6">
                <h2>FAQ</h2>{" "}
              </div>
              <div className="col-xs-6 view">
                {" "}
                <a href="/faq" className="btn btn_new2">
                  View All
                </a>{" "}
              </div>
              </div>
            <div className="desc_box">
            {faqdata && faqdata.slice(0, 4).map((faq, index) => (
                  <div key={index}>
                    <button
                      className={`accordion ${
                        openPanel === index ? "active" : ""
                      }`}
                      onClick={() => togglePanel(index)}
                    >
                      <span>
                        <div className="faq_num ">{index + 1}</div> {faq.title}{" "}
                        <i>+</i>
                      </span>
                    </button>
                    <div
                      className="panel2"
                      style={{
                        maxHeight: openPanel === index ? "1000px" : "0", // Adjust the max height as needed
                        overflow: "hidden",
                        transition: "max-height 0.2s ease-out",
                      }}
                    >
                      <p>{faq.description}</p>
                    </div>
                  </div>
                  
              //     <Accordion>
              //   <AccordionSummary
              //     expandIcon={<ExpandMoreIcon />}
              //     aria-controls="panel1-content"
              //     id="panel1-header"
                  
              //   >
              //     <div className="faq_num" >{index + 1}</div> 
              //      {faq.title}
              //   </AccordionSummary>
              //   <AccordionDetails >
                 
              //   {faq.description}
              //   </AccordionDetails>
              // </Accordion>

                ))}
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
  );
};

export default SideComponent;
