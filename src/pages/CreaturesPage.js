import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';

const CreaturesPage = () => {
  // requete vers le backend
  const [creatures, setCreatures] = useState([]);
  useEffect(() => {
    fetch('data/creatures.json')
      .then((r) => r.json())
      .then((data) => {
        setCreatures(data);
      });
  }, []);

  return (
    <ul>
      {
        creatures.length === 0
          ? 'Loading...'
          : creatures.map((item) => (
            <li key={item.id}>
              <Link to={`/creature/${item.id}`}>{item.nom}</Link>
            </li>
          ))
      }
    </ul>
  );
};

export default CreaturesPage;
