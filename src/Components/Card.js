
import { Link } from "react-router-dom";

const ContactCard = (props) => {
  return (
    <div className="blog">
        <img src={props.image} className='imgLife'/>
        <h4>{props.title}</h4>
      <Link to={`/${props.id}`}>Read more</Link>
    </div>
  );
};

export default ContactCard;