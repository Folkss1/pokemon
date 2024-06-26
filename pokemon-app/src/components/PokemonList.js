import React from "react";
import PokemonCard from "./pokemoncard";

const PokemonList = ({ pokemons}) => {
    return (
        <div>
            {pokemons.map(pokemon => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
        </div>
    );
};

export default PokemonList;