import React from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

const WoodenFrame = () => {
  return (
    <>
      <div
        className="body dark-background"
        // style={{
        //   backgroundImage:
        //     "url(https://i.ibb.co/nrmkm7d/five-bells-washed-out-logo.png) , linear-gradient(to right, rgba(58, 61, 62, 1) 0%, rgba(58, 61, 62, 1) 100%)",
        // }}
      >
        <div className="outer-border">
          <div className="mid-border">
            <div className="inner-border">
              <img
                className="corner-decoration corner-left-top"
                src="https://i.ibb.co/4mKvK3N/corner-decoration.jpg"
              />
              <img
                className="corner-decoration corner-right-top"
                src="https://i.ibb.co/4mKvK3N/corner-decoration.jpg"
              />
              <img
                className="corner-decoration corner-right-bottom"
                src="https://i.ibb.co/4mKvK3N/corner-decoration.jpg"
              />
              <img
                className="corner-decoration corner-left-bottom"
                src="https://i.ibb.co/4mKvK3N/corner-decoration.jpg"
              />
              <img
                className="vertical-decoration top"
                src="https://i.ibb.co/JRTK9z4/horizontally-centered-vertical-decoration.png"
              />
              <img
                className="vertical-decoration bottom"
                src="https://i.ibb.co/JRTK9z4/horizontally-centered-vertical-decoration.png"
              />
              {/* Page Content */}
              <div className="">
                <div className="row">
                  <div className="col-lg-12 text-center">
                    <Grid
                      container
                      sx={{
                        justifyContent: "space-between",
                        paddingY: { xs: 3, md: 0 },
                        marginBottom: {
                          xs: 0,
                        },
                        marginRight: { xs: 0 },
                      }}
                    >
                      <Grid item xs={12} md={5}>
                        <div sx={{ backgroundColor: "transparent" }}>
                          <CardContent>
                            <Typography
                              variant="h5"
                              component="h2"
                              gutterBottom
                              sx={{
                                textAlign: "center",
                                fontSize: "24px",
                                paddingTop: 8,
                                fontWeight: "800",
                                color: "#fff",
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
                            <Typography
                              variant="body2"
                              color="textSecondary"
                              component="p"
                              sx={{
                                fontSize: "18px",
                                textAlign: "center",
                                padding: 1.2,
                                fontWeight: "500",
                                color: "#fff",

                                margin: "auto",
                              }}
                            >
                              To recognize academic talents and create a global
                              network and offer them ample opportunities for
                              interaction with Industry, academia, and the
                              Government in contributing towards socio-economic
                              developments.
                            </Typography>
                          </CardContent>
                        </div>
                      </Grid>

                      <Grid item xs={12} md={5}>
                        <div sx={{ backgroundColor: "transparent" }}>
                          <CardContent>
                            <Typography
                              variant="h5"
                              component="h2"
                              gutterBottom
                              sx={{
                                textAlign: "center",
                                fontSize: "24px",
                                paddingTop: 8,
                                fontWeight: "800",
                                color: "#fff",
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
                                fontSize: "18px",
                                textAlign: "center",
                                padding: 2,
                                fontWeight: "500",
                                color: "#fff",

                                margin: "auto",
                              }}
                            >
                              To bring together a dynamic pool of academicians
                              with transdisciplinary approach in problem solving
                              and helping mankind.
                            </Typography>
                          </CardContent>
                        </div>
                      </Grid>
                    </Grid>

                    {/* <div className="poem-section">
                  <Typography
                    variant="h4"
                    component="h3"
                    gutterBottom
                    sx={{
                      textAlign: "center",
                      fontSize: "24px",
                      paddingTop: 2,
                      paddingBottom:2,
                      fontWeight: "800",
                      color: "#fff",
                    }}
                  >
                    Global Academy of Doctorates
                  </Typography>
                  <Grid container spacing={2} style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
                    <Grid item xs={12} md={10}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: "10px",
                          justifyContent:"center"
                        }}
                      >
                        <img
                          src="images/poemCap/cap-1.png"
                          alt="Cap"
                          style={{ marginRight: "10px",width:"10%" }}
                        />
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                          sx={{
                            fontSize: "18px",
                            textAlign: "left",
                            padding: 2,
                            fontWeight: "700",
                            color: "red",
                            fontStyle:"italic"
                          }}
                        >
                          In the realm of knowledge, a beacon of light, <br />
                          A institution of learning, a shining sight, <br />
                          The Global Academy of Doctorates, a name so bright, <br />
                          A place where minds expand, and intellects take flight.
                        </Typography>
                      </div>
                    </Grid>
                    <Grid item xs={12} md={10}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: "10px",
                          justifyContent:"center"
                        }}
                      >
                       
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                          sx={{
                            fontSize: "18px",
                            textAlign: "left",
                            padding: 2,
                            fontWeight: "700",
                            color: "red",
                            fontStyle:"italic"
                          }}
                        >
                          With campuses across the globe, a diverse array, <br />
                          A melting pot of cultures, a world in play, <br />
                          The academy's halls, a symphony of thought, <br />
                          A place where knowledge and wisdom are sought.
                        </Typography>

                        <img
                          src="images/poemCap/cap-2.png"
                          alt="Cap"
                          style={{ marginRight: "10px" ,width:"10%"}}
                        />
                      </div>
                    </Grid>
                    <Grid item xs={12} md={10}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: "10px",
                          justifyContent:"center"
                        }}
                      >
                        <img
                          src="images/poemCap/cap-1.png"
                          alt="Cap"
                          style={{ marginRight: "10px",width:"10%" }}
                        />
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                          sx={{
                            fontSize: "18px",
                            textAlign: "left",
                            padding: 2,
                            fontWeight: "700",
                            color: "red",
                            fontStyle:"italic"
                          }}
                        >
                          Doctorates and scholars, a community so grand, <br />
                          A brotherhood and sisterhood, a bond so strong and bland, <br />
                          United in their quest for truth and knowledge, they stand, <br />
                          Their research and teachings, a gift to all mankind.
                        </Typography>
                      </div>
                    </Grid>
                    <Grid item xs={12} md={10}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: "10px",
                          justifyContent:"center"
                        }}
                      >
                      
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                          sx={{
                            fontSize: "18px",
                            textAlign: "left",
                            padding: 2,
                            fontWeight: "700",
                            color: "red",
                            fontStyle:"italic"
                          }}
                        >
                          Their curriculum, a journey through the ages, <br />
                          From ancient texts to modern stages, <br />
                          A fusion of the past and present, a path so true, <br />
                          A journey of discovery, for me and for you.
                        </Typography>
                        <img
                          src="images/poemCap/cap-2.png"
                          alt="Cap"
                          style={{ marginRight: "10px",width:"10%" }}
                        />
                      </div>
                    </Grid>
                    <Grid item xs={12} md={10}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: "10px",
                          justifyContent:"center"
                        }}
                      >
                        <img
                          src="images/poemCap/cap-1.png"
                          alt="Cap"
                          style={{ marginRight: "10px",width:"10%" }}
                        />
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                          sx={{
                            fontSize: "18px",
                            textAlign: "left",
                            padding: 2,
                            fontWeight: "700",
                            color: "red",
                            fontStyle:"italic"
                          }}
                        >
                          The Global Academy of Doctorates, a shining star, <br />
                          A beacon in the darkness, near and far, <br />
                          A place of hope and dreams, a place of heart, <br />
                          A home for those who seek to learn and to impart.
                        </Typography>
                      </div>
                    </Grid>
                  </Grid>
                   </div> */}

                    <p style={{ marginTop: "10rem" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WoodenFrame;
