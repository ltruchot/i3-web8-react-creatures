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
      <h1 style={{display: "flex"}}>
        <div><img style={{width: "100px", borderRadius: "100px"}} src={creature && creature.image} /></div>
        <div>{creature && creature.nom }</div> 
      </h1>
      <p>{creature && creature.description }</p>
      <ol>
        {creature?.pouvoirs?.map((p) => <li>{p}</li>)}
      </ol>
    </div>
  );
};

export default CreatureDetailPage;
