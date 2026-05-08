import React from "react";
import Link from "next/link";

const OurGoverningBody = () => {
  const ourMembersData = [
    {
      id: 1,
      name: "Prof. Dr. Kamal Kant Dwivedi",
      image: "images/GoverningBody/1.jpg",
      profession: "President",
      location: "Noida, Delhi NCR",
      designation:
        "Senior Vice President RBEF, Amity University Former Vice Chancellor of three Indian Universities",
      role: "President",
    },
    {
        id: 2,
        name: "Dr. S.K. Agnihotri, IAS",
        image: "images/GoverningBody/2.jpg",
        profession: "Vice-President",
        location: "Lucknow",
        designation:
          "Indian Administrative Service (Retd.) Former Secretary, NFCH, Govt. of India and Chief Secretary, Arunachal Pradesh, India",
        role: "Vice President",
      },
      {
        id: 3,
        name: "Dr. Paras Nath Pandey",
        image: "images/GoverningBody/3.jpg",
        profession: "Hon. Vice President",
        location: "New Delhi",
        designation: "Founder and Managing Director Penam Laboratories Ltd",
        role: "Hon. Vice President",
        invitee:"Special Invitee"
      },
      {
        id: 4,
        name: "Prof. Dr. Mohinder P. Mahajan",
        image: "images/founding members/15.jpg",
        profession: "Hon. Vice President",
        location: "Utca 2030 Erd, Hungary",
        designation: "Professor Emeritus",
        role: "Hon. Vice President",
        invitee:"Special Invitee"
      },
      {
        id: 5,
        name: "Prof. Dr. Manju Kaushik",
        image: "images/GoverningBody/manju.png",
        profession: "Secretary",
        location: "Jaipur",
        designation:
          "Professor  Amity Institute of Information Technology (AIIT), Deputy Director-Amity Innovation Incubator Centre, President-Institution’s Innovation Council (IIC),Amity University Rajasthan ",
        role: "Secretary",
      },
      {
        id: 6,
        name: "Prof. Dr. Vandana Upadhyay",
        image: "images/founding members/8.png",
        profession: "Joint Secretary",
        location: "Itanagar",
        designation:
          "Professor, Department of Economics Rajiv Gandhi University, Itanagar, Arunachal Pradesh",
        role: "Joint Secretary",
      },
    
      {
        id: 7,
        name: "Dr. Nidhi Kesari",
        image: "images/founding members/14.png",
        profession: "Treasurer",
        location: "Delhi",
        designation: "Associate professor",
        role: "Treasurer",
      },
      {
        id: 8,
        name: "Prof. Dr. Y.C. Goswami",
        image: "images/GoverningBody/goswami.jpg",
        profession: "Member",
        location: "Gwalior",
        designation: "FRSC, Professor of Physics,ITM University, Gwalior",
        role: "Founding Member",
      },
      {
        id: 9,
        name: "Prof. Dr. Dipak Sinha",
        image: "images/GoverningBody/dipak.jpg",
        profession: "Member",
        location: "Kohima",
        designation:
          "Professor Department of Chemistry Nagaland University India",
        role: "Founding Member",
      },
    
    {
      id: 10,
      name: "Dr. Shyam P. Tripathy",
      image: "images/founding members/7.png",
      profession: "Member",
      location: "Mumbai",
      designation:
        "Senior Scientist Bhabha Atomic Research Center, Trombay, Mumbai",
      role: "Founding Member",
    },


    {
        id: 11,
        name: "Dr. Rosaline Mishra",
        image: "images/founding members/3.png",
        profession: "Member",
        location: "Mumbai",
        designation:
          "Senior Scientist Bhabha Atomic Research Center, Trombay, Mumbai",
        role: "Founding Member",
      },

    
  
  
    {
      id: 12,
      name: "Prof. Dr. Swati Gupta",
      image: "images/founding members/10.png",
      profession: "Member",
      location: "Faridabad Now in USA",
      designation:
        "M.Pharm, Ph.D, Post-Doc (USA), Research Scientist, Healios Labs LLC Skillman, New Jersey, USA",
      role: "Founding Member",
    },

    {
        id: 13,
        name: "Dr. Rekha Dwivedi",
        image: "images/GoverningBody/rekha.jpg",
        profession: "Founding Member",
        location: "New Delhi",
        designation: "Former Director, National Foundation for Communal Harmony",
        role: "Founding Member",
        invitee:"Special Invitee"
      },

    {
      id: 14,
      name: "Prof. Dr. Mitali Talukdar",
      image: "images/GoverningBody/mitali.jpg",
      profession: "Founding Member",
      location: "Kolkata",
      designation: "Associate Professor Amity University, Kolkata,USA",
      role: "Founding Member",
      invitee:"Special Invitee"
    },

    {
      id: 15,
      name: "Ajanta Sharma",
      image: "images/founding members/Ajanta.jpeg",
      profession: "Founding Member",
      location: "Delhi, NCR",
      designation:
        "Vice President (Finance) PMI north India Chapter Delhi, NCR",
      role: "Founding Member",
      invitee:"Special Invitee"
    },

   

    {
        id: 16,
        name: "Dr. B.K. Nayak",
        image: "images/GoverningBody/bk.jpg",
        // profession: "Founding Member",
        location: "New Delhi",
        designation: "Former Director, National Foundation for Communal Harmony",
        role: "Founding Member",
        invitee:"Special Invitee"
      },
  ];

  return (
    <>
    {ourMembersData.length > 0 && (
          <div style={{ flex: "0 0 10%", padding: "10px" ,textAlign:"center"}}>
            <div className="Governing_Body">
              <img
                src={ourMembersData[0].image}
                className="img-responsive center-block"
                alt=""
                
              />
              <h3 style={{color:'#679aac', marginTop:9}}>{ourMembersData[0].name}</h3>
              <h4>{ourMembersData[0].profession}</h4>{" "}
              
            </div>
          </div>
        )}

      <div className="row" style={{ display: "flex", flexWrap: "wrap",justifyContent:"center" }}>
        
        {ourMembersData.slice(1).map((member, index) => (
          <div key={index} className="Governing_container">
            {/* Set flex to 0 0 25% to make each box take up 25% of the container */}
            <div className="Governing_Body">
              <img
                src={member.image}
                className="img-responsive center-block"
                alt=""
                
              />
              <h3 style={{color:'#679aac',marginTop:9}}>{member.name}</h3>
              <h4 >{member.profession}</h4>{" "}
              <h4 style={{color:"#b31e1d"}}>{member.invitee}</h4>{" "}
              {/* <Link className="btn btn_new2" href={`profile/${member.id}`}>
                    View Profile
                  </Link> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default OurGoverningBody;
