"use client";
import React, { useState } from "react";

const AboutUsContent = () => {
  const [showFullContent, setShowFullContent] = useState(false);

  const handleReadMore = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <div>
      <p style={{ fontSize: "20px" }}>
        The “Global Academy of Doctorates” is an International academic
        organization of accomplished people having highest university degrees
        (Ph.D. or equivalent) in all fields of studies. This Professional group
        was initially launched on March 7, 2012 and currently enrolled more than
        6000 members from 55 countries. The main idea behind creation of this
        Global Academy is to offer a global platform to all members to share
        their experiences and to network as a powerful academic body for social
        good. The Academy will also recognize its members for their outstanding
        contributions in various fields by nominating them as Fellows of the
        Academy. To earn a doctorate is a matter of pride. All of You are great
        achievers. You belong to an exclusive group of academicians holding the
        highest university degree. One has to perform an exciting journey in
        order to earn a doctorate. It may be rough, bumpy, dark, lonely but at
        times thrilling and rewarding. I feel that the Ph.D. is not merely a
        degree, but it is a process that equips us with skills to deal gainfully
        with difficult situations in life. Records show that the first Ph.D. was
        awarded to a woman: Lady Elena Lucrezia Cornaro-Piscopia of Italy in
        1678. Evidence shows that even before this Nalanda University in ancient
        India was awarding doctorates degree in several subjects. Over
        centauries millions of doctorates degrees have been awarded. On an
        average about 45-50 thousand Ph.D.s are awarded in USA every year. China
        also produces 50 thousand doctorates annually whereas in India about 40
        thousand
        {showFullContent && (
          <>
            {
              <p style={{ fontSize: "20px" }}>
                obtain doctorates every year. Today, at least 15-20 million
                doctorates live and work in the world.
                <br /> <br />
                We understand that doctoral research is the pinnacle of academic
                pursuit, representing the highest level of expertise in a
                particular field. As we envision the future of universities, it
                is imperative to consider the ever-evolving landscape of
                doctoral research and its role in shaping the knowledge economy.
                Here, we attempt to explore the how changing dynamics of
                doctoral research at global stage may shape the future of higher
                education that embraces innovation, collaboration, and
                transdisciplinary approaches. Before we dwell on this topic in
                details, it is pertinent to discuss the historical aspects of
                doctoral program per se.
                <br /> <br />
                <span>History:</span> The primary education in ancient India
                followed Gurukul system that based on Guru-Shishya Parampara
                which later continued to higher education in Mahavihars, the
                universities. The prominent Mahavihars of ancient India were
                Takshasila, Nalanda, Vikramshila, Odantapuri, Valabhi and
                others. Archival evidence show that the doctoral level programs
                were offered in variety of subjects at Takshasila, Nalanda and
                other Universities in ancient India. During medieval era, the
                origins of doctoral research can be traced back to European
                universities, particularly in Bologna, Paris, and Oxford. The
                first degrees, such as the doctorate in law (Doctor of Laws) and
                Theology (Doctor of Divinity), were established in the 12th and
                13th centuries. The early doctorate degrees were more focused on
                teaching and examination rather than on original research.
                Scholars were required to demonstrate mastery of existing
                knowledge. However, during the Renaissance, there was a shift
                toward humanism and a revival of interest in classical
                scholarship. This period saw a growing emphasis on independent
                research and critical inquiry. The concept of defending a
                dissertation or thesis gained prominence during this time.
                Doctoral candidates were expected to contribute original ideas
                to their field. The 19th century witnessed the establishment of
                research universities, such as the University of Berlin by
                Wilhelm von Humboldt in 1810. These universities emphasized the
                integration of teaching and research. The Doctor of Philosophy
                (PhD) degree emerged as a distinct academic credential during
                the 19th century. The University of Göttingen in Germany awarded
                the first modern PhD in 1810. In the 20th century, doctoral
                programs became more specialized, aligning with the
                professionalization of various disciplines. The doctorate became
                a prerequisite for academic and research careers. Doctoral
                research became increasingly international in scope, with
                scholars from around the world pursuing advanced degrees in
                leading research institutions. By the turn of 20th century, the
                first doctorate degree (D.Sc.) was awarded by Allahabad
                University in 1904 to Annoda Prasad Sircar in India. And by
                1920, India had only 13 doctorates. Most of the time we talk
                about sheer number of doctorates produced by Indian universities
                and tend to neglect their quality aspects. An estimate reveals
                that in India about 2,05,000 students are registered in Ph.D.
                programs and 40,000 - 42,000 scholars are awarded Ph.D. degree
                annually.
                <br /> <br />
                Ph.D. is globally considered to be the highest University
                degree. Every year some 4-5 hundred thousand doctorates are
                produced globally. Out of these India’s share is only 10% (about
                42k Ph. Ds in 2019), China and USA contribute 16-18% each,
                Germany, and UK about 6-8%. Nearly 4-5 million doctorates live
                in the world (1 doctorate amongst 1700 population). Global
                shortage of Ph.Ds is 2-3 million. India needs 0.2 million
                University/ College faculty every year for the next 5 years.
                <br /> <br />
                Ph.D. is globally considered to be the highest University
                degree. Every year some 4-5 hundred thousand doctorates are
                produced globally. Out of these India’s share is only 10% (about
                42k Ph. Ds in 2019), China and USA contribute 16-18% each,
                Germany, and UK about 6-8%. Nearly 4-5 million doctorates live
                in the world (1 doctorate amongst 1700 population). Global
                shortage of Ph.Ds is 2-3 million. India needs 0.2 million
                University/ College faculty every year for the next 5 years.
                <br /> <br />
                India is a stunning Kaleidoscope, a blend of diverse cultures
                and traditions, geography and history, sights and sounds,
                flavours, and feelings. We believe in “Life is Education and
                Education is Life.”
                <br /> <br />
                The traditional model of doctoral research has seen significant
                transformation over the years, influenced by technological
                advancements, globalization, and the demand for practical
                solutions to complex societal problems. Here we discuss the need
                for a reimagined vision that aligns doctoral research with the
                challenges and opportunities of the 21st century.
                <br /> <br />
                In recent decades, there has been a growing emphasis on
                interdisciplinary research, breaking down traditional academic
                silos. Advances in technology have transformed the landscape of
                doctoral research, making information more accessible and
                enabling collaboration across borders. Efforts to promote
                diversity and inclusion have influenced doctoral programs, with
                a recognition of the importance of varied perspectives in
                research. There is an increasing emphasis on applied and
                translational research, with a focus on addressing real-world
                problems and contributing to societal development.
              </p>
            }
            <p style={{ fontSize: "20px" }}>
              {" "}
              <strong>History:</strong> The primary education in ancient India
              followed Gurukul system that based on Guru-Shishya Parampara which
              later continued to higher education in Mahavihars, the
              universities. The prominent Mahavihars of ancient India were
              Takshasila, Nalanda, Vikramshila, Odantapuri, Valabhi and others.
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src="/images/university/1.jpg" alt="" />
            </div>
            <p style={{ fontSize: "20px" }}>
              Archival evidence show that the doctoral level programs were
              offered in variety of subjects at Takshasila, Nalanda and other
              Universities in ancient India.
            </p>

            <div>
              <p
                style={{
                  textAlign: "center",
                  color: "#074f6a",
                  fontSize: "21px",
                  fontWeight: "bold",
                }}
              >
                Some of the Shattered Ancient Universities in India
              </p>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "20px",
                alignItems: "center",
                justifyContent: "center",
                margin: "20px auto",
              }}
            >
              <div>
                <img
                  src="/images/university/2.jpg"
                  alt=""
                  style={{
                    height: "200px",
                    width: "200px",
                    objectFit: "cover",
                  }}
                />
                <p style={{ marginLeft: "10%", fontWeight: "bold" }}>
                  Takshaskila University{" "}
                </p>
              </div>
              <div>
                <img
                  src="/images/university/3.jpg"
                  alt=""
                  style={{
                    height: "200px",
                    width: "200px",
                    objectFit: "cover",
                  }}
                />
                <p style={{ marginLeft: "10%", fontWeight: "bold" }}>
                  Nalanda University <br />
                </p>
              </div>
              <div>
                <img
                  src="/images/university/4.jpg"
                  alt=""
                  style={{
                    height: "200px",
                    width: "200px",
                    objectFit: "cover",
                  }}
                />
                <p style={{ marginLeft: "10%", fontWeight: "bold" }}>
                  Ratnagiri University
                </p>
              </div>
              <div>
                <img
                  src="/images/university/5.jpg"
                  alt=""
                  style={{
                    height: "200px",
                    width: "200px",
                    objectFit: "cover",
                  }}
                />
                <p style={{ marginLeft: "10%", fontWeight: "bold" }}>
                  Jagaddala University
                </p>
              </div>
              <div>
                <img
                  src="/images/university/6.jpg"
                  alt=""
                  style={{
                    height: "200px",
                    width: "200px",
                    objectFit: "cover",
                  }}
                />
                <p style={{ marginLeft: "10%", fontWeight: "bold" }}>
                  Vikramshila University
                  <br />
                </p>
              </div>
              <div>
                <img
                  src="/images/university/7.jpg"
                  alt=""
                  style={{
                    height: "200px",
                    width: "200px",
                    objectFit: "cover",
                  }}
                />
                <p style={{ marginLeft: "10%", fontWeight: "bold" }}>
                  Pushpagiri University <br />{" "}
                </p>
              </div>
              <div>
                <img
                  src="/images/university/8.jpg"
                  alt=""
                  style={{
                    height: "200px",
                    width: "200px",
                    objectFit: "cover",
                  }}
                />
                <p style={{ marginLeft: "10%", fontWeight: "bold" }}>
                  Odantapuri University <br />
                </p>
              </div>
              <div>
                <img
                  src="/images/university/9.jpg"
                  alt=""
                  style={{
                    height: "200px",
                    width: "200px",
                    objectFit: "cover",
                  }}
                />
                <p style={{ marginLeft: "10%", fontWeight: "bold" }}>
                  Somapura University <br />
                </p>
              </div>
            </div>

            <div>
              <p
                style={{
                  textAlign: "center",
                  color: "#074f6a",
                  fontSize: "21px",
                  fontWeight: "bold",
                  marginTop: "80px",
                }}
              >
                Some Top Existing World Universities
              </p>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "20px",
                alignItems: "center",
                justifyContent: "center",
                margin: "20px auto",
              }}
            >
              <div>
                <img
                  src="/images/university/10.png"
                  alt=""
                  style={{
                    height: "200px",
                    width: "200px",
                    objectFit: "cover",
                  }}
                />
                <p style={{ marginLeft: "1%", fontWeight: "bold" }}>
                  Massachusetts Institute of <br /> Technology (MIT)
                </p>
              </div>
              <div>
                <img
                  src="/images/university/11.png"
                  alt=""
                  style={{
                    height: "200px",
                    width: "200px",
                    objectFit: "cover",
                  }}
                />
                <p style={{ marginLeft: "5%", fontWeight: "bold" }}>
                  University of Cambridge <br />
                </p>
              </div>
              <div>
                <img
                  src="/images/university/12.jpg"
                  alt=""
                  style={{
                    height: "200px",
                    width: "200px",
                    objectFit: "cover",
                  }}
                />
                <p style={{ marginLeft: "10%", fontWeight: "bold" }}>
                  Stanford University
                </p>
              </div>
              <div>
                <img
                  src="/images/university/13.png"
                  alt=""
                  style={{
                    height: "200px",
                    width: "200px",
                    objectFit: "cover",
                  }}
                />
                <p style={{ marginLeft: "10%", fontWeight: "bold" }}>
                  University of Oxford
                </p>
              </div>
              <div>
                <img
                  src="/images/university/14.png"
                  alt=""
                  style={{
                    height: "200px",
                    width: "200px",
                    objectFit: "cover",
                  }}
                />
                <p style={{ marginLeft: "10%", fontWeight: "bold" }}>
                  Harvard University
                </p>
              </div>
              <div>
                <img
                  src="/images/university/15.png"
                  alt=""
                  style={{
                    height: "200px",
                    width: "200px",
                    objectFit: "cover",
                  }}
                />
                <p style={{ marginLeft: "10%", fontWeight: "bold" }}>
                  California Institute of <br />
                  Technology (Caltech)
                </p>
              </div>
              <div>
                <img
                  src="/images/university/16.png"
                  alt=""
                  style={{
                    height: "200px",
                    width: "200px",
                    objectFit: "cover",
                  }}
                />
                <p style={{ marginLeft: "6%", fontWeight: "bold" }}>
                  Imperial College London
                </p>
              </div>
              <div>
                <img
                  src="/images/university/17.png"
                  alt=""
                  style={{
                    height: "200px",
                    width: "200px",
                    objectFit: "cover",
                  }}
                />
                <p style={{ marginLeft: "4%", fontWeight: "bold" }}>
                  University College London
                </p>
              </div>
            </div>

            <p style={{ fontSize: "20px" }}>
              During medieval era, the origins of doctoral research can be
              traced back to European universities, particularly in Bologna,
              Paris, and Oxford. The first degrees, such as the doctorate in law
              (Doctor of Laws) and Theology (Doctor of Divinity), were
              established in the 12th and 13th centuries. The early doctorate
              degrees were more focused on teaching and examination rather than
              on original research. Scholars were required to demonstrate
              mastery of existing knowledge. <br /> <br />
              However, during the Renaissance, there was a shift toward humanism
              and a revival of interest in classical scholarship. This period
              saw a growing emphasis on independent research and critical
              inquiry. The concept of defending a dissertation or thesis gained
              prominence during this time. Doctoral candidates were expected to
              contribute original ideas to their field. <br /> <br />
              The 19th century witnessed the establishment of research
              universities, such as the University of Berlin by Wilhelm von
              Humboldt in 1810. These universities emphasized the integration of
              teaching and research. The Doctor of Philosophy (PhD) degree
              emerged as a distinct academic credential during the 19th century.
              The University of Göttingen in Germany awarded the first modern
              PhD in 1810. <br /> <br />
              In the 20th century, doctoral programs became more specialized,
              aligning with the professionalization of various disciplines. The
              doctorate became a prerequisite for academic and research careers.
              Doctoral research became increasingly international in scope, with
              scholars from around the world pursuing advanced degrees in
              leading research institutions. <br /> <br />
              By the turn of 20 th century, the first doctorate degree (D.Sc.)
              was awarded by Allahabad University in 1904 to Annoda Prasad
              Sircar in India. And by 1920, India had only 13 doctorates. Most
              of the time we talk about sheer number of doctorates produced by
              Indian universities and tend to neglect their quality aspects. An
              estimate reveals that in India about 2,05,000 students are
              registered in Ph.D. programs and 40,000 - 42,000 scholars are
              awarded Ph.D. degree annually. <br /> <br />
              Ph.D. is globally considered to be the highest University degree.
              Every year some 4-5 hundred thousand doctorates are produced
              globally. Out of these India’s share is only 10% (about 42k Ph. Ds
              in 2019), China and USA contribute 16-18% each, Germany, and UK
              about 6-8%. Nearly 4-5 million doctorates live in the world (1
              doctorate amongst 1700 population). Global shortage of Ph.Ds is
              2-3 million. India needs 0.2 million University/ College faculty
              every year for the next 5 years. <br /> <br />
              India is a stunning Kaleidoscope, a blend of diverse cultures and
              traditions, geography and history, sights and sounds, flavours,
              and feelings. We believe in “Life is Education and Education is
              Life.” <br /> <br />
              The traditional model of doctoral research has seen significant
              transformation over the years, influenced by technological
              advancements, globalization, and the demand for practical
              solutions to complex societal problems. Here we discuss the need
              for a reimagined vision that aligns doctoral research with the
              challenges and opportunities of the 21st century. <br /> <br />
              In recent decades, there has been a growing emphasis on
              interdisciplinary research, breaking down traditional academic
              silos. Advances in technology have transformed the landscape of
              doctoral research, making information more accessible and enabling
              collaboration across borders. Efforts to promote diversity and
              inclusion have influenced doctoral programs, with a recognition of
              the importance of varied perspectives in research. There is an
              increasing emphasis on applied and translational research, with a
              focus on addressing real-world problems and contributing to
              societal development.
            </p>
          </>
        )}
      </p>

      <p
        onClick={handleReadMore}
        style={{
          display: "inline",
          color: "blue",
          cursor: "pointer",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        {showFullContent ? "Read less" : "....Read more"}
      </p>
    </div>
  );
};

export default AboutUsContent;
