import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../client';
import { FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';
import Header from '../components/Header';
import "../App.css"

function ViewCreator() {
  const { id } = useParams();
  const [creator, setCreator] = useState(null);

  useEffect(() => {
    const fetchCreator = async () => {
      const { data } = await supabase.from('creators').select().eq('id', id).single();
      if (data) setCreator(data);
    };
    fetchCreator();
  }, [id]);

  if (!creator) return <div className="view-page"><p>Loading...</p></div>;

  return (
    <>
      <Header />
      <div className="view-page">
      <img src={creator.imageURL} alt={creator.name} className="view-image" />
      <h1>{creator.name}</h1>
      {creator.description && <p className="view-description">{creator.description}</p>}
      {(creator.youtube || creator.twitter || creator.instagram) && (
        <div className="social-links">
          {creator.youtube && (
            <a href={`https://youtube.com/@${creator.youtube}`} target="_blank" rel="noreferrer">
              <FaYoutube /> {creator.youtube}
            </a>
          )}
          {creator.twitter && (
            <a href={`https://twitter.com/${creator.twitter}`} target="_blank" rel="noreferrer">
              <FaTwitter /> {creator.twitter}
            </a>
          )}
          {creator.instagram && (
            <a href={`https://instagram.com/${creator.instagram}`} target="_blank" rel="noreferrer">
              <FaInstagram /> {creator.instagram}
            </a>
          )}
        </div>
      )}
      <Link to={`/Edit/${id}`} className="view-btn">EDIT CREATOR</Link>
      </div>
    </>
  );
}

export default ViewCreator;
