import Image1 from "../../../assets/images/create-meeting/1.png";
import Image2 from "../../../assets/images/create-meeting/2.png";
import Image3 from "../../../assets/images/create-meeting/3.png";
import Image4 from "../../../assets/images/create-meeting/4.png";
import Image5 from "../../../assets/images/create-meeting/5.png";
 import "./CreateEventModal.css";


 const guestsAddedData = [
    {
        avatar: Image1,
    },
    {
        avatar: Image2,
    },
    {
        avatar: Image3,
    },
    {
        avatar: Image4,
    },
    {
        avatar: Image5,
    },
]

const GuessAdded = (props) => {

    return (
        <div className="guestsAdded__box">
         {guestsAddedData.map((guestsAdded) => (
            <div className="guestsAdded__box-img">
                <svg style={{cursor: "pointer"}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="12" fill="#D9DAD7"  />
                    <path d="M16.6663 8.27301L15.7263 7.33301L11.9997 11.0597L8.27301 7.33301L7.33301 8.27301L11.0597 11.9997L7.33301 15.7263L8.27301 16.6663L11.9997 12.9397L15.7263 16.6663L16.6663 15.7263L12.9397 11.9997L16.6663 8.27301Z" fill="#808080"/>
                </svg>
                <img src={guestsAdded.avatar} alt="guestsAdded__" />
            </div>
            ))}
        </div>
    );
}

export default GuessAdded;