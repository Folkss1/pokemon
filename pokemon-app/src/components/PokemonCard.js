import React from 'react';
import styled from '@emotion/styled';

const Card = styled.div`
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    margin: 8px;
    text-align: center;
`;

const PokemonCard = ({ pokemon}) => {
    return (
        <card>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <h2>{pokemon.name}</h2>
        </card>
    );
};

export default PokemonCard;
