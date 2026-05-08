"use server";

import React from "react";
import Header from "../components/header";
import { Footer } from "../components/Footer";

const page = () => {
  return (
    <>
      {/* Hello world */}
      <Header />
      <div className="top_banner margin_adjust2">
        <div className="top_banner_pic">
          <img
            src="images/abt_bg1.jpg"
            className="img-responsive center-block mob_hidden"
            alt=""
          />
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="fos_outer">
                  <div className="fos_text">
                    <div className="fos_padding">
                      <h1>
                        <span>About Us</span>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="history_wrap">
        <div className="container">
          <div className="row">
            <div className="col-md-12 service_heading">
              <h2>Our History</h2>
              <p>
                Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou
                là, mais la majeure partie d'entre elles a été altérée par
                l'addition d'humour ou de mots aléatoires qui ne ressemblent pas
                une seconde à du texte standard. Si vous voulez utiliser un
                passage du Lorem Ipsum, vous devez être sûr qu'il n'y a rien
                d'embarrassant caché dans le texte. Plusieurs variations de
                Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure
                partie d'entre elles a été altérée par l'addition d'humour ou de
                mots aléatoires qui ne ressemblent pas une seconde à du texte
                standard. Si vous voulez utiliser un passage du Lorem Ipsum,
                vous devez être sûr qu'il n'y a rien d'embarrassant caché dans
                le texte.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
