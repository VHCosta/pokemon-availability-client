// PokemonCard.js component
import React from 'react';

const PokemonCard = ({ pokemon }) => (
  <div className="pokemon-card">
    <img src={pokemon.sprite} alt={pokemon.name} className="artwork" />
    <div className="details">
      <div className="dex-number">#{pokemon.id.toString().padStart(3, '0')}</div>
      <h3 className="name">{pokemon.name}</h3>
      
      <div className="game-logos">
        {pokemon.games.map(game => (
          <img 
            key={game} 
            src={`/game-logos/${game}.png`} 
            alt={game} 
            className="game-logo"
          />
        ))}
      </div>
      
      <div className="encounter-methods">
        {pokemon.methods.map(method => (
          <span key={method} className={`method ${method}`}>
            {method.replace(/-/g, ' ')}
          </span>
        ))}
      </div>
    </div>
  </div>
);