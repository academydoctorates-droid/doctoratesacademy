import React from 'react';
import Image from 'next/image';


const ObjectivesList = () => {
  const objectives = [
    "To encourage and propagate high standards in teaching and research.",
    "To motivate meritorious students for doing Ph.D. and take careers in academia.",
    "To recognize excellence in research.",
    "To create research database in major disciplines.",
    "To ensure very high standards of Ph.D. Degrees across the disciplines.",
    "To uphold high ethical standards in all public activities and works and private endeavors.",
    "To promote a spirit of understanding and good fellowship among the doctorates.",
    "To demonstrate compassion and empathy for the disadvantaged and differently enabled persons.",
    "To advance sustainable development and social progress in the world.",
    "To transform social perception towards ever-increasing importance of scholarship in pursuit of excellence.",
    "To encourage adoption of good academic and research practices and professional conduct.",
    "To draft policies in the fields of education, science, technology, research, and innovation etc.",
    "To offer merit-based research scholarships.",
    "To create database of doctorate theses.",
    "To foster research collaboration between academic institutions and industries in India and abroad.",
    "To observe “World Doctorates Day” every year on August 25th.",
    "To set quality parameters for doctoral research work.",
    "To set benchmarks for doctoral research guide.",
    "To prepare database of qualified research supervisors within academia and industries.",
    "To launch social awareness programs in different fields.",
    "To adopt and propagate Sustainable Development Goals in academic institutions.",
    "To arrange faculty development programs.",
    "To elect Fellows under different categories for their outstanding research work.",
    "To rank Universities, colleges, Institutions after due process of assessment.",
    "To launch interactive web portal for enabling members and other professionals to share ideas, information-board, solve real-life problems and encourage innovations.",
    "To undertake and accept the management of any endowment or trust fund or donation.",
    "To undertake all such other incidental acts, deeds and things connected with, and/or germane to, the objects of the Academy.",
    "To appoint staff for managing the Academy and to fix their salaries along with duties and responsibilities.",
    "To publish newsletters, reports, journals, books and other reference materials.",
    "To establish affiliations with international professional bodies.",
    "To recognize best Ph.D. thesis, scholar and research guides by bestowing awards.",
    "To borrow or raise money in such manner as the Academy may think fit and collect subscriptions and donations for the Academy.",
    "To invest any money of the Academy not immediately required for any of its objects in such manner as may from time to time.",
    "Assist, subscribe to or cooperate with any other public body whether incorporated or registered.",
    "To pay honorarium/consultancy to experts rendering services to the Academy as approved by the EC.",
    "To create Chapters/regional offices in different cities/countries.",
    "To provide guidance to Higher Education Institutions in accreditation and ranking activities.",
    "To issue appeals/notifications for memberships and contributions to the Academy in furtherance of the above objectives and to accept gifts, donations and subscriptions of cash and securities and of any property, either movable or immovable.",
    "To guide higher education institution in implementing National Education Policy (NEP-2020).",
    "Any other relevant objective that the Governing Body of the Academy decides from time to time.",
    "To provide specialized support and consultancy to industries and R&D units.",
    "To empanel industry experts for honorary and adjunct professorship in the university globally.",
    "To establish international collaborations between industry and academia."
  ];

  return (
    <div>
      <ul>
        {objectives.map((objective, index) => (
          <div
            key={index}
            className="cardsdata"
            style={{
              backgroundColor: index % 2 === 0 ? "#e0f7fa" : "#f1f8e9",
              padding: "10px",
              borderRadius: "5px",
              margin: "10px 0",
            }}
          >
            <li style={{ fontSize: "16px", display: "flex", alignItems: "center" }}>
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/external-sbts2018-flat-sbts2018/58/external-objective-basic-ui-elements-2.4-sbts2018-flat-sbts2018.png"
                alt="objective icon"
                style={{ marginRight: "10px" }}
              />
              <p style={{ fontSize: "24px", margin: 0 }}>{objective}</p>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};


export default ObjectivesList;
