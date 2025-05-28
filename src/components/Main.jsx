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
        <div className="col-3">
          <div className="card">
            <div className="card-body">
              <img src="#" alt=""></img>
            </div>
            <div className="card-header">
              <h5>titolo</h5>
              <span>data nascita</span>
              <span>nazione</span>
              <p>biografia</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}