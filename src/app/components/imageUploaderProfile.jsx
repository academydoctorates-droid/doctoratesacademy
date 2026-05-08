"use client";
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { BASE_ASSET_URL } from "../utils";

const HiddenInput = styled("input")({
  display: "none",
});

const ImageUploaderProfile = ({ formData, setFormData, editForm,profileimage}) => {
  const [imagePreview, setImagePreview] = useState(null);
  const location = window.location.origin;
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, profileImage: file }));
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <HiddenInput
        accept="image/*"
        id="upload-photo"
        type="file"
        style={{ visibility: "hidden" }}
        onChange={handleImageChange}
      />
      <label htmlFor="upload-photo">
        <div style={!editForm ? { display: "flex", justifyContent: 'start'} : {display: 'flex', justifyContent: 'center'} }>
          <Card
            sx={{
              maxWidth: 200,
              bgcolor: "background.default",
              color: "text.primary",
              // cursor: "pointer",
              // height: 200,
              // maxHeight: 200,
              // marginBottom: 2,
              // display: "flex",
              // flexDirection: "column",
              // justifyContent: "center",
              // alignItems: "center",
            }}
            className="imageUploader"
          >
            <CardContent
              style={{
                textAlign: "center",
                //   padding: 20,
              }}
            >
              {imagePreview || profileimage ? (
                <img src={imagePreview || location+'/'+profileimage} alt="Preview" style={{ maxWidth: "100%", maxHeight: "100%" }} />
              ) : (
                <>
                  <Typography gutterBottom variant="h5" component="div">
                    Member Photo
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    OR
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    Company/Institution Logo
                  </Typography>
                  {formData.profileImage && (
                    <Typography variant="body2" color="text.secondary">
                      {formData.profileImage.name}
                    </Typography>
                  )}
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </label>
    </>
  );
};
export default ImageUploaderProfile;













