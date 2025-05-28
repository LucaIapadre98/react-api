import axios from "axios";
import { useEffect, useState } from "react";

const apiUrlActors= "https://lanciweb.github.io/demo/api/";

export default function Main(){

  //DICHIARO LO USESTATE PARTENDO DALL'ARRAY VUOTO //
  const [actorsCharacters, setActorsCharacters] = useState([]);

  const charactersFunction = () => { 
    //DOMANDA AD AXIOS //
    axios.get(`${apiUrlActors}/actors`).then(res=>{
      const{ data }= res;
    
      //DESTRUTTURO PER PRENDERE LE CHIAVI CHE MI SERVONO //
      const charactersChange = data.map((character) => {
        const { id, name, birth_year, nationality, biography, image} = character;
        return { id, name, birth_year, nationality, biography, image};
      });

      setActorsCharacters(charactersChange);
    });
  };
  //DICHIARO LO USEEFFECT //
  useEffect(charactersFunction, []);

  return (
    <main>
      <h1>Axios React</h1>
      <ul>
        {actorsCharacters.map((character)=>(
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </main>
  );
}