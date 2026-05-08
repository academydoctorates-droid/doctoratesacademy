import React from 'react'
import Polls from '../components/Polls'
import { BASE_ASSET_URL } from '../utils';
import date from "date-and-time"

const PollsDetsilCommon = ({poll}) => {
        const options = poll.polls.options.map((option, index) => ({
          id: index,
          text: option,
          votes: poll.polls.votes[option] || 0,
        }));

        console.log("options===>",options)
        
  return (
    
    <div className="details-container" key={poll._id}>
          <div className="image-container" style={{marginTop:"5rem",display:"flex",justifyContent:"left"}}>
          <img src={`${BASE_ASSET_URL}/${poll.featured_image.filename}`} alt="Image" style={{width:"900px", }}/>
          </div>
          {/* <h3 style={{textAlign:'center'}}>{data.heading}</h3> */}
      
         <div style={{width:"300px"}}>
         <h3 >{poll.polls.question}</h3>
         <Polls question={""} options={options} id={poll._id} />
         </div>

          <div className="description-container">
            <p style={{fontSize:"18px" ,marginTop:"10px"}}>
            {poll.description}
            
            </p>
            <p className="dates">
            Start Date -{" "}
                {date.format(
                  new Date(poll.start_event_date),
                  "DD/MM/YYYY"
                )}
              <br />
              End Date -{" "}
                {date.format(
                  new Date(poll.end_event_date),
                  "DD/MM/YYYY"
                )}
            </p>
          </div>
        </div>



    // <div className="blue_box">
                  
    //                 <div>
                    
    //                   <div className="blue_item_wrap">
    //                     <div className="blue_left flex-child">
    //                       {" "}
    //                       <img
    //                         src={`${BASE_ASSET_URL}/${poll.featured_image.filename}`}
    //                         className="img-responsive"
    //                         alt=""
    //                       />{" "}
    //                     </div>
    //                     <div
    //                       className="blue_right flex-child-1"
    //                       style={{ width: "50%" }}
    //                     >
    //                       <h5>{poll.short_description}</h5>
    //                       <p
    //                         style={{
    //                           fontSize: "2rem",
    //                           marginBottom: 15,
    //                           paddingBottom: 0,
    //                         }}
    //                       >
    //                         {poll.polls.question}
    //                       </p>
    //                       <div>
    //                         {/* <p>{event.polls.question}</p>
    //                         {event.polls.options.map((option) => (
    //                           <>
    //                             <input
    //                               type="radio"
    //                               id={option}
    //                               value={option}
    //                             />
    //                               <label htmlFor={option}>{option}</label>
    //                             <br></br>
    //                           </>
                              
    //                         ))} */}
    //                         <Polls question={""} options={options} id={poll._id} />
    //                       </div>
    //                       <h6>
    //                         Valid till -{" "}
    //                         {date.format(
    //                           new Date(poll.polls.expire_on),
    //                           "DD/MM/YYYY"
    //                         )}
    //                       </h6>
                        
    //                     </div>
    //                   </div>
    //                   <div className="clearfix" />
    //                 </div>
              

    //               <div className="clearfix" />
    // </div>



  )
}

export default PollsDetsilCommon