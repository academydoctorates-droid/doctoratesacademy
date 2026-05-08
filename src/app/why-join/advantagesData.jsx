/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React from 'react';

const AdvantagesData = () => {
  const advantagesDatalist = [
    "International Collaboration: Partnering with a global organization like the Global Academy of Doctorates can facilitate international collaboration and networking opportunities. It allows institutions to connect with other universities and researchers from around the world, leading to potential joint research projects, academic exchanges, and knowledge sharing.",
    "Research Opportunities: Being part of a global network can provide access to a wider range of research opportunities. Collaborating with researchers from diverse backgrounds and expertise areas can lead to innovative and interdisciplinary research projects.",
    "Enhanced Visibility: Membership in a prestigious global academy can enhance an institution's visibility and reputation on an international scale. This can attract top-tier students, faculty, and researchers who are interested in being part of a renowned academic network.",
    "Quality Assurance: Membership in a respected organization can signal a commitment to academic quality and excellence. It can serve as an indicator of the institution's dedication to maintaining high standards in research and education.",
    "Conferences and Events: Many global academies organize conferences, seminars, and workshops where members can present their research, exchange ideas, and learn from experts in various fields. Participating in these events can foster academic growth and professional development.",
    "Access to Resources and database: Some global academies offer access to resources such as funding opportunities, research grants, databases, and publications. These resources can support an institution's research endeavors and contribute to its academic success. The Universities may get contact of the world class specialist for employment.",
    "Global Impact: Collaborating with a global academy can help an institution contribute to global initiatives and address pressing global challenges through joint research projects and partnerships.",
    "Student Opportunities: Membership in a global academy might offer students unique learning experiences, exposure to diverse perspectives, and potential connections for internships or job opportunities.",
    "Innovation and Diversity: Interacting with researchers and educators from different cultural backgrounds and academic disciplines can foster innovation, creativity, and a broader understanding of global issues.",
    "Advocacy and Influence: Global academies often advocate for higher education and research funding on a global scale. Being part of such an organization can give an institution a platform to influence policies and decisions related to academia and research."
  ];

  const colors = [
    "#e0f7fa", // Light blue
    "#f1f8e9", // Very light green
    "#ffe0b2", // Light orange
    "#f8bbd0", // Light pink
    "#d1c4e9", // Light purple
    // Add more colors as needed
  ];

  return (
    <div>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {advantagesDatalist.map((advantage, index) => {
          const parts = advantage.split(':'); // Split each element by colon
          return (
            <div
              key={index}
              className='cardAdvantage'
              style={{
                backgroundColor: colors[index % colors.length],
                padding: "10px",
                borderRadius: "5px",
                margin: "10px 0",
                display: "flex",
                alignItems: "center"
              }}
            >
              <img
                width="50"
                height="50"
                src="images/why1.png"
                alt="advantage icon"
                style={{ marginRight: 10 }}
              />
              <li style={{ fontSize: "20px" }}>
                <strong>{parts[0]}</strong>: {parts[1]}
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default AdvantagesData;
