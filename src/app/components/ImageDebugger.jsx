"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_ASSET_URL, getImageUrl } from "../utils";

const ImageDebugger = () => {
  const [memberData, setMemberData] = useState(null);
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    const fetchDebugData = async () => {
      try {
        // Fetch members
        const membersRes = await axios.get(`${BASE_ASSET_URL}/members`);
        if (membersRes.data && membersRes.data.length > 0) {
          setMemberData(membersRes.data[0]);
          console.log("🔍 MEMBER DATA:", membersRes.data[0]);
          console.log("🔍 MEMBER profileImage:", membersRes.data[0].profileImage);
        }

        // Fetch posts/events
        const postsRes = await axios.get(`${BASE_ASSET_URL}/post`);
        if (postsRes.data && postsRes.data.length > 0) {
          setEventData(postsRes.data[0]);
          console.log("🔍 EVENT DATA:", postsRes.data[0]);
          console.log("🔍 EVENT thumbnail_image:", postsRes.data[0].thumbnail_image);
        }
      } catch (error) {
        console.error("❌ Error fetching debug data:", error);
      }
    };

    fetchDebugData();
  }, []);

  if (!memberData && !eventData) {
    return <div style={{ padding: "20px", background: "#f0f0f0", margin: "20px" }}>
      Loading debug data...
    </div>;
  }

  return (
    <div style={{ 
      padding: "20px", 
      background: "#f0f0f0", 
      margin: "20px",
      border: "2px solid #333",
      fontFamily: "monospace"
    }}>
      <h2 style={{ color: "#d00" }}>🐛 IMAGE DEBUG INFO</h2>
      
      {memberData && (
        <div style={{ marginBottom: "20px", background: "white", padding: "10px" }}>
          <h3>Member Image Data:</h3>
          <p><strong>Member Name:</strong> {memberData.firstName} {memberData.familyName}</p>
          <p><strong>profileImage object:</strong> {JSON.stringify(memberData.profileImage, null, 2)}</p>
          <p><strong>profileImage.filename:</strong> {memberData.profileImage?.filename}</p>
          <p><strong>Generated URL:</strong> {getImageUrl(memberData.profileImage?.filename)}</p>
          
          <div style={{ marginTop: "10px" }}>
            <p><strong>Test Image:</strong></p>
            <img 
              src={getImageUrl(memberData.profileImage?.filename)} 
              alt="Test member"
              style={{ maxWidth: "200px", border: "2px solid red" }}
              onError={(e) => {
                console.error("❌ Image failed to load:", e.target.src);
                e.target.style.border = "5px solid red";
              }}
              onLoad={(e) => {
                console.log("✅ Image loaded successfully:", e.target.src);
                e.target.style.border = "5px solid green";
              }}
            />
          </div>
        </div>
      )}

      {eventData && (
        <div style={{ background: "white", padding: "10px" }}>
          <h3>Event/Post Image Data:</h3>
          <p><strong>Event Title:</strong> {eventData.short_description}</p>
          <p><strong>thumbnail_image object:</strong> {JSON.stringify(eventData.thumbnail_image, null, 2)}</p>
          <p><strong>thumbnail_image.filename:</strong> {eventData.thumbnail_image?.filename}</p>
          <p><strong>Generated URL:</strong> {getImageUrl(eventData.thumbnail_image?.filename)}</p>
          
          <div style={{ marginTop: "10px" }}>
            <p><strong>Test Image:</strong></p>
            <img 
              src={getImageUrl(eventData.thumbnail_image?.filename)} 
              alt="Test event"
              style={{ maxWidth: "200px", border: "2px solid red" }}
              onError={(e) => {
                console.error("❌ Image failed to load:", e.target.src);
                e.target.style.border = "5px solid red";
              }}
              onLoad={(e) => {
                console.log("✅ Image loaded successfully:", e.target.src);
                e.target.style.border = "5px solid green";
              }}
            />
          </div>
        </div>
      )}

      <div style={{ marginTop: "20px", background: "#ffffcc", padding: "10px" }}>
        <h4>Instructions:</h4>
        <ol>
          <li>Open browser console (F12)</li>
          <li>Look for 🔍 logs showing the actual API data</li>
          <li>Look for 🖼️ logs showing image path transformations</li>
          <li>Check if images have green border (loaded) or red border (failed)</li>
          <li>Try opening the "Generated URL" directly in a new browser tab</li>
        </ol>
      </div>
    </div>
  );
};

export default ImageDebugger;
