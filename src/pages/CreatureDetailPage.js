import React, { useState, useEffect } from 'react';

const CreatureDetailPage = ({ id }) => {
  // requete vers le backend

  const [creature, setCreature] = useState(null);
  useEffect(() => {
    fetch(`/data/${id}.json`)
      .then((r) => r.json())
      .then((data) => {
        setCreature(data);
      });
  }, []);

  return (
    <div>
      {creature && creature.nom }
    </div>
  );
};

export default CreatureDetailPage;
