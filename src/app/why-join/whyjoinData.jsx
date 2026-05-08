import React from 'react';

const WhyjoinData = () => {
  const benefits = [
    "Lifelong Recognition: As a Life Member, you receive lifelong recognition as part of a prestigious academic community. Your affiliation with the Global Academy of Doctorates enhances your reputation and credentials as a distinguished scholar.",
    "Global Network: Joining the academy provides access to a vast and diverse global network of fellow researchers, professors, and industry experts. Networking opportunities allow you to collaborate on research projects, share knowledge, and foster meaningful connections that can further your academic and professional goals.",
    "Professional Development: The academy offers numerous opportunities for continuous professional development. Workshops, seminars, and conferences organized by the academy provide valuable insights, skills, and updates in various fields, enabling you to stay at the forefront of your discipline.",
    "Research Collaboration: Life Members have the advantage of collaborating with leading researchers and experts from various disciplines. Such collaborations can lead to innovative research projects, publications, and grants that advance your academic career.",
    "Access to Resources: The Global Academy of Doctorates provides access to a wealth of academic resources, including research papers, journals, and publications. These resources support your research endeavors and expand your knowledge base.",
    "Publication Opportunities: As a Life Member, you may have enhanced opportunities to publish your research in reputable journals or the academy's own publications, providing wider visibility and impact for your work.",
    "Awards and Recognition: The Global Academy of Doctorates often awards outstanding contributions and achievements in research, teaching, and innovation. Life Members have the chance to be recognized and honored for their remarkable contributions to their respective fields as Fellow of the academy and the research fellow can get the best Doctorates dissertation award annually.",
    "Leadership Opportunities: Being a Life Member can open doors to leadership positions within the academy itself or other academic organizations. Taking on leadership roles can further enhance your leadership skills and academic standing.",
    "International Conferences: The academy frequently organizes international conferences and symposiums. As a Life Member, you gain priority access to these events, providing opportunities to present your research to a broader audience and engage in intellectually stimulating discussions. Life members will get discounts in the participation (registration) fee.",
    "Impactful Initiatives: The Global Academy of Doctorates may undertake various initiatives and projects that contribute to societal welfare, sustainability, and global challenges. As a Life Member, you can actively participate in and contribute to these impactful endeavors."
  ];

  const colors = [
    "#e0f7fa", // Light blue
    "#f1f8e9", // Very light green
    "#ffe0b2", // Light orange
    "#f8bbd0", // Light pink
    "#d1c4e9", // Light purple
    // Add more colors as needed
  ];

  // Function to format each benefit item
  const formatText = (text, index) => {
    const colonIndex = text.indexOf(':');
    const strongText = <strong style={{ fontWeight: "600" }}>{text.substring(0, colonIndex)}</strong>;
    const restText = text.substring(colonIndex + 1).trim();
    return (
      <div
        key={index}
        className="whyJoin"
        style={{
          backgroundColor: colors[index % colors.length],
          padding: "10px",
          borderRadius: "5px",
          margin: "10px 0",
        }}
      >
        <div className="whyJoinText" style={{ display: "flex", alignItems: "center" }}>
          <img
            width="50"
            height="50"
            style={{ marginRight: 10 }}
            src="images/why2.png"
            alt="objective icon"
          />
          <p style={{ fontSize: "22px", margin: 0 }}>{strongText}: {restText}</p>
        </div>
      </div>
    );
  };

  return (
    <div>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {benefits.map(formatText)}
      </ul>
    </div>
  );
};

export default WhyjoinData;
