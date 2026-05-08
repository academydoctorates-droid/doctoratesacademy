const Genesis = () => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: 30,
          backgroundColor: "#f9f9f9",
        }}
      >
        <div
          id="print-content"
          style={{
            width: "60%",
            padding: "20px",
            backgroundColor: "#ffffff",
            border: "2px solid #000000",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Header section */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="images/GAD Logo.png"
              width={106}
              height={99}
              alt=""
              style={{
                marginRight: "10px",
              }}
            />
            <h1
              style={{
                textAlign: "center",
                flex: 1,
                margin: 0,
                fontWeight: "bold",
                fontSize: "28pt",
                fontFamily: '"Times New Roman", serif',
                color: "#2c3e50",
                letterSpacing: "1.5px",
                borderBottom: "2px solid #2c3e50",
                paddingBottom: "5px",
              }}
            >
              World Doctorates Day
            </h1>
            <img
              src="images/GAD2.png"
              width={102}
              height={102}
              alt=""
              style={{
                marginLeft: "10px",
              }}
            />
          </div>
  
          {/* Date section */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: 10,
              fontSize: "16pt",
              fontFamily: '"Arial Narrow", sans-serif',
            }}
          >
            <strong>(25</strong>
            <strong>
              <sup>th</sup>
            </strong>
            <strong> August)</strong>
          </div>
  
          {/* Pledge section */}
          <p
            style={{
              marginBottom: "0pt",
              marginTop: "10pt",
              textAlign: "center",
              lineHeight: "normal",
              fontSize: "18pt",
              backgroundColor: "#ffffff",
              fontFamily: '"Monotype Corsiva", cursive',
              color: "#34495e",
              padding: "10px 20px",
            //   border: "1px solid #34495e",
              borderRadius: "10px",
            }}
          >
            On August twenty-fifth, a day of great renown, We as the world's
            doctorates, take responsibility by adopting a pledge. Our knowledge
            and skill, a precious treasure trove, A day to honour those who have a
            never-ending quest for generating new knowledge.
          </p>
  
          {/* Genesis section */}
          <div style={{ backgroundColor: "#ffffff", marginTop: 30 }}>
            <h2 style={{ textAlign: "center", fontFamily: '"Times New Roman"', color: "#2c3e50", fontSize: "22pt" }}>
              Genesis
            </h2>
            <p
              style={{
                marginBottom: "0pt",
                textAlign: "justify",
                lineHeight: "1.5",
                fontSize: "16pt",
                backgroundColor: "#ffffff",
                fontFamily: '"Monotype Corsiva", cursive',
                color: "#34495e",
                padding: "10px 20px",
                // border: "1px solid #34495e",
                borderRadius: "10px",
              }}
            >
              Prof. Dr. Kamal Kant Dwivedi, President "Global Academy of
              Doctorates" had declared August 25th as World Doctorates Day in
              March 2012. The day an idea came to observe a day of the year as the
              World Doctorates Day, we found that the 238th member joined the
              Doctorates Network on LinkedIn. In leap year 2012, the 238th day of
              the year was August 25th, hence without any bias or prejudice, the
              members of the Doctorates Network accepted August 25th as the World
              Doctorates Day. On this very day, the Academy is organizing an
              international conference every year, and all the participants adopt
              a pledge to uphold high ethical standards in all public activities
              and deeds and private endeavours.
            </p>
          </div>
  
          {/* Contact section */}
          <p style={{ textAlign: "center", marginTop: 10, fontFamily: '"Verdana", sans-serif' }}>
            For More Details Please Contact:
          </p>
  
          {/* Contact details */}
          <p
            style={{
              textAlign: "center",
              lineHeight: "1.5",
              borderTop: "1px solid #000000",
              paddingTop: "10px",
              fontSize: "14pt",
              fontFamily: '"Arial Narrow", sans-serif',
              color: "#2c3e50",
            }}
          >
            <strong style={{ fontSize: "16pt" }}>Prof. Kamal Kant Dwivedi, President</strong>
            <br />
            Global Academy of Doctorates,
            <br />
            Noida and New Delhi, India
            <br />
            Phone: +91 9958543884
            <br />
            Email: academyofdoctorates@gmail.com
          </p>
        </div>
      </div>
    );
  };
  
  export default Genesis;
  