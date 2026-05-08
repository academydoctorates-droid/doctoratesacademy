import axios from "axios";
import Header from "../components/header";
import { BASE_ASSET_URL } from "../utils";
import CustomHeader from "../components/mobileHeader";
import Accordion from "../components/acordian";
import { Footer } from "../components/Footer";
import Link from "next/link";

const getMembersData = async () => {
  const res = await axios.get(`${BASE_ASSET_URL}/volunteers`);
  return res.data;
};

// Function to sort members by year (desc) and sequence (asc)
const sortMembers = (members) => {
  return members.sort((a, b) => {
    // Extract year and sequence from member_id (format: V-YY-XXXX)
    const extractYearAndSequence = (memberId) => {
      if (!memberId) return { year: 0, sequence: 0 };

      const parts = memberId.split('-');
      if (parts.length >= 3) {
        const year = parseInt(parts[1], 10);      // e.g., 24 or 25
        const sequence = parseInt(parts[2], 10);  // e.g., 0001
        return { year, sequence };
      }
      return { year: 0, sequence: 0 };
    };

    const aData = extractYearAndSequence(a.member_id);
    const bData = extractYearAndSequence(b.member_id);

    // First sort by year (ascending)
    if (aData.year !== bData.year) {
      return aData.year - bData.year;
    }

    // Then sort by sequence (ascending)
    return aData.sequence - bData.sequence;
  });
};

const page = async () => {
  const membersData = await getMembersData();
  const members = sortMembers(membersData); // Sort the members

  return (
    <>
      {/* Hello world */}
      {/* <Header /> */}
      <div className="header-container">
        <Header />
      </div>
      <div className="mobile-header-container">
        <CustomHeader />
      </div>

      <div>
        <div className="top_banner margin_adjust2">
          <div className="top_banner_pic">
            <img
              src="images/S-01/Pix (40).JPG"
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
                          <span>Volunteer</span>
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
                  The "Global Academy of Doctorates" is an International
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
            <div className="member-card-container row col-md-8">
              {members.map((item) => (
                <div className="col-12 mt-3" key={item._id}>
                  <div className="card member-card">
                    <div className="card-horizontal">
                      <div
                        className="img-square-wrapper"
                        style={{ padding: 7 }}
                      >
                        {item.profileImage.filename ? (
                          <img
                            alt="Card image cap "
                            className="volunteer-img"
                            // style={{
                            //   width: "15%",
                            //   maxWidth: "40px",
                            //   minWidth: "40px",
                            //   borderRadius: "100%",
                            // }}
                            src={`${BASE_ASSET_URL}/${item.profileImage.filename}`}
                          />
                        ) : (
                          <img
                            alt="Card image cap "
                            className="member-img"
                            src={"images/dummy-image.jpg"}
                          />
                        )}
                      </div>
                      <div className="card-body">
                        <Link href={`volunteerProfile/${item._id}`}>
                          <h4 className="card-title">
                            {item.member_id} | {item.firstName}{" "}
                            {item.middleName} {item.familyName}
                          </h4>
                        </Link>
                        <p className="card-text">
                          {item.designation && `${item.designation} |`}{" "}
                          {item.affilation}
                        </p>

                      </div>


                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-md-5">{/* <Accordion></Accordion> */}</div>
            <div></div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default page;