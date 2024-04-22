import React, {useState, useEffect} from "react";
import axios from 'axios';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(()=> {
    axios.get('https://pokeapi.co/api/v2/pokemon')
    .then(Response => {
      setPokemonList(Response.data.results);
    })
    .catch(error => {
      console.error('error fetching Pokemon:' , error);
    });
  }, []);
  
  const getPokemonDetalis = (url) => {
    axios.get(url)
    .then(Response => {
      setSelectedPokemon(Response.data);
    })
    .catch(error => {
      console.error('error fetching Pokemon details:' , error);
    });
  };

  return (
    <div className="App">
      <h1>pokemon app</h1>
      <div className="poekemon-list">
        <h2>pokemon list</h2>
        <ul>
          {pokemonList.map((pokemon, index) => (
            <li key={index} onClick={() => getPokemonDetalis(pokemon.url)}>
              {pokemon.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="pokemon-details">
        <h2>pokemon details</h2>
        {selectedPokemon && (
          <div>
            <p>name: {selectedPokemon.name}</p>
            <p>height: {selectedPokemon.height}</p>
            <p>weight: {selectedPokemon.weight}</p>
            <p>abilities:</p>
            <ul>
              {selectedPokemon.abilities.map((ability, index) => (
                <li key={index}>{ability.ability.name}</li>
              ))}
            </ul>
            <img src={selectedPokemon.sprites.front_default} alt={selectedPokemon.name}/>
      </div>
      )}
    </div>
  </div>
  );
}

export default App;