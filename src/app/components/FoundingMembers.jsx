import React from 'react'
import Link from "next/link";

const FoundingMembers = () => {
    const ourMembersData = [
        {
          id: 1,
          name: "Prof. Dr. Kamal Kant Dwivedi",
          image: "images/founding members/1.png",
          profession: "President",
          location: "Noida, Delhi NCR",
          designation:
            "Senior Vice President RBEF, Amity University Former Vice Chancellor of three Indian Universities",
          role: "President",
        },
        {
          id: 2,
          name: "Prof. Dr. Yogesh Chandra Goswami",
          image: "images/founding members/2.png",
          profession: "Member",
          location: "Gwalior",
          designation: "FRSC, Professor of Physics,ITM University, Gwalior",
          role: "Founding Member",
        },
        {
          id: 3,
          name: "Dr. Rosaline Mishra",
          image: "images/founding members/3.png",
          profession: "Member",
          location: "Mumbai",
          designation:
            "Senior Scientist Bhabha Atomic Research Center, Trombay, Mumbai",
          role: "Founding Member",
        },
        {
          id: 4,
          name: "Dr. P.N. Pandey",
          image: "images/founding members/4.png",
          profession: "Treasure",
          location: "New Delhi",
          designation: "Founder and Managing Director Penam Laboratories Ltd",
          role: "Hon. Vice President",
        },
        {
          id: 5,
          name: "Dr. S.K. Agnihotri, IAS",
          image: "images/founding members/5.png",
          profession: "Vice-President",
          location: "Lucknow",
          designation:
            "Indian Administrative Service (Retd.) Former Secretary, NFCH, Govt. of India and Chief Secretary, Arunachal Pradesh, India",
          role: "Vice President",
        },
        {
          id: 6,
          name: "Prof. Dr. Manju Kaushik",
          image: "images/founding members/6.png",
          profession: "Secretary",
          location: "Jaipur",
          designation:
            "Professor  Amity Institute of Information Technology (AIIT), Deputy Director-Amity Innovation Incubator Centre, President-Institution’s Innovation Council (IIC),Amity University Rajasthan ",
          role: "Secretary",
        },
        {
          id: 7,
          name: "Dr. Shyam P. Tripathy",
          image: "images/founding members/7.png",
          profession: "Member",
          location: "Mumbai",
          designation:
            "Senior Scientist Bhabha Atomic Research Center, Trombay, Mumbai",
          role: "Founding Member",
        },
        {
          id: 8,
          name: "Prof. Dr. Vandana Upadhyay",
          image: "images/founding members/8.png",
          profession: "Joint Secretary",
          location: "Itanagar",
          designation:
            "Professor, Department of Economics Rajiv Gandhi University, Itanagar, Arunachal Pradesh",
          role: "Joint Secretary",
        },
        {
          id: 9,
          name: "Prof. Dr. Dipak Sinha",
          image: "images/founding members/9.png",
          profession: "Joint Secretary",
          location: "Kohima",
          designation:
            "Professor Department of Chemistry Nagaland University India",
          role: "Founding Member",
        },
        {
          id: 10,
          name: "Prof. Dr. Swati Gupta",
          image: "images/founding members/10.png",
          profession: "Member",
          location: "Faridabad Now in USA",
          designation:
            "M.Pharm, Ph.D, Post-Doc (USA), Research Scientist, Healios Labs LLC Skillman, New Jersey, USA",
          role: "Founding Member",
        },

        {
          id: 11,
          name: "Prof. Dr. Mitali Talukdar",
          image: "images/founding members/12.jpg",
          profession: "Member",
          location: "Kolkata",
          designation: "Associate Professor Amity University, Kolkata,USA",
          role: "Founding Member",
         
        },
      
        {
          id: 12,
          name: "Ajanta Sharma",
          image: "images/founding members/13.jpg",
          profession: "Member",
          location: "Delhi, NCR",
          designation: "Vice President (Finance) PMI north India Chapter Delhi, NCR",
          role: "Founding Member",
         
        },
      
        {
          id: 13,
          name: "Dr. Nidhi Kesari",
          image: "images/founding members/14.png",
          profession: "Member",
          location: "Delhi",
          designation: "Associate professor",
          role: "Treasurer",
          
        },
      
        {
          id: 14,
          name: "Prof. Dr. Mohinder P. Mahajan",
          image: "images/founding members/15.jpg",
          profession: "Member",
          location: "Utca 2030 Erd, Hungary",
          designation: "Professor Emeritus",
          role: "Hon. Vice President",
         
        },

      
        {
          id: 15,
          name: "Dr. Rekha Dwivedi",
          image: "images/founding members/16.jpg",
          profession: "Member",
          location: "New Delhi",
          designation: "Former Director, National Foundation for Communal Harmony",
          role: "Founding Member",
         
        },
      ];

  return (
   <>
    <div className="row" style={{ display: "flex", flexWrap: "wrap" }}>
            {ourMembersData.map((member, index) => (
              <div key={index} className="foundingMembers" >
                {/* Set flex to 0 0 25% to make each box take up 25% of the container */}
                <div className="instruct_box">
                  <img
                    src={member.image}
                    className="img-responsive center-block"
                    alt=""
                  />
                  <h3>{member.name}</h3>
                  <h4>{member.designation}</h4>{" "}
                  <Link className="btn btn_new2" href={`profile/${member.id}`}>
                    View Profile
                  </Link>
                </div>
              </div>
            ))}
          </div>
   </>
  )
}

export default FoundingMembers