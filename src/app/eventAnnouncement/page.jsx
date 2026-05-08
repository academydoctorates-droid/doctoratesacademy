import axios from "axios";
import Header from "../components/header";
import { BASE_ASSET_URL, getImageUrl } from "../utils";
import date from "date-and-time";

const getEventData = async () => {
  const res = await axios.get(`${BASE_ASSET_URL}/post`);
  const eventData = res.data.filter((item) => item.type.name === "Event");
  return eventData
};
const page = async () => {
  const event = await getEventData();

  // function formatDate(dateString) {
  //   const date = new Date(dateString);

  //   // Get day, month, and year components
  //   const monthIndex = date.getUTCMonth();
  //   const year = date.getUTCFullYear();

  //   // Define an array of month names
  //   const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  //   // Format the date using the components
  //   const formattedDate = ${day}-${months[monthIndex]}-${year};

  //   return formattedDate;
  // }

  return (
    <>
      {/* Hello world */}
      <Header />
      <div>
        <div className="top_banner margin_adjust2">
          <div className="top_banner_pic">
            <img
              src="images/abt_bg1.jpg"
              className="img-responsive center-block mob_hidden"
              alt=""
            />
            <img
              src="images/abt_bg1.jpg"
              className="img-responsive center-block mob_pic1"
              alt=""
            />
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="fos_outer">
                    <div className="fos_text">
                      <div className="fos_padding">
                        <h1>
                          <span>Event Announcement</span>
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="history_wrap">
          <div className="container">
            <div className="row">
              <div className="col-md-12 service_heading">
                <h2>Members</h2>
                <p>
                  The “Global Academy of Doctorates” is an International
                  academic organization of accomplished people having highest
                  university degrees (Ph.D. or equivalent) in all fields of
                  studies. This Professional group was initially launched on
                  March 7, 2012 and currently enrolled more than 5000 members
                  from 55 countries. The main idea behind creation of this
                  Global Academy is to offer a global platform to all members to
                  share their experiences and to network as a powerful academic
                  body for social good. The Academy will also recognize its
                  members for their outstanding contributions in various fields
                  by nominating them as Fellows of the Academy. To earn a
                  doctorate is a matter of pride. All of You are great
                  achievers. You belong to an exclusive group of academicians
                  holding the highest university degree. One has to perform an
                  exciting journey in order to earn a doctorate. It may be
                  rough, bumpy, dark, lonely but at times thrilling and
                  rewarding. I feel that the Ph.D. is not merely a degree, but
                  it is a process that equips us with skills to deal gainfully
                  with difficult situations in life. Records show that the first
                  Ph.D. was awarded to a woman: Lady Elena Lucrezia
                  Cornaro-Piscopia of Italy in 1678. Evidence shows that even
                  before this Nalanda University in ancient India was awarding
                  doctorates degree in several subjects. Over centauries
                  millions of doctorates degrees have been awarded. On an
                  average about 45-50 thousand Ph.D.s are awarded in USA every
                  year. China also produces 50 thousand doctorates annually
                  whereas in India about 40 thousand obtain doctorates every
                  year. Today, at least 15-20 million doctorates live and work
                  in the world.
                </p>
              </div>
            </div>
          </div>
        </div> */}
        <div className="container">
          <div className="container-fluid">
            <div className="member-card-container row">
              {event.map((item) => (
                // console.log("item===>",item)
                <div className="col-12 mt-3">
                  <div className="card member-card">
                    <div className="card-horizontal">
                      <div
                        className="img-square-wrapper"
                        style={{ padding: 7 }}
                      >
                        {item.thumbnail_image ? (
                          <img
                            alt="Card image cap "
                            className="member-img"
                            src={getImageUrl(item.thumbnail_image)}
                          />
                        ) : (
                          <img
                            alt="Card image cap "
                            className="member-img"
                            src={"images/doc1.jpg"}
                          />
                        )}
                      </div>
                      <div className="card-body">
                        <h4 className="card-title">
                          {item.firstName} {item.lastName}
                        </h4>
                        <p className="card-text">
                          Short Description - {item.short_description}
                        </p>
                        <p className="card-text">
                         Description - {item.description}
                        </p>
                         
                          <p>
                            Start Date -{" "}
                            {date.format(
                              new Date(item.start_event_date),
                              "DD/MM/YYYY"
                            )}
                          </p>
                          <p>
                            End Date -{" "}
                            {date.format(
                              new Date(item.end_event_date),
                              "DD/MM/YYYY"
                            )}
                          </p>
                          
                        

                        
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
