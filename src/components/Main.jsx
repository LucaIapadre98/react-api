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
      <div className="row">
        {actorsCharacters.map((character)=> (
          <div className="col-2" key={character.id}>
            <div className="card h-100 gap-2 g-5">
              <div className="card-body">
                <img src={character.image} alt={character.name}></img>
               </div>
              <div className="card-header">
                <h5 className="card-title">{character.name}</h5>
                <span className="card-age">{character.birth_year}</span>
                <span className="card-national">{character.nationality}</span>
                <p className="card-text">{character.biography}</p>
              </div>
            </div>
          </div>
        ))};
      </div>
    </main>
  );
}