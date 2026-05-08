import React from "react";
import { IconButton } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Facebook, YouTube } from "@mui/icons-material";
import XIcon from "@mui/icons-material/X";
import { Instagram } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row footer3">
          <div className="col-md-4 first_footer">
            <Link href="/">
              <img
                src="images/GAD_Logo_footar.png"
                className="img-responsive"
                alt=""
                style={{ width: "50%" }}
              />{" "}
            </Link>
          </div>
          <div className="col-md-2">
            <div className="app_lower">
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/objectives">Objectives</Link>
                </li>
                {/* <li>
                  <Link href="#">Activites</Link>
                </li> */}
                <li>
                  <Link href="/wdd">WDD</Link>
                </li>
                {/* <li>
                  <Link href="#">Conference</Link>
                </li> */}
                <li>
                  <Link href="/gallery">Gallery</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <ul>
              <li>
                <Link href="/publication">Publication</Link>
              </li>
              <li>
                <Link href="/members">Member</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact Us</Link>
              </li>

              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/termsandconditions">Terms of Service</Link>
              </li>
              {/* privacy */}
            </ul>
          </div>
          {/* <div className="col-md-4 footer_right">
            <h4>Join in global register of doctorates</h4>{" "}
            <a href="#" className="btn btn_new2">
              CLICK HERE
            </a>{" "}
          </div> */}

          <div className="col-md-4 footer_right">
            <Grid container spacing={2} alignItems="center" justify="flex-end">
              <Grid item>
                <IconButton
                  className="socialIcon"
                  href="https://www.facebook.com/GlobalAcademyofDoctorates?mibextid=ZbWKwL"
                  target="_blank"
                >
                  <Facebook style={{ fontSize: 40, color: "#3b5998" }} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  className="socialIcon"
                  href="https://x.com/GAofDoctorates?t=RVRv92oNe5Xnp6TuCZZn0Q&amp;s=09"
                  target="_blank"
                >
                  <XIcon style={{ fontSize: 40, color: "#1da1f2" }} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  className="socialIcon"
                  href="https://www.instagram.com/globalacademyofdoctorates"
                  target="_blank"
                >
                  <Instagram style={{ fontSize: 40, color: "#c13584" }} />
                </IconButton>
              </Grid>

              {/* <Grid item>
                <IconButton className="socialIcon" href="https://www.youtube.com">
                  <YouTube style={{ fontSize: 40, color: "#ff0000" }} />
                </IconButton>
              </Grid> */}

              <Grid item>
                <IconButton
                  className="socialIcon"
                  href="https://www.linkedin.com/groups/4341924/"
                  target="_blank"
                >
                  <LinkedIn style={{ fontSize: 40, color: "#0b66c2" }} />
                </IconButton>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className="row footer4">
          <div className="col-md-12 text-center">
            <p>
              Copyright © 2023 Global Academy Of Doctorates. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
