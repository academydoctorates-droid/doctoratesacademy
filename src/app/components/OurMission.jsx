import React from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

const OurMission = () => {
  return (
    <Container style={{ padding: "12px", maxWidth: "1300px" }}>
      <Grid
        container
        spacing={3}
        sx={{
          paddingY: { xs: 3, md: 0 },
          marginBottom: {
            xs: 0,
          },
          marginRight: { xs: 0 },
        }}
      >
        <Grid item xs={12} md={6}>
          <Card>
            {/* <CardMedia
              component="img"
            
              image="images/mv3.png"
              alt="Web Development Portfolio"
              style={{ objectFit: "cover", objectPosition: "50% 29%",borderRadius:"50%",width:"25%",height:"10%",margin:"auto" ,marginTop:"10px"}}
              
            /> */}
            <CardContent className="boxframe">
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{
                  textAlign: "center",
                  fontSize: "24px",
                  paddingTop: 1,
                  fontWeight: "800",
                }}
              >
                Our Vision
              </Typography>
              <hr
                style={{
                  borderTop: "2px solid #000",
                  width: "23%",
                  margin: "auto",
                  marginBottom: "10px",
                }}
              />
              {/* <Typography variant="body2" color="textSecondary" component="p" sx={{fontSize:"20px",textAlign:"justify",padding:1.2,fontWeight:"700"}}>
                To recognize academic talents and create a global network and
                offer them ample opportunities for interaction with Industry,
                academia, and the Government in contributing towards
                socio-economic developments.
              </Typography> */}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            {/* <CardMedia
              component="img"
           
              image="images/mv2.png"
              alt="Project Portfolio"
              style={{ objectFit: "cover", objectPosition: "50% 29%",borderRadius:"50%",width:"25%",margin:"auto",marginTop:"10px" }}
              
            /> */}
            <CardContent className="boxframe">
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{
                  textAlign: "center",
                  fontSize: "24px",
                  paddingTop: 1,
                  fontWeight: "800",
                }}
              >
                Our Mission
              </Typography>
              <hr
                style={{
                  borderTop: "2px solid #000",
                  width: "23%",
                  margin: "auto",
                  marginBottom: "25px",
                  backgroundColor: "#1f899d",
                }}
              />
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                sx={{
                  fontSize: "20px",
                  textAlign: "justify",
                  padding: 2,
                  fontWeight: "700",
                }}
              >
                To bring together a dynamic pool of academicians with
                transdisciplinary approach in problem solving and helping
                mankind.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default OurMission;
