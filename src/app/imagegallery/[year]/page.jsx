// pages/ImageGallery.js
"use client" 
import React from 'react';
import { Grid, Paper, Typography,IconButton } from '@mui/material';
import Header from '../../components/header';
import CustomHeader from '../../components/mobileHeader';
import Image from 'next/image';
import { useRouter } from 'next/navigation';  // Import from next/navigation instead of next/router
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CloseIcon from '@mui/icons-material/Close';



//props.params

const page = ({params}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null); 

  const { year } = params
  console.log("year--->",year)
  let images;
  // Load the images based on the year parameter
  if (year === '2023') {
    images = [
      { id: 1, url: '/images/S-01/Pix (1).JPG', alt: 'Image 1' },
      { id: 2, url: '/images/S-01/Pix (2).JPG', alt: 'Image 2' },
      { id: 3, url: '/images/S-01/Pix (3).JPG', alt: 'Image 3' },
      { id: 4, url: '/images/S-01/Pix (4).JPG', alt: 'Image 4' },
      { id: 5, url: '/images/S-01/Pix (5).JPG', alt: 'Image 5' },
      { id: 6, url: '/images/S-01/Pix (6).JPG', alt: 'Image 6' },
      { id: 7, url: '/images/S-01/Pix (7).JPG', alt: 'Image 7' },
      { id: 8, url: '/images/S-01/Pix (8).JPG', alt: 'Image 8' },
      { id: 9, url: '/images/S-01/Pix (9).JPG', alt: 'Image 9' },
      { id: 10, url: '/images/S-01/Pix (10).JPG', alt: 'Image 10' },
      { id: 11, url: '/images/S-01/Pix (11).JPG', alt: 'Image 11' },
      { id: 12, url: '/images/S-01/Pix (12).JPG', alt: 'Image 12' },
      { id: 13, url: '/images/S-01/Pix (13).JPG', alt: 'Image 13' },
      { id: 15, url: '/images/S-01/Pix (15).JPG', alt: 'Image 15' },
      { id: 16, url: '/images/S-01/Pix (16).JPG', alt: 'Image 16' },
      { id: 17, url: '/images/S-01/Pix (17).JPG', alt: 'Image 17' },
      { id: 18, url: '/images/S-01/Pix (18).JPG', alt: 'Image 18' },
      { id: 19, url: '/images/S-01/Pix (19).JPG', alt: 'Image 19' },
      { id: 20, url: '/images/S-01/Pix (20).JPG', alt: 'Image 20' },
      { id: 21, url: '/images/S-01/Pix (21).JPG', alt: 'Image 21' },
      { id: 22, url: '/images/S-01/Pix (22).JPG', alt: 'Image 22' },
      { id: 24, url: '/images/S-01/Pix (24).JPG', alt: 'Image 24' },
      { id: 25, url: '/images/S-01/Pix (25).JPG', alt: 'Image 25' },
      { id: 26, url: '/images/S-01/Pix (26).JPG', alt: 'Image 26' },
      { id: 28, url: '/images/S-01/Pix (28).JPG', alt: 'Image 28' },
      { id: 30, url: '/images/S-01/Pix (30).JPG', alt: 'Image 30' },
      { id: 31, url: '/images/S-01/Pix (31).JPG', alt: 'Image 31' },
      { id: 32, url: '/images/S-01/Pix (32).JPG', alt: 'Image 32' },
      { id: 33, url: '/images/S-01/Pix (33).JPG', alt: 'Image 33' },
      { id: 34, url: '/images/S-01/Pix (34).JPG', alt: 'Image 34' },
      { id: 35, url: '/images/S-01/Pix (35).JPG', alt: 'Image 35' },
      { id: 36, url: '/images/S-01/Pix (36).JPG', alt: 'Image 36' },
      { id: 37, url: '/images/S-01/Pix (37).JPG', alt: 'Image 37' },
      { id: 39, url: '/images/S-01/Pix (39).JPG', alt: 'Image 39' },
      { id: 40, url: '/images/S-01/Pix (40).JPG', alt: 'Image 40' },
      { id: 41, url: '/images/S-01/Pix (41).JPG', alt: 'Image 41' },
      { id: 42, url: '/images/S-01/Pix (42).JPG', alt: 'Image 42' },
      { id: 43, url: '/images/S-01/Pix (43).JPG', alt: 'Image 43' },
      { id: 44, url: '/images/S-01/Pix (44).JPG', alt: 'Image 44' },
      { id: 45, url: '/images/S-01/Pix (45).JPG', alt: 'Image 45' },
      { id: 46, url: '/images/S-01/Pix (46).JPG', alt: 'Image 46' },
      { id: 47, url: '/images/S-01/Pix (47).JPG', alt: 'Image 47' },
      { id: 48, url: '/images/S-01/Pix (48).JPG', alt: 'Image 48' },
      { id: 49, url: '/images/S-01/Pix (49).JPG', alt: 'Image 49' },
      { id: 50, url: '/images/S-01/Pix (50).JPG', alt: 'Image 50' },
      { id: 51, url: '/images/S-01/Pix (51).JPG', alt: 'Image 51' },
      { id: 52, url: '/images/S-01/Pix (52).JPG', alt: 'Image 52' },
      { id: 56, url: '/images/S-01/Pix (56).JPG', alt: 'Image 56' },
      { id: 57, url: '/images/S-01/Pix (57).JPG', alt: 'Image 57' },
      { id: 58, url: '/images/S-01/Pix (58).JPG', alt: 'Image 58' }
     
     
   ];
 }
 else if (year === '2021') {
  images = [
    { id: 1, url: `/images/wdd/2021/1.JPG`, alt: 'Image 1' },
    { id: 2, url: `/images/wdd/2021/2.JPG`, alt: 'Image 2' },
    { id: 3, url: `/images/wdd/2021/3.JPG`, alt: 'Image 3' },
    { id: 4, url: `/images/wdd/2021/4.JPG`, alt: 'Image 4' },
    { id: 5, url: `/images/wdd/2021/5.JPG`, alt: 'Image 5' },
    { id: 6, url: `/images/wdd/2021/6.JPG`, alt: 'Image 6' },
    { id: 7, url: `/images/wdd/2021/7.JPG`, alt: 'Image 7' },
    { id: 8, url: `/images/wdd/2021/8.JPG`, alt: 'Image 8' },
    { id: 9, url: `/images/wdd/2021/9.JPG`, alt: 'Image 9' },
    { id: 10, url: `/images/wdd/2021/10.JPG`, alt: 'Image 10' },
    { id: 11, url: `/images/wdd/2021/11.JPG`, alt: 'Image 11' },
    { id: 12, url: `/images/wdd/2021/12.JPG`, alt: 'Image 12' },
    { id: 10, url: `/images/wdd/2021/13.JPG`, alt: 'Image 10' },
    { id: 11, url: `/images/wdd/2021/14.JPG`, alt: 'Image 11' },
    { id: 12, url: `/images/wdd/2021/15.JPG`, alt: 'Image 12' }
    

   
 ];
}
  else if (year === '2019') {
     images = [
      { id: 1, url: `/images/wdd/2019/1.JPG`, alt: 'Image 1' },
      { id: 2, url: `/images/wdd/2019/2.JPG`, alt: 'Image 2' },
      { id: 3, url: `/images/wdd/2019/3.JPG`, alt: 'Image 3' },
      { id: 4, url: `/images/wdd/2019/4.JPG`, alt: 'Image 4' },
      { id: 5, url: `/images/wdd/2019/5.JPG`, alt: 'Image 5' },
      { id: 6, url: `/images/wdd/2019/6.JPG`, alt: 'Image 6' },

      { id: 7, url: `/images/wdd/2019/7.JPG`, alt: 'Image 7' },

      { id: 8, url: `/images/wdd/2019/8.JPG`, alt: 'Image 8' },

      { id: 9, url: `/images/wdd/2019/9.JPG`, alt: 'Image 9' },

      { id: 10, url: `/images/wdd/2019/10.JPG`, alt: 'Image 10' },

      { id: 11, url: `/images/wdd/2019/11.JPG`, alt: 'Image 11' },

      { id: 12, url: `/images/wdd/2019/12.JPG`, alt: 'Image 12' },

      
    ];
  }
  else if (year === '2017') {
    images = [
    //  { id: 1, url: `/images/wdd/2019/1.JPG`, alt: 'Image 1' },
    //  { id: 2, url: `/images/wdd/2019/2.JPG`, alt: 'Image 2' },
    //  { id: 3, url: `/images/wdd/2019/3.JPG`, alt: 'Image 3' },
    //  { id: 4, url: `/images/wdd/2019/4.JPG`, alt: 'Image 4' },
    //  { id: 5, url: `/images/wdd/2019/5.JPG`, alt: 'Image 5' },
    //  { id: 6, url: `/images/wdd/2019/6.JPG`, alt: 'Image 6' },

    //  { id: 7, url: `/images/wdd/2019/7.JPG`, alt: 'Image 7' },

    //  { id: 8, url: `/images/wdd/2019/8.JPG`, alt: 'Image 8' },

    //  { id: 9, url: `/images/wdd/2019/9.JPG`, alt: 'Image 9' },

    //  { id: 10, url: `/images/wdd/2019/10.JPG`, alt: 'Image 10' },

    //  { id: 11, url: `/images/wdd/2019/11.JPG`, alt: 'Image 11' },

    //  { id: 12, url: `/images/wdd/2019/12.JPG`, alt: 'Image 12' },
   { id: 1, url: `/images/wdd/2017/DSC_9367.JPG`, alt: 'Image 1' },
{ id: 2, url: `/images/wdd/2017/DSC_9371.JPG`, alt: 'Image 2' },
{ id: 3, url: `/images/wdd/2017/DSC_9373.JPG`, alt: 'Image 3' },
{ id: 4, url: `/images/wdd/2017/DSC_9374.JPG`, alt: 'Image 4' },
{ id: 5, url: `/images/wdd/2017/DSC_9376.JPG`, alt: 'Image 5' },
{ id: 6, url: `/images/wdd/2017/DSC_9384.JPG`, alt: 'Image 6' },
{ id: 7, url: `/images/wdd/2017/DSC_9390.JPG`, alt: 'Image 7' },
{ id: 8, url: `/images/wdd/2017/DSC_9397.JPG`, alt: 'Image 8' },
{ id: 9, url: `/images/wdd/2017/DSC_9400.JPG`, alt: 'Image 9' },
{ id: 10, url: `/images/wdd/2017/DSC_9411.JPG`, alt: 'Image 10' },
{ id: 12, url: `/images/wdd/2017/DSC_9445.JPG`, alt: 'Image 12' },
{ id: 13, url: `/images/wdd/2017/DSC_9449.JPG`, alt: 'Image 13' },
{ id: 14, url: `/images/wdd/2017/DSC_9480.JPG`, alt: 'Image 14' },
{ id: 15, url: `/images/wdd/2017/DSC_9487.JPG`, alt: 'Image 15' },
{ id: 16, url: `/images/wdd/2017/DSC_9512.JPG`, alt: 'Image 16' },

{ id: 17, url: `/images/wdd/2017/DSC_9537.JPG`, alt: 'Image 17' },
{ id: 18, url: `/images/wdd/2017/DSC_9543.JPG`, alt: 'Image 18' },
{ id: 19, url: `/images/wdd/2017/DSC_9547.JPG`, alt: 'Image 19' },
{ id: 20, url: `/images/wdd/2017/DSC_9571.JPG`, alt: 'Image 20' },
{ id: 21, url: `/images/wdd/2017/DSC_9579.JPG`, alt: 'Image 23' },
{ id: 22, url: `/images/wdd/2017/DSC_9586.JPG`, alt: 'Image 24' },
{ id: 23, url: `/images/wdd/2017/DSC_9591.JPG`, alt: 'Image 25' },
{ id: 24, url: `/images/wdd/2017/DSC_9599.JPG`, alt: 'Image 26' },
{ id: 18, url: `/images/wdd/2017/DSC_9543.JPG`, alt: 'Image 18' },
{ id: 19, url: `/images/wdd/2017/DSC_9547.JPG`, alt: 'Image 19' },
{ id: 20, url: `/images/wdd/2017/DSC_9571.JPG`, alt: 'Image 20' },
{ id: 21, url: `/images/wdd/2017/DSC_9579.JPG`, alt: 'Image 23' },
{ id: 22, url: `/images/wdd/2017/DSC_9586.JPG`, alt: 'Image 24' },
{ id: 23, url: `/images/wdd/2017/DSC_9591.JPG`, alt: 'Image 25' },
{ id: 24, url: `/images/wdd/2017/DSC_9599.JPG`, alt: 'Image 26' },

{ id: 25, url: `/images/wdd/2017/DSC_9604.JPG`, alt: 'Image 18' },
{ id: 26, url: `/images/wdd/2017/DSC_9616.JPG`, alt: 'Image 19' },
{ id: 27, url: `/images/wdd/2017/DSC_9619.JPG`, alt: 'Image 20' },
{ id: 28, url: `/images/wdd/2017/DSC_9629.JPG`, alt: 'Image 23' },
{ id: 29, url: `/images/wdd/2017/DSC_9647.JPG`, alt: 'Image 24' },
{ id: 30, url: `/images/wdd/2017/DSC_9656.JPG`, alt: 'Image 25' },
{ id: 31, url: `/images/wdd/2017/DSC_9661.JPG`, alt: 'Image 26' },


     
   ];
 }
   else if (year === '2016') {
    images = [
      { id: 1, url: '/images/wdd/2016/1.jpg', alt: 'Image 1' },
      { id: 2, url: '/images/wdd/2016/2.jpg', alt: 'Image 2' },
      { id: 3, url: '/images/wdd/2016/3.jpg', alt: 'Image 3' },
      { id: 4, url: '/images/wdd/2016/4.jpg', alt: 'Image 4' },
      { id: 5, url: '/images/wdd/2016/5.jpg', alt: 'Image 5' },
      { id: 6, url: '/images/wdd/2016/6.jpg', alt: 'Image 6' },

      { id: 7, url: '/images/wdd/2016/7.jpg', alt: 'Image 7' },

      { id: 8, url: '/images/wdd/2016/8.jpg', alt: 'Image 8' },

      { id: 9, url: '/images/wdd/2016/9.jpg', alt: 'Image 9' },

      { id: 10, url: '/images/wdd/2016/10.jpg', alt: 'Image 10' },

      { id: 11, url: '/images/wdd/2016/11.jpg', alt: 'Image 11' },

      { id: 12, url: '/images/wdd/2016/12.jpg', alt: 'Image 12' },     
    ];
    
  }
   else if (year === '2013') {
    images= [
      { id: 1, url: '/images/wdd/2013/1.jpg', alt: 'Image 1' },
      { id: 2, url: '/images/wdd/2013/2.jpg', alt: 'Image 2' },
      { id: 3, url: '/images/wdd/2013/6.jpg', alt: 'Image 6' },

      { id: 7, url: '/images/wdd/2013/7.jpg', alt: 'Image 7' },

      { id: 8, url: '/images/wdd/2013/8.jpg', alt: 'Image 8' },

      { id: 9, url: '/images/wdd/2013/9.jpg', alt: 'Image 9' },

      { id: 10, url: '/images/wdd/2013/10.jpg', alt: 'Image 10' },

      { id: 11, url: '/images/wdd/2013/11.jpg', alt: 'Image 11' },

      { id: 12, url: '/images/wdd/2013/12.jpg', alt: 'Image 12' },    
    ];
  }

  const handleImageClick = (image,index) => {
    setSelectedImage(image);
    setSelectedImageIndex(index); // Set the selected image when clicked
  };

  const handleCloseModal = () => {
    setSelectedImage(null); // Close the modal by resetting selected image
  };

  const handleNext = () => {
    setSelectedImageIndex((prevIndex) => {
      const newIndex = prevIndex === images.length - 1 ? 0 : prevIndex + 1;
      return newIndex;
    });
  };

  const handlePrevious = () => {
    setSelectedImageIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? images.length - 1 : prevIndex - 1;
      return newIndex;
    });
  };
    
  return (

    
    <div>

     <div className="header-container">
        <Header />
      </div>
      <div className="mobile-header-container">
        <CustomHeader />
      </div>

      <div className="top_banner margin_adjust2">
          <div className="top_banner_pic">
            <img
              src="../images/about-us-header.jpg"
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
                          <span>WDD Conference Gallery {year}</span>
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      {/* <Typography variant="h4" gutterBottom>
        Image Gallery
      </Typography> */}
      <Grid container spacing={2} padding={2} >
        {images.map((image,index) => (
          <Grid key={image.id} item xs={12} sm={6} md={4} lg={3}>
            <Paper elevation={3} sx={{ textAlign: 'center' }}>
            <div onClick={() => handleImageClick(image,index)}>
              <Image src={image.url} alt={image.alt} objectFit='cover ' style={{width:'100%'}} width={200} height={250}/>
              </div>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Modal open={selectedImage !== null} onClose={handleCloseModal}>
  <div style={{ position: 'relative' }}>
    <IconButton
      onClick={handleCloseModal}
      style={{ position: 'absolute', top: 0, right: 0, zIndex: 1000 }}
    >
      <CloseIcon style={{ color: 'white', fontSize: '30px', fontWeight: 'bold' }} />
    </IconButton>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <IconButton onClick={handlePrevious}>
        <NavigateBeforeIcon style={{ color: 'white', fontSize: '40px', fontWeight: 'bold' }} />
      </IconButton>
      <Image src={images[selectedImageIndex]?.url} alt={images[selectedImageIndex]?.alt} style={{ width: 'auto', height: 'auto', maxHeight: '120vh', maxWidth: '120vw', borderRadius: "10px" }} width={1100} height={1100} />
      <IconButton onClick={handleNext}>
        <NavigateNextIcon style={{ color: 'white', fontSize: '40px', fontWeight: 'bold' }} />
      </IconButton>
    </div>
  </div>
</Modal>

    </div>
  );
};

export default page;
