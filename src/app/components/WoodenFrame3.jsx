import React from "react";
import { Grid, CardContent, Typography } from "@mui/material";

const WoodenFrame3 = () => {
  return (
    <div className="body dark-background">
      <div className="outer-border">
        <div className="mid-border">
          <div className="inner-border">
            <img
              className="corner-decoration corner-left-top"
              src="https://i.ibb.co/4mKvK3N/corner-decoration.jpg"
              alt="Decoration"
            />
            <img
              className="corner-decoration corner-right-top"
              src="https://i.ibb.co/4mKvK3N/corner-decoration.jpg"
              alt="Decoration"
            />
            <img
              className="corner-decoration corner-right-bottom"
              src="https://i.ibb.co/4mKvK3N/corner-decoration.jpg"
              alt="Decoration"
            />
            <img
              className="corner-decoration corner-left-bottom"
              src="https://i.ibb.co/4mKvK3N/corner-decoration.jpg"
              alt="Decoration"
            />
            <img
              className="vertical-decoration top"
              src="https://i.ibb.co/JRTK9z4/horizontally-centered-vertical-decoration.png"
              alt="Vertical Decoration"
            />
            <img
              className="vertical-decoration bottom"
              src="https://i.ibb.co/JRTK9z4/horizontally-centered-vertical-decoration.png"
              alt="Vertical Decoration"
            />

            <Grid
              container
              justifyContent="center"
              alignItems="center"
              spacing={2}
              sx={{ padding: { xs: 3, md: 5 } }}
            >
              <Grid item xs={12} md={8}>
                <CardContent>
                  <Typography
                    variant="h5"
                    component="h2"
                    gutterBottom
                    sx={{
                      textAlign: "center",
                      fontSize: "24px",
                      paddingTop: 4,
                      fontWeight: "800",
                      color: "#fff",
                    }}
                  >
                    World Doctorates Day
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
                      fontSize: "16px",
                      textAlign: "center",
                      padding: 1.2,
                      fontWeight: "500",
                      color: "#fff",
                      margin: "auto",
                    }}
                  >
                    On August's twenty-fifth, we pause and cheer,
                    <br />
                    A day for minds that wander far and near.
                    <br />
                    World Doctorates Day, a tribute true,
                    <br />
                    To scholars whose pursuits bring light anew.
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    sx={{
                      fontSize: "16px",
                      textAlign: "center",
                      padding: 1.2,
                      fontWeight: "500",
                      color: "#fff",
                      margin: "auto",
                    }}
                  >
                    In halls of knowledge, where the thinkers dwell,
                    <br />
                    They chase the mysteries that none can quell.
                    <br />
                    From ancient tomes to future's gleam so bright,
                    <br />
                    Their quest for truth is ever in the light.
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    sx={{
                      fontSize: "16px",
                      textAlign: "center",
                      padding: 1.2,
                      fontWeight: "500",
                      color: "#fff",
                      margin: "auto",
                    }}
                  >
                    With thesis bound and lab coats in the fray,
                    <br />
                    They forge new paths where shadows used to sway.
                    <br />
                    In whispers of the quantum or the gene,
                    <br />
                    They paint the world in hues we've never seen.
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WoodenFrame3;
