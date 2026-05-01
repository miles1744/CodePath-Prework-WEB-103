import { useEffect, useState } from 'react';
import { supabase } from '../client';
import ContentCreator from '../components/ContentCreator';
import "../App.css"
import Header from '../components/Header.jsx';


function ShowCreators() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const fetchCreators = async () => {
      const { data } = await supabase.from('creators').select();
      if (data) setCreators(data);
    };
    fetchCreators();
  }, []);

  return (
    <>
    <Header />
    <div className="creators-section">
      {creators.length === 0 ? (
        <p className="no-creators">No Creators Yet 😞</p>
      ) : (
        creators.map((creator) => (
          <ContentCreator
            key={creator.id}
            id={creator.id}
            name={creator.name}
            imageURL={creator.imageURL}
            description={creator.description}
            youtube={creator.youtube}
            twitter={creator.twitter}
            instagram={creator.instagram}
          />
        ))
      )}
    </div>
    </>
  );
}

export default ShowCreators;
