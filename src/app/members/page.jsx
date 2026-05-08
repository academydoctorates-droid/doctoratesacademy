import axios from "axios";
import Header from "../components/header";
import { API_PATHS, BASE_ASSET_URL, getImageUrl } from "../utils";
import CustomHeader from "../components/mobileHeader";
import Accordion from "../components/acordian";
import { Footer } from "../components/Footer";
import Link from "next/link";

const getMembersData = async () => {
  const res = await axios.get(API_PATHS.GET_Members);
  return res.data;
};

const page = async () => {
  const members = await getMembersData();

  // Define the order of prefixes for member_id
  const prefixOrder = [
    "HM",
    "FM",
    "LMI",
    "LMF",
    "ASI",
    "ASF",
    "IMI",
    "IMF",
    "CMI",
    "CMF",
    "AMI",
    "AMF",
  ];

  // Sort members based on member_id prefix
  // Updated sorting logic for members
  const sortedMembers = members.sort((a, b) => {
    // Find prefix index for both members
    const prefixA = prefixOrder.findIndex((prefix) => a.member_id.startsWith(prefix));
    const prefixB = prefixOrder.findIndex((prefix) => b.member_id.startsWith(prefix));

    // If prefixes are different, sort by prefix order
    if (prefixA !== prefixB) {
      return prefixA - prefixB;
    }

    // If prefixes are the same, sort by the numeric part
    // Extract numeric part from member_id (assuming format like "LMI-23-0006")
    const extractNumericPart = (memberId) => {
      // Split by '-' and get the last part, then convert to number
      const parts = memberId.split('-');
      const lastPart = parts[parts.length - 1];
      return parseInt(lastPart, 10) || 0;
    };

    const numericA = extractNumericPart(a.member_id);
    const numericB = extractNumericPart(b.member_id);

    return numericA - numericB;
  });
  return (
    <>
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
              src="images/wdd/2016/3.jpg"
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
                          <span>Members</span>
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="container-fluid">
            <div className="member-card-container row col-md-8">
              {sortedMembers.map((item) => (
                <div className="col-12 mt-3 " key={item._id}>
                  <div className="card member-card">
                    <div className="card-horizontal">
                      <div
                        className="img-square-wrapper"
                        style={{ padding: 7 }}
                      >
                        {item.profileImage.filename ? (
                          <img
                            alt="Card image cap"
                            className="member-img"
                            src={getImageUrl(item.profileImage)}
                          />
                        ) : (
                          <img
                            alt="Card image cap"
                            className="member-img"
                            src={"images/dummy-image.jpg"}
                          />
                        )}
                      </div>
                      <div className="card-body">
                        <Link href={`viewProfile/${item._id}`}>
                          <h4 className="card-title">
                            {item.member_id} | {item.title} {item.firstName}{" "}
                            {item.middleName} {item.familyName}
                          </h4>
                        </Link>
                        <p className="card-text">
                          {item.designation && `${item.designation} |`}{" "}
                          {item.Institution} | {item.Country}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-md-5">
              <Accordion />
              <div className="faq_box2">
                <div className="faq_upper">
                  <div className="row">
                    <h3>RIGHTS AND PRIVILEGES OF MEMBERS</h3>
                    <div className="clearfix" />
                  </div>
                </div>
                <div className="desc_box2">
                  <p>A Life Member is entitled for 50% reduction in registration fee of all Academy events. Every Corporate and Institutional Member shall have the right to nominate up to 5 representatives while becoming members who shall attend General Body Meetings and act on its behalf. The nominees shall not have voting rights and cannot hold any office of the Academy. Corporate members can change their representative by giving 3 months advance intimation to the Academy. Corporate and Institutional members may have access to database for nominating the experts specialists for consultancy and nomination for various committees and expert panels.</p>
                </div>
                <div className="clearfix"> </div>
              </div>
            </div>


          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default page;
