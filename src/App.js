import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const GAME_LIST = [
  { id: 'red', name: 'Pokémon Red' },
  { id: 'blue', name: 'Pokémon Blue' },
  { id: 'yellow', name: 'Pokémon Yellow' },
  { id: 'gold', name: 'Pokémon Gold' },
  { id: 'silver', name: 'Pokémon Silver' },
  { id: 'crystal', name: 'Pokémon Crystal' },
  { id: 'ruby', name: 'Pokémon Ruby' },
  { id: 'sapphire', name: 'Pokémon Sapphire' },
  { id: 'emerald', name: 'Pokémon Emerald' },
  { id: 'firered', name: 'Pokémon FireRed' },
  { id: 'leafgreen', name: 'Pokémon LeafGreen' },
  { id: 'diamond', name: 'Pokémon Diamond' },
  { id: 'pearl', name: 'Pokémon Pearl' },
  { id: 'platinum', name: 'Pokémon Platinum' },
  { id: 'heartgold', name: 'Pokémon HeartGold' },
  { id: 'soulsilver', name: 'Pokémon SoulSilver' },
  { id: 'black', name: 'Pokémon Black' },
  { id: 'white', name: 'Pokémon White' },
  { id: 'black-2', name: 'Pokémon Black 2' },
  { id: 'white-2', name: 'Pokémon White 2' },
  { id: 'x', name: 'Pokémon X' },
  { id: 'y', name: 'Pokémon Y' },
  { id: 'omega-ruby', name: 'Pokémon Omega Ruby' },
  { id: 'alpha-sapphire', name: 'Pokémon Alpha Sapphire' },
  { id: 'sun', name: 'Pokémon Sun' },
  { id: 'moon', name: 'Pokémon Moon' },
  { id: 'ultra-sun', name: 'Pokémon Ultra Sun' },
  { id: 'ultra-moon', name: 'Pokémon Ultra Moon' },
  { id: 'lets-go-pikachu', name: 'Pokémon Let\'s Go, Pikachu!' },
  { id: 'lets-go-eevee', name: 'Pokémon Let\'s Go, Eevee!' },
  { id: 'sword', name: 'Pokémon Sword' },
  { id: 'shield', name: 'Pokémon Shield' },
  { id: 'brilliant-diamond', name: 'Pokémon Brilliant Diamond' },
  { id: 'shining-pearl', name: 'Pokémon Shining Pearl' },
  { id: 'legends-arceus', name: 'Pokémon Legends: Arceus' },
  { id: 'scarlet', name: 'Pokémon Scarlet' },
  { id: 'violet', name: 'Pokémon Violet' }, 
];

function App() {
  const [selectedGames, setSelectedGames] = useState([]);
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/api/pokemon', {
        versions: selectedGames
      });
      setPokemon(response.data.pokemon);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to fetch Pokémon data');
    }
    setLoading(false);
  };

  return (
    <div className="app">
      <h1>Pokémon Availability Checker</h1>
      <form onSubmit={handleSubmit}>
        <div className="game-selector">
          <h2>Select Games:</h2>
          {GAME_LIST.map(game => (
            <label key={game.id}>
              <input
                type="checkbox"
                value={game.id}
                checked={selectedGames.includes(game.id)}
                onChange={(e) => setSelectedGames(prev =>
                  e.target.checked ? [...prev, game.id] : prev.filter(id => id !== game.id)
                )}
              />
              {game.name}
            </label>
          ))}
        </div>
        <button type="submit" disabled={loading || !selectedGames.length}>
          {loading ? 'Loading...' : 'Find Available Pokémon'}
        </button>
        {error && <div className="error">{error}</div>}
      </form>

      <div className="results">
        <h2>Available Pokémon ({pokemon.length})</h2>
        <div className="pokemon-grid">
          {pokemon.map(p => (
            p.id ? (
              <div key={p.id} className="pokemon-card">
                <div className="sprite-container">
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`}
                    alt={p.name}
                  />
                </div>
                <div className="pokemon-info">
                  <div className="pokedex-number">#{p.id.toString().padStart(3, '0')}</div>
                  <div className="pokemon-name">{p.name}</div>
                  <div className="game-list">
                    {p.games.map(game => (
                      <span key={game} className="game-badge">{game}</span>
                    ))}
                  </div>
                </div>
              </div>
            ) : null
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;