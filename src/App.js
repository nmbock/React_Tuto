import { useState } from "react";

function App() {
  // state (états données)
  const [compteur, setCompteur] = useState(1); // compteur = 1 et setCompteur est son setter

  // comportement
  const handleClick = () => {
    setCompteur(compteur +1); // react modifie l'affichage par lui-même + sans le setter la bonne valeur n'est oas affiché
    console.log(compteur);
  };


  // affichage (render)
  return (
    <div>
      <h1>{compteur}</h1>
      <button onClick={handleClick}>Incrémente</button>
    </div>
  );
}

export default App;
