import { FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "../App.css"

function ContentCreator({ id, name, imageURL, description, youtube, twitter, instagram }) {
  return (
    <div className="creator-card">
      <img src={imageURL} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <div className="social-links">
        {youtube && (
          <a href={`https://youtube.com/@${youtube}`} target="_blank" rel="noreferrer">
            <FaYoutube /> {youtube}
          </a>
        )}
        {twitter && (
          <a href={`https://twitter.com/${twitter}`} target="_blank" rel="noreferrer">
            <FaTwitter /> {twitter}
          </a>
        )}
        {instagram && (
          <a href={`https://instagram.com/${instagram}`} target="_blank" rel="noreferrer">
            <FaInstagram /> {instagram}
          </a>
        )}
      </div>
      <Link to={`/View/${id}`} className="view-btn">View</Link>
    </div>
  );
}

export default ContentCreator;
