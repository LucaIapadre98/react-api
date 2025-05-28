import axios from "axios";

const apiUrlActors= "https://lanciweb.github.io/demo/api/";

export default function Main(){
  axios
  .get(`${apiUrlActors}/actors`)
  .then(res=>{
    const{ data }= res
    console.log(data);
    
  })

  return (
    <main>
      <h1>Axios React</h1>
    </main>
  );
}