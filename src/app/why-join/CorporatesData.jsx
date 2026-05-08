import React from 'react';

const CorporatesData = () => {
  const corporatebenefits = [
    "Access to Cutting-edge Research: Partnering with a global academy gives corporations access to the latest research findings and innovations in various fields. This can provide valuable insights for developing new products, services, and technologies.",
    "Collaboration Opportunities: Corporates can collaborate with researchers and experts from diverse backgrounds and disciplines. Such collaborations can lead to joint research projects, product development, and solutions to complex challenges.",
    "Talent Acquisition: Membership in a global academy can provide access to a pool of highly skilled and motivated doctoral candidates and researchers. This can be beneficial for recruitment efforts, as companies can identify potential employees with specialized knowledge and expertise.",
    "Innovation and R&D: Partnering with academia can fuel corporate innovation and research and development (R&D) efforts. Academics often bring fresh perspectives and unconventional ideas that can lead to breakthrough innovations.",
    "Professional Development: Companies can benefit from workshops, seminars, and conferences organized by the global academy. These events offer opportunities for continuous learning, skill development, and networking with experts in various fields.",
    "Thought Leadership: Associating with a respected academic institution enhances a company's thought leadership and credibility in its industry. It demonstrates a commitment to staying at the forefront of knowledge and advancements.",
    "Access to Resources: Some academies offer access to research facilities, libraries, databases, and other resources that can support companies in their R&D endeavors.",
    "Global Reach: By partnering with a global academy, corporations can expand their reach and tap into international networks and markets. This can be particularly beneficial for companies looking to expand their operations globally.",
    "Solving Industry Challenges: Collaborating with academia can help companies address industry-specific challenges and solve complex problems through interdisciplinary research and expertise.",
    "Corporate Social Responsibility (CSR): Collaborating with academic institutions can align with a company's CSR initiatives by supporting education, research, and knowledge dissemination.",
    "Regulatory and Compliance Guidance: Academics often have expertise in various regulations and standards. Partnering with them can help companies navigate complex regulatory landscapes effectively.",
    "Long-term Partnerships: Building relationships with academia can lead to long-term partnerships that extend beyond immediate projects. These relationships can provide ongoing value in terms of research, innovation, and talent development.",
    "Consultancy: The GAD will provide discounted consultancy to corporates members on a wide variety of specialized subjects, technologies, and policies from its global experts as members can."
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
        {corporatebenefits.map((e, index) => (
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
              src="images/why3.png"
              alt="corporate benefit icon"
              style={{ marginRight: 10 }}
            />
            <li style={{ fontSize: "20px" }}>
              <strong style={{ fontWeight: "600" }}>{e.split(':')[0]}</strong>: {e.split(':').slice(1).join(':')}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default CorporatesData;
