"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Header from "../components/header";
import { Footer } from "../components/Footer";
import MandatoryForLogin from "../components/MandatoryForLogin";
import { BASE_ASSET_URL, getImageUrl } from "../utils";
import { Tabs, Tab, CircularProgress } from "@mui/material";

const PUBLICATION_TYPES = ["All", "Books", "Reports", "Declarations", "Brochures", "Souvenir"];

const Page = () => {
  const [tokenId, setTokenId] = useState("");
  const [memberToken, setMemberToken] = useState("");
  const [openModal, setOpenModal] = useState(true);
  const [data, setData] = useState([]);
  const [selectedTab, setSelectedTab] = useState("All");
  const [loading, setLoading] = useState(true); // Added loading state
  const router = useRouter();

  useEffect(() => {
    const getPublicationData = async () => {
      try {
        const res = await axios.get(`${BASE_ASSET_URL}/publications`);
        setData(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Stop loading once data is fetched
      }
    };
    getPublicationData();
  }, []);

  useEffect(() => {
    const membersToken = localStorage.getItem("members");
    const token = localStorage.getItem("token");
    setMemberToken(membersToken);
    setTokenId(token);
  }, []);

  const handleCloseModal = () => {
    setOpenModal(false);
    router.push("/").catch((error) => {
      console.error("Error navigating to home page:", error);
    });
  };

  const filteredData = selectedTab === "All" ? data : data.filter((item) => item.type === selectedTab);

  return (
    <>
      <Header />

      {loading ? ( // Show centered loader while fetching data
        <div className="loading-container">
          <CircularProgress size={80} />
        </div>
      ) : tokenId && memberToken === "Memberlogin" ? (
        <div className="publication-container">
          <div className="tabs-container">
            <Tabs value={selectedTab} onChange={(e, newValue) => setSelectedTab(newValue)} variant="scrollable" scrollButtons="auto">
              {PUBLICATION_TYPES.map((type) => (
                <Tab key={type} label={type} value={type} />
              ))}
            </Tabs>
          </div>

          {filteredData.length > 0 ? (
            <div className="publications-grid">
              {filteredData.map((item) => (
                <div className="publication-card" key={item._id}>
                  <div className="publication-image-container">
                    <img
                      src={item.thumbnail_image ? getImageUrl(item.thumbnail_image) : "images/doc1.jpg"}
                      alt="Publication Thumbnail"
                      className="publication-image"
                    />
                  </div>
                  <div className="publication-content">
                    <div className="publication-header">
                      <span className="publication-type">{item.type}</span>
                      <h2 className="publication-title">{item.heading}</h2>
                    </div>
                    <p className="publication-description">{item.short_description}</p>
                    {item.file && (
                      <a
                        href={getImageUrl(item.file)}
                        className="download-button"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Document
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-data-message">No publications available for {selectedTab}.</p>
          )}
        </div>
      ) : (
        <MandatoryForLogin open={openModal} onClose={handleCloseModal} />
      )}

      <Footer />

      <style jsx>{`
        .loading-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh; /* Full viewport height */
          width: 100%;
        }

        .publication-container {
          padding: 20px;
          max-width: 1200px;
          margin: 40px auto;
        }
        
        .tabs-container {
          margin-bottom: 30px;
        }
        
        .publications-grid {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
        
        .publication-card {
          display: flex;
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .publication-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
        }
        
        .publication-image-container {
          flex: 0 0 300px;
          height: 100%;
          overflow: hidden;
        }
        
        .publication-image {
          width: 100%;
          height: 100%;
          min-height:300px;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .publication-card:hover .publication-image {
          transform: scale(1.05);
        }
        
        .publication-content {
          flex: 1;
          padding: 25px;
          display: flex;
          flex-direction: column;
        }
        
        .publication-header {
          margin-bottom: 15px;
        }
        
        .publication-type {
          display: inline-block;
          background: #f0f0f0;
          color: #555;
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          margin-bottom: 10px;
        }
        
        .publication-title {
          font-size: 22px;
          font-weight: 700;
          color: #333;
          margin: 0;
        }
        
        .publication-description {
          color: #666;
          line-height: 1.6;
          margin-bottom: 20px;
          flex-grow: 1;
        }
        
        .download-button {
          display: inline-flex;
          align-items: center;
          background: #008080;
          color: white;
          padding: 10px 20px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 500;
          transition: background 0.3s ease;
          width: fit-content;
        }
        
        .download-button:hover {
          background: #008080;
        }
        
        .no-data-message {
          text-align: center;
          font-size: 18px;
          color: #666;
          margin-top: 40px;
          padding: 20px;
          background: #f9f9f9;
          border-radius: 8px;
        }
        
        @media (max-width: 768px) {
          .publication-card {
            flex-direction: column;
          }
          
          .publication-image-container {
            flex: 0 0 200px;
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default Page;
