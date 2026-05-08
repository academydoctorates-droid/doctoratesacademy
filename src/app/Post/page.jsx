"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/header";
import { BASE_ASSET_URL, getImageUrl } from "../utils";
import CustomHeader from "../components/mobileHeader";

const Page = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPostData = async () => {
      try {
        const res = await axios.get(`${BASE_ASSET_URL}/post`);
        const postData = res.data.filter((item) => item.type.name === "Post");
        setPost(postData);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    getPostData();
  }, []);

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
              src="images/about-us-header.jpg"
              className="img-responsive center-block mob_hidden"
              alt=""
            />
            <img
              src="images/about-us-header.jpg"
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
                          <span>Post</span>
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
            {loading ? (
              <div style={{ textAlign: "center", padding: "50px" }}>
                <p>Loading posts...</p>
              </div>
            ) : (
              <div className="member-card-container row">
                {post.map((item) => (
                  <div className="col-12 mt-3" key={item._id}>
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
                          
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
