/* eslint-disable react/jsx-key */

"use client";
import { useEffect, useState } from "react";
import MembersCarousel from "./memberscarousel";
import GalleryCarousel from "./gallerycarousel";
import { BASE_ASSET_URL, getImageUrl } from "../utils";
import date from "date-and-time";
import OpinionModal from "./OpinionModal";
import { IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import Polls from "./Polls";
import Link from "next/link";
import axios from "axios";
import { API_PATHS } from "../utils";

const Events = ({ faqdata }) => {
  const [activeTab, setActiveTab] = useState("event");
  const [openPanel, setOpenPanel] = useState(null);
  const [events, setEvents] = useState([]);
  const [post, setPost] = useState([]);
  const [opinion, setOpinion] = useState([]);
  const [notification, setNotification] = useState([]);
  const [polls, setPolls] = useState([]);
  const [modalOpinionText, setModalOpinionText] = useState("");
  const [pollsArray, setPollsArray] = useState([]);
  const [tokenId, setTokenId] = useState("");
  const [allEvents, setAllEvents] = useState([]);
  
  const getEventsData = async () => {
    const response = await axios.get(API_PATHS.GET_Posts);
    const data = response.data;
    return data;
  };

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const handleOpenModal = () => {};

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        setTokenId(token);
        
        const eventsData = await getEventsData();
        setAllEvents(eventsData);

        const postData = eventsData.filter((item) => item.type.name === "Post");
        const eventData = eventsData.filter((item) => item.type.name === "Event");
        const opinionData = eventsData.filter(
          (item) => item.type.name === "Opinion"
        );
        const notificationData = eventsData.filter(
          (item) => item.type.name === "Notification"
        );
        const pollData = eventsData.filter((item) => item.type.name === "Poll");
        
        console.log("pollData-->", opinionData);
        const pollJSXList = pollData.map((item) => {
          const options = item.polls.options.map((option, index) => ({
            id: index,
            text: option,
            votes: item.polls.votes[option] || 0,
          }));
          return (
            <Polls question={item.polls.question} options={options} id={item._id} />
          );
        });

        setEvents(eventData.slice(0, 2)); // Set the first two events
        setPost([postData[0]]);
        setOpinion([opinionData[0]]);
        setNotification([notificationData[0]]);
        setPolls([pollData[0]]);
        setPollsArray([pollJSXList[0]]);
      } catch (error) {
        console.error("Error fetching events data:", error);
      }
    };

    fetchData();
  }, []);

  const togglePanel = (index) => {
    setOpenPanel((prevOpenPanel) => (prevOpenPanel === index ? null : index));
  };
  return (
    <div className="col-md-12">
      <div className="info_bottom2">
        <ul className="nav nav-tabs">
          <li
            className={activeTab === "post" ? "active" : ""}
            style={{ cursor: "pointer" }}
          >
            <a data-toggle="tab" onClick={() => handleTabClick("post")}>
              Post
            </a>
          </li>
          <li
            className={activeTab === "event" ? "active" : ""}
            style={{ cursor: "pointer" }}
          >
            <a data-toggle="tab" onClick={() => handleTabClick("event")}>
              Event Announcement
            </a>
          </li>

          {tokenId ? (
            <>
              {" "}
              <li
                className={activeTab === "opinion" ? "active" : ""}
                style={{ cursor: "pointer" }}
              >
                <a data-toggle="tab" onClick={() => handleTabClick("opinion")}>
                  Opinion
                </a>
              </li>
              <li
                className={activeTab === "polls" ? "active" : ""}
                style={{ cursor: "pointer" }}
              >
                <a data-toggle="tab" onClick={() => handleTabClick("polls")}>
                  Polls
                </a>
              </li>
              <li
                className={activeTab === "notification" ? "active" : ""}
                style={{ cursor: "pointer" }}
              >
                <a
                  data-toggle="tab"
                  onClick={() => handleTabClick("notification")}
                >
                  Notifications
                </a>
              </li>
            </>
          ) : (
            ""
          )}
        </ul>
        <div className="tab-content">
          <div
            id="event"
            className={`tab-pane fade ${
              activeTab === "event" ? "in active" : ""
            }`}
          >
            <div className="blue_box">
              {events.length === 0 ? ( // Check if events array is empty
                <div
                  className="no-events-message"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "200px",
                  }}
                >
                  <div
                    style={{
                      // backgroundColor: '#2C3E50', // Background color
                      color: "#ECF0F1", // Text color
                      borderRadius: "8px", // Rounded corners
                      padding: "20px", // Padding
                      // boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', // Shadow effect
                      textAlign: "center", // Center text
                      maxWidth: "400px", // Max width for the message
                    }}
                  >
                    <h5 style={{ margin: 0 }}>No Events Available</h5>
                    <p style={{ marginTop: "10px" }}>
                      We currently have no events scheduled at this time. Please
                      check back later.
                    </p>
                  </div>
                </div>
              ) : (
                events.map((event) => (
                  <div key={event._id}>
                    <div
                      style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      <Link
                        href="/postDetails/[type]"
                        as={`/postDetails/${event._id}`}
                        className="btn btn_new2"
                      >
                        View All
                      </Link>
                    </div>

                    <div className="blue_item_wrap">
                      <div className="blue_left flex-child">
                        <img
                          src={getImageUrl(event.thumbnail_image)}
                          className="img-responsive"
                          alt=""
                        />
                      </div>
                      <div className="blue_right flex-child-1">
                        <h5>{event.short_description}</h5>
                        <h6   dangerouslySetInnerHTML={{
    __html: event.description.replace(
      /(https?:\/\/[^\s]+)/g,
      '<a href="$1" style="color:white;text-decoration:underline" target="_blank" rel="noopener noreferrer">$1</a>'
    ),
  }}>
                          
                        </h6>
                        <h6>
                          Start Date -{" "}
                          {date.format(
                            new Date(event.start_event_date),
                            "DD/MM/YYYY hh:mm A"
                          )}
                        </h6>
                        <h6>
                          End Date -{" "}
                          {date.format(
                            new Date(event.end_event_date),
                            "DD/MM/YYYY hh:mm A"
                          )}
                        </h6>
                        <div className="clearfix" />
                        <Link
                          href="/postDetails/[type]"
                          as={`/postDetails/${event._id}`}
                          className="btn btn_new1"
                        >
                          Read More
                        </Link>
                        {event._id === "669a436ccd3875fd5587eb46" ? (
  <>
    <a
      href="https://forms.gle/q9C1gJ3tbJFiCLV6A"
      className="btn btn_new1"
    >
      Registration
    </a>
    <a
      href="https://teams.microsoft.com/l/meetup-join/19%3ameetingY2VmNDQ40TUtNTQONIO0ODUZLWJmMTMtZjcyMWYyZGU4NzNi%40thread.v2/0?context=%7b%22Tid%22%3a%224416fbbc-f572-4061-bd15-ed0649903fa5%22%2c%220id%22%3a%22a72d729c-6cd3-4e82-bc21-6307c8e53688%22%7d"
      className="btn btn_new1"
    >
      Join Meeting
    </a>
  </>
) : (
  // Only show registration button if event hasn't started yet
  new Date(event.start_event_date) > new Date() && (
    <Link
      href={`/EventForm?id=${event._id}&name=${event.short_description}`}
      className="btn btn_new1"
    >
      Registration
    </Link>
  )
)}
                      </div>
                    </div>
                    <div className="clearfix" />
                  </div>
                ))
              )}
            </div>

            <div className="clearfix" />
          </div>
          <div
            id="opinion"
            className={`tab-pane fade ${
              activeTab === "opinion" ? "in active" : ""
            }`}
          >
            <div className="blue_box">
              {opinion.length > 0 ? (
                opinion.map((opinion) => (
                  <div key={opinion?._id}>
                    <div
                      style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      {/* <a href="javascript" className="btn btn_new2">
                        View All
                      </a> */}
                    </div>

                    <div className="blue_item_wrap">
                      <div className="blue_left flex-child">
                        <img
                          src={getImageUrl(opinion?.thumbnail_image)}
                          className="img-responsive"
                          alt=""
                        />
                      </div>
                      <div className="blue_right flex-child-1">
                        <h5>{opinion?.short_description}</h5>
                        <h6>{opinion?.description}</h6>
                        <h6>Poll Question: {opinion?.polls?.question}</h6>
                        <ul>
                          {opinion?.polls?.options?.map((option, index) => (
                            <li key={index}>
                              Option {index + 1}: {option} - Votes:{" "}
                              {opinion.polls.votes[option] || 0}
                            </li>
                          ))}
                        </ul>
                        <h6>
                          Poll Expiry Date -{" "}
                          {date.format(
                            new Date(opinion?.polls?.expire_on),
                            "DD/MM/YYYY"
                          )}
                        </h6>
                        <div className="clearfix" />
                        <Link
                          href="/pollDetails/[id]"
                          as={`/pollDetails/${opinion?._id}`}
                          className="btn btn_new1"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                    <div className="clearfix" />
                  </div>
                ))
              ) : (
                <div>No opinions available at the moment.</div>
              )}
            </div>

            <div className="clearfix" />
          </div>

          <div
            id="post"
            className={`tab-pane fade ${
              activeTab === "post" ? "in active" : ""
            }`}
          >
            <div className="blue_box">
              {post.map((event) => (
                <div>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    {" "}
                    <a href="/Post" className="btn btn_new2">
                      View All
                    </a>{" "}
                  </div>
                  <div className="blue_item_wrap">
                    <div className="blue_left flex-child">
                      {" "}
                      <img
                        src={getImageUrl(event?.thumbnail_image)}
                        className="img-responsive"
                        alt=""
                      />{" "}
                    </div>
                    <div className="blue_right flex-child-1">
                      <h5>{event?.short_description}</h5>
                      <h6>{event?.description}</h6>
                      <div className="clearfix" />{" "}
                      <Link
                        href="/postDetails/[type]"
                        as={`/postDetails/${event?._id}`}
                        className="btn btn_new1"
                      >
                        Read More
                      </Link>{" "}
                    </div>
                  </div>
                  <div className="clearfix" />
                </div>
              ))}
            </div>
            <div className="clearfix" />
          </div>
          <div
            id="notification"
            className={`tab-pane fade ${
              activeTab === "notification" ? "in active" : ""
            }`}
          >
            <div className="blue_box">
              {notification.map((event) => (
                <div>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    {" "}
                    <a href="/notifications" className="btn btn_new2">
                      View All
                    </a>{" "}
                  </div>

                  <div className="blue_item_wrap">
                    <div
                      className="blue_left flex-child"
                      style={{ position: "relative" }}
                    >
                      {" "}
                      {event?.thumbnail_image ? (
                        <img
                          src={getImageUrl(event.thumbnail_image)}
                          className="img-responsive"
                          alt=""
                        />
                      ) : (
                        <img
                          src={"images/GAD Logo.png"}
                          className="img-responsive"
                          alt=""
                        />
                      )}{" "}
                    </div>
                    <div className="blue_right flex-child-1">
                      <div style={{ display: "flex" }}>
                        <IconButton>
                          <NotificationsIcon
                            sx={{ fontSize: 18, color: "#ffffff" }}
                          />
                        </IconButton>
                        <h5>{event?.short_description}</h5>
                      </div>
                      <h6>{event?.description}</h6>
                      <div className="clearfix" />{" "}
                      {/* <a href="#" className="btn btn_new1">
                            Read More
                          </a>{" "} */}
                    </div>
                  </div>
                  <div className="clearfix" />
                </div>
              ))}

              <div className="clearfix" />
            </div>
            <div className="clearfix" />
          </div>
          <div
            id="polls"
            className={`tab-pane fade ${
              activeTab === "polls" ? "in active" : ""
            }`}
          >
            <div className="blue_box">
              {polls.map((event) => (
                <div>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    {" "}
                    <a href="/polls" className="btn btn_new2">
                      View All
                    </a>{" "}
                  </div>
                  <div className="blue_item_wrap">
                    <div className="blue_left flex-child">
                      {" "}
                      <img
                        src={getImageUrl(event?.thumbnail_image)}
                        className="img-responsive"
                        alt=""
                      />{" "}
                    </div>
                    <div
                      className="blue_right flex-child-1"
                      style={{ width: "50%" }}
                    >
                      <h5>{event?.short_description}</h5>
                      <p
                        style={{
                          fontSize: "2rem",
                          marginBottom: 15,
                          paddingBottom: 0,
                        }}
                      >
                        {event?.polls.question}
                      </p>
                      <div>
                        {/* <p>{event.polls.question}</p>
                            {event.polls.options.map((option) => (
                              <>
                                <input
                                  type="radio"
                                  id={option}
                                  value={option}
                                />
                                  <label htmlFor={option}>{option}</label>
                                <br></br>
                              </>
                              
                            ))} */}
                        {pollsArray}
                      </div>
                      <h6>
                        Valid till -{" "}
                        {date.format(
                          new Date(event?.polls.expire_on),
                          "DD/MM/YYYY"
                        )}
                      </h6>
                      <div className="clearfix" />{" "}
                      <Link
                        href="/postDetails/[type]"
                        as={`/postDetails/${event?._id}`}
                        className="btn btn_new1"
                      >
                        Read More
                      </Link>{" "}
                    </div>
                  </div>
                  <div className="clearfix" />
                </div>
              ))}

              <div className="clearfix" />
            </div>
            <div className="clearfix" />
          </div>
        </div>
      </div>
      {/* <div className="gda_gallery">
            <div className="row">
              <div className="col-xs-6">
                <h2>GAD Gallery</h2>{" "}
              </div>
              <div className="col-xs-6 view">
                {" "}
                <a href="#" className="btn btn_new2">
                  View All
                </a>{" "}
              </div>
              <div className="clearfix" />
            </div>
            <div className="clearfix" />
            <div className="gallery_outer">
              <GalleryCarousel></GalleryCarousel>
            </div>
          </div> */}
    </div>
  );
};

export default Events;
