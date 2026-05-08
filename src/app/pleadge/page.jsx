"use client";
import { useEffect } from "react";

const page = () => {
  let name = null
  let address = null
  let designation = null
  let email = null
  let mobileNo = null
  if(typeof window !="undefined"){
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

   name = params.name;
   address = params.address;
   designation = params.designation;
   email = params.email;
   mobileNo = params.mobileNo;
}
  //   console.log("formdata---->" + formdata);
  const printWholePage = () => {
    // Call the print function on the current window
    if(typeof window !="undefined"){
    window.print();
    }

  };

  useEffect(() => {
    if(typeof window !="undefined"){
    // This ensures that the content is fully loaded before attempting to print
    printWholePage();
    }
  }, []);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div id="print-content" style={{ width: '1010px' ,border:'10px rgb(31,55,96) double',padding:'10px' }}>
          <p style={{ textAlign: "center", fontSize: "20pt" }}>
            <img
              src="images/pledge.png"
             
              alt=""
              style={{
                marginRight: "9pt",
                marginLeft: "9pt",
                //   float: "left",
                position: "relative",
              }}
            />
          </p>
          <p style={{ textAlign: "center", fontSize: "36pt" }}>
            <img
              src="https://myfiles.space/user_files/temporary/65e6e68555cbd0.02295018/1709631108_pledge-for-wdd-for-online-submission/1709631108_pledge-for-wdd-for-online-submission-4.png"
              width={212}
              height={101}
              alt=""
            />
          </p>
          <p
            style={{
              marginBottom: "0pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "18pt",
              backgroundColor: "#ffffff",
            }}
          >
            <span style={{ fontFamily: '"Monotype Corsiva"' }}>I, </span>
            <span
              style={{ fontFamily: '"Monotype Corsiva"', fontSize: "18pt" }}
            >
              {name}
            </span>
            <span style={{ fontFamily: '"Monotype Corsiva"' }}> </span>
            <span style={{ fontFamily: '"Monotype Corsiva"' }}>as a “</span>
            <strong>
              <span style={{ fontFamily: '"Monotype Corsiva"' }}>
                Doctorate”
              </span>
            </strong>
            <span style={{ fontFamily: '"Monotype Corsiva"' }}>
              and being an educated and enlightened person, solemnly and
              sincerely promise with a firm and steadfast resolution, without
              any equivocation and
            </span>
            <span style={{ fontFamily: '"Monotype Corsiva"' }}> </span>
            <span style={{ fontFamily: '"Monotype Corsiva"' }}>
              mental reservation to apply my knowledge for:
            </span>
          </p>
          <p
            style={{
              marginBottom: "0pt",
              textAlign: "justify",
              lineHeight: "normal",
              fontSize: "18pt",
              backgroundColor: "#ffffff",
            }}
          >
            <strong>
              <span style={{ fontFamily: '"Monotype Corsiva"' }}> </span>
            </strong>
          </p>
          <div style={{ backgroundColor: "#ffffff" }}>
            <p
              style={{
                marginLeft: "40.5pt",
                marginBottom: "0pt",
                textIndent: "-40.5pt",
                textAlign: "justify",
                lineHeight: "normal",
                fontSize: "18pt",
              }}
            >
              <strong>
                <span style={{ fontFamily: '"Monotype Corsiva"' }}>
                  Upholding{" "}
                </span>
              </strong>
              <span style={{ fontFamily: '"Monotype Corsiva"' }}>
                high ethical standards in all public activities and deeds and
                private endeavours,{" "}
              </span>
            </p>
          </div>
          <div style={{ backgroundColor: "#ffffff" }}>
            <p
              style={{
                marginLeft: "40.5pt",
                marginBottom: "0pt",
                textIndent: "-40.5pt",
                textAlign: "justify",
                lineHeight: "normal",
                fontSize: "18pt",
              }}
            >
              <strong>
                <span style={{ fontFamily: '"Monotype Corsiva"' }}>
                  Promoting{" "}
                </span>
              </strong>
              <span style={{ fontFamily: '"Monotype Corsiva"' }}>
                a spirit of understanding and good fellowship among the people
                of the world
              </span>
              <span
                style={{ fontFamily: '"Monotype Corsiva"', color: "#204056" }}
              >
                ,
              </span>
              <strong>
                <span style={{ fontFamily: '"Monotype Corsiva"' }} />
              </strong>
            </p>
          </div>
          <div style={{ backgroundColor: "#ffffff" }}>
            <p
              style={{
                marginLeft: "40.5pt",
                marginBottom: "0pt",
                textIndent: "-40.5pt",
                textAlign: "justify",
                lineHeight: "normal",
                fontSize: "18pt",
              }}
            >
              <strong>
                <span style={{ fontFamily: '"Monotype Corsiva"' }}>
                  Demonstrating{" "}
                </span>
              </strong>
              <span style={{ fontFamily: '"Monotype Corsiva"' }}>
                compassion and empathy for the disadvantaged and differently
                abled persons,
              </span>
              <span
                style={{ fontFamily: '"Monotype Corsiva"', color: "#204056" }}
              />
            </p>
          </div>
          <div style={{ backgroundColor: "#ffffff" }}>
            <p
              style={{
                marginLeft: "40.5pt",
                marginBottom: "0pt",
                textIndent: "-40.5pt",
                textAlign: "justify",
                lineHeight: "normal",
                fontSize: "18pt",
              }}
            >
              <strong>
                <span style={{ fontFamily: '"Monotype Corsiva"' }}>
                  Advancing{" "}
                </span>
              </strong>
              <span style={{ fontFamily: '"Monotype Corsiva"' }}>
                sustainable development and social progress in the world,
              </span>
            </p>
          </div>
          <div style={{ backgroundColor: "#ffffff" }}>
            <p
              style={{
                marginLeft: "40.5pt",
                marginBottom: "0pt",
                textIndent: "-40.5pt",
                textAlign: "justify",
                lineHeight: "normal",
                fontSize: "18pt",
              }}
            >
              <strong>
                <span style={{ fontFamily: '"Monotype Corsiva"' }}>
                  Transforming{" "}
                </span>
              </strong>
              <span style={{ fontFamily: '"Monotype Corsiva"' }}>
                social perception towards ever increasing importance of
                scholarship in pursuit of excellence,
              </span>
            </p>
          </div>
          <div style={{ backgroundColor: "#ffffff" }}>
            <p
              style={{
                marginLeft: "40.5pt",
                marginBottom: "0pt",
                textIndent: "-40.5pt",
                textAlign: "justify",
                lineHeight: "normal",
                fontSize: "18pt",
              }}
            >
              <strong>
                <span style={{ fontFamily: '"Monotype Corsiva"' }}>
                  Encouraging
                </span>
              </strong>
              <span style={{ fontFamily: '"Monotype Corsiva"' }}> </span>
              <span style={{ fontFamily: '"Monotype Corsiva"' }}>
                adoption of good academic and research practices and
                professional conduct{" "}
              </span>
            </p>
          </div>
          <div className="foot-cont">
          <p
            style={{
              marginBottom: "0pt",
              lineHeight: "normal",
              fontSize: "18pt",
              backgroundColor: "#ffffff",
            }}
          >
            <span style={{ fontFamily: '"Monotype Corsiva"' }}> </span>
          </p>
          <p
            style={{
              marginBottom: "0pt",
              textAlign: "right",
              lineHeight: "normal",
              fontSize: "10pt",
            }}
          >
            <em>
              <span style={{ fontFamily: "Verdana" }}>
                                                                               
              </span>
            </em>
            <em>
              <span style={{ fontFamily: "Verdana" }}>(Signature)</span>
            </em>
          </p>
          <p
            style={{
              textAlign:"right",
              marginBottom: "0pt",
              lineHeight: "150%",
              fontSize: "10pt",
            }}
          >
            <em>
              <span style={{ fontFamily: "Verdana" }}> </span>
            </em>
          </p>
          <p
            style={{
              textAlign:"right",
              marginBottom: "0pt",
              lineHeight: "150%",
              fontSize: "10pt",
            }}
          >
            <em>
              <span style={{ fontFamily: "Verdana" }}>Name: {name}</span>
            </em>
          </p>
          <p
            style={{
              textAlign:"right",
              marginBottom: "0pt",
              lineHeight: "150%",
              fontSize: "10pt",
            }}
          >
            <em>
              <span style={{ fontFamily: "Verdana" }}>
                Designation:{designation}
              </span>
            </em>
          </p>
          <p
            style={{
              textAlign:"right",
              marginBottom: "0pt",
              lineHeight: "150%",
              fontSize: "10pt",
            }}
          >
            <em>
              <span style={{ fontFamily: "Verdana" }}>Address:{address}</span>
            </em>
          </p>
          <p
            style={{
              marginLeft: "180pt",
              marginBottom: "0pt",
              textIndent: "36pt",
              lineHeight: "150%",
              fontSize: "10pt",
            }}
          >
            <em>
              <span style={{ fontFamily: "Verdana" }}> </span>
            </em>
            <em>
              <span
                style={{
                  width: "32.48pt",
                  textIndent: "0pt",
                  fontFamily: "Verdana",
                  display: "inline-block",
                }}
              >
                 
              </span>
            </em>
            <em>
              {/* <span style={{ fontFamily: "Verdana" }}>
              ………………………………………………………………
            </span> */}
            </em>
          </p>
          <p
            style={{
              textAlign:"right",
              marginBottom: "0pt",
              lineHeight: "150%",
              fontSize: "10pt",
            }}
          >
            <em>
              <span style={{ fontFamily: "Verdana" }}>E-mail: {email}</span>
            </em>
          </p>
          <p
            style={{
              textAlign: "right",
              textIndent: "36pt",
              lineHeight: "150%",
              fontSize: "10pt",
            }}
          >
            <em>
              <span style={{ fontFamily: "Verdana" }}>
                Mobile no.: {mobileNo}
              </span>
            </em>
          </p>
          <p
            style={{
              marginLeft: "180pt",
              marginBottom: "0pt",
              textIndent: "36pt",
              lineHeight: "150%",
              fontSize: "10pt",
            }}
          >
            <em>
              <span style={{ fontFamily: "Verdana" }}> </span>
            </em>
          </p>
          </div>
          <p
            style={{
              textAlign: "center",
              lineHeight: "115%",
              borderTop: "0.75pt solid #000000",
              paddingTop: "1pt",
              fontSize: "10pt",
            }}
          >
            <span style={{ fontFamily: '"Arial Narrow"' }}>
              This special Pledge will be administered on the occasion of the
              “World Doctorates Day”. All Doctorates are requested to rededicate
              themselves to uphold the decorum of the highest University degree
              that they have earned.
            </span>
          </p>
          <button onClick={printWholePage}>Print Page</button>
        </div>
      </div>
    </>
  );
};

export default page;
