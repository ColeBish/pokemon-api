// import { useState } from 'react';
import './App.css';
import axios from "axios";
import React, { useEffect, useState } from "react";

// https://pokeapi.co/api/v2/pokemon

function App() {
  const [apiData, setApiData] = useState([])

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807").then((res) => { console.log(res); setApiData(res.data.results); }).catch((err) => console.log(err))
  }, [])


  // axios.get("https://pokeapi.co/api/v2/pokemon").then((res) => console.log(res)).catch((err) => console.log(err))


  // const Example = (props) => {
  //   const [people, setPeople] = useState([]);

  //   useEffect(() => {
  //     fetch('https://pokeapi.co/api/v2/pokemon/')
  //       .then(response => response.json())
  //       .then(response => setPeople(response.results))
  //   }, []);

  //   return (
  //     <div>
  //       {people.length > 0 && people.map((person, index) => {
  //         return (<div key={index}>{person.name}</div>)
  //       })}
  //     </div>
  //   );
  // }



  // const [response, setResponse] = useState([])
  // let api = fetch("https://pokeapi.co/api/v2/pokemon");
  // setResponse(api);
  return (
    <div className="App">
      {/* <p>{response}</p> */}
      {apiData.length > 0 && apiData.map((element, index) => (
        <div key={index}>
          <p>{element.name}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
