import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import axios from "axios";
import { BASE_ASSET_URL } from "../utils";

const OpinionModal = ({ modalOpinionText, setModalOpinionText, id }) => {
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const handleSubmitOpinion = async () => {
    const opinionObj = {
      userId: "718391",
      submitted_by: "Sachin",
      opinion: modalOpinionText,
    };
    try {
      const res = await axios.patch(
        `${BASE_ASSET_URL}/post/opinion/${id}`,
        opinionObj
      );
      setModalOpinionText("");
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        onCloseModal();
      }, 3000);
    } catch (err) {
      alert("Failed to submitted!");
    }
  };

  return (
    <>
      <button className="btn btn_new1" onClick={onOpenModal}>
        Submit your opinion
      </button>{" "}
      <div>
        {/* <button onClick={onOpenModal}>Open modal</button> */}
        <Modal
          open={open}
          onClose={onCloseModal}
          center
          styles={{ modal: { backgroundColor: "#eff7f9" } }}
        >
          <div style={{ padding: 10 }}>
            {!success ? (
              <>
                <h3 style={{ fontWeight: "bold" }}>Submit Your Opinion</h3>
                <div
                  style={{ display: "flex", width: "100%", marginTop: "2rem" }}
                >
                  <textarea
                    placeholder="Write your opinion..."
                    onChange={(e) => setModalOpinionText(e.target.value)}
                    value={modalOpinionText}
                    rows={5}
                    style={{
                      resize: "none",
                      width: "100%",
                      backgroundColor: "#eff7f9",
                      outline: "none",
                      border: "2px solid black",
                      borderRadius: 3,
                      fontSize: "1.8rem",
                      padding: "1em",
                      color: "black",
                    }}
                    maxLength={200}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "2rem",
                  }}
                >
                  <p
                    style={{ fontSize: "1.5rem", fontWeight: "700", margin: 0 }}
                  >
                    {modalOpinionText.length}/200
                  </p>
                  <button
                    type="button"
                    onClick={handleSubmitOpinion}
                    className="btn btn-info"
                    style={{
                      backgroundColor: "#1f899d",
                      border: "none",
                      fontSize: "1.7rem",
                      padding: "0.5rem 1.5rem",

                      outline: "none",
                    }}
                  >
                    Submit
                  </button>
                </div>
                {/* <button
              style={{
                backgroundColor: "#1f899d",
                border: "none",
                fontSize: "1.7rem",
                padding: "0.5rem 1.5rem",
                marginTop: 15,
                float: "right",
              }}
            >
              Submit
            </button> */}
              </>
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src="images/success_animation.gif" />
                <h3 style={{ fontWeight: "bold" }}>Submitted</h3>
              </div>
            )}
          </div>
        </Modal>
      </div>
    </>
  );
};

export default OpinionModal;
