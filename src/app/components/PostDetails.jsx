"use client";
import React from 'react';
import { BASE_ASSET_URL, getImageUrl } from '../utils';
import date from 'date-and-time';
import PollsDetsilCommon from "../components/PollsDetsilCommon";
import { Tabs, Tab, CircularProgress } from "@mui/material";
import { useState } from 'react';

const PostDetails = ({ data }) => {
  // Ensure data is an array
  const posts = Array.isArray(data) ? data : [data];
  const [selectedTab, setSelectedTab] = useState("All");
  const [loading, setLoading] = useState(false); // You can set this based on your data fetching

  // Filter posts by type if needed (similar to publications)
  const filteredPosts = selectedTab === "All" ? posts : posts.filter((post) => post.type?.name === selectedTab);

  return (
    <div className="post-container">
      {loading ? (
        <div className="loading-container">
          <CircularProgress size={80} />
        </div>
      ) : (
        <>
          {/* Optional tabs if you have different post types */}
          {/* <div className="tabs-container">
            <Tabs 
              value={selectedTab} 
              onChange={(e, newValue) => setSelectedTab(newValue)} 
              variant="scrollable" 
              scrollButtons="auto"
            >
              {['All', 'Event', 'News', 'Poll'].map((type) => (
                <Tab key={type} label={type} value={type} />
              ))}
            </Tabs>
          </div> */}

          <div className="posts-grid">
            {filteredPosts.map((post) => (
              post.type?.name !== "Poll" ? (
                <div className="post-card" key={post._id}>
                  {/* Image Section */}
                  {post.featured_image && (
                    <div className="post-image-container">
                      <img
                        src={getImageUrl(post.featured_image)}
                        alt={post.short_description || "Post image"}
                        className="post-image"
                        loading="lazy"
                      />
                    </div>
                  )}

                  {/* Content Section */}
                  <div className="post-content">
                    <div className="post-header">
                      {post.type?.name && (
                        <span className="post-type">{post.type.name}</span>
                      )}
                      <h2 className="post-title">{post.short_description}</h2>
                    </div>

                    {post.start_event_date && post.end_event_date && (
  <p className="post-dates">
    {date.format(new Date(post.start_event_date), "DD/MM/YYYY hh:mm A")} - 
    {date.format(new Date(post.end_event_date), "DD/MM/YYYY hh:mm A")}
  </p>
)}

                    {post.description && (
                      <div className="post-description">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: post.description.replace(
                              /(https?:\/\/[^\s]+)/g,
                              '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>'
                            ),
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <PollsDetsilCommon poll={post} key={post._id} />
              )
            ))}
          </div>
        </>
      )}

      <style jsx>{`
        .loading-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          width: 100%;
        }

        .post-container {
          padding: 20px;
          max-width: 1200px;
          margin: 40px auto;
        }
        
        .tabs-container {
          margin-bottom: 30px;
        }
        
        .posts-grid {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
        
        .post-card {
          display: flex;
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .post-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
        }
        
        .post-image-container {
          flex: 0 0 300px;
          height: 300px;
          overflow: hidden;
        }
        
        .post-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .post-card:hover .post-image {
          transform: scale(1.05);
        }
        
        .post-content {
          flex: 1;
          padding: 25px;
          display: flex;
          flex-direction: column;
        }
        
        .post-header {
          margin-bottom: 15px;
        }
        
        .post-type {
          display: inline-block;
          background: #f0f0f0;
          color: #555;
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          margin-bottom: 10px;
        }
        
        .post-title {
          font-size: 22px;
          font-weight: 700;
          color: #333;
          margin: 0;
        }
        
        .post-dates {
          color: #666;
          margin-bottom: 15px;
          font-size: 14px;
        }
        
        .post-description {
          color: #666;
          line-height: 1.6;
          flex-grow: 1;
        }
        
        .post-description a {
          word-break: break-word;
          color: #008080;
          text-decoration: none;
        }
        
        .post-description a:hover {
          text-decoration: underline;
        }
        
        @media (max-width: 768px) {
          .post-card {
            flex-direction: column;
          }
          
          .post-image-container {
            flex: 0 0 200px;
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default PostDetails;