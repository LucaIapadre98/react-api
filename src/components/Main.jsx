import axios from "axios";

const apiUrlActors= "https://lanciweb.github.io/demo/api/actors/";

export default function Main(){
  axios
  .get(apiUrlActors)
  .then(res=>
    console.log(res.data)
  )

  return (
    <main>
      <h1>Axios React</h1>
    </main>
  );
}