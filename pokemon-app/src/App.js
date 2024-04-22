import React, {useState, useEffect} from "react";
import axios from 'axios';
import PokemonList from "./components/pokemonlist";

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(()=> {
    const fetchPokemons = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
        setPokemons(response.data.results);
      } catch (error) {
        console.error('Error fetching pokemons', error);
      }
    };

    fetchPokemons();
  }, []);
  return (
    <div>
      <h1>pokemon app</h1>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;