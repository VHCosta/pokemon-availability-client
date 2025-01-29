import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

// Game name mapping for display
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

// Method display configuration
const METHOD_CONFIG = {
  'surf': { label: 'Surf', color: '#4dabf7' },
  'super-rod': { label: 'Super Rod', color: '#f76707' },
  'gift': { label: 'Gift', color: '#40c057' },
  'walk': { label: 'Walk', color: '#74b816' },
  'old-rod': { label: 'Old Rod', color: '#f59f00' },
  'good-rod': { label: 'Good Rod', color: '#f59f00' },
  'rock-smash': { label: 'Rock Smash', color: '#868e96' },
  'headbutt': { label: 'Headbutt', color: '#a9e34b' }
};

function App() {
  const [selectedGames, setSelectedGames] = useState([]);
  const [pokemonList, setPokemonList] = useState([]);
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
      setPokemonList(response.data.pokemon);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to fetch Pokémon data');
    }
    setLoading(false);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Pokémon Availability Checker</h1>
      </header>

      <main className="main-content">
        <form onSubmit={handleSubmit} className="game-select-form">
          <fieldset>
            <legend>Select Games:</legend>
            <div className="game-checkboxes">
              {GAME_LIST.map(game => (
                <label key={game.id} className="game-checkbox-label">
                  <input
                    type="checkbox"
                    value={game.id}
                    checked={selectedGames.includes(game.id)}
                    onChange={(e) => setSelectedGames(prev =>
                      e.target.checked 
                        ? [...prev, game.id] 
                        : prev.filter(id => id !== game.id)
                    )}
                  />
                  <span className="checkmark"></span>
                  {game.name}
                </label>
              ))}
            </div>
          </fieldset>

          <button 
            type="submit" 
            className="submit-button"
            disabled={loading || !selectedGames.length}
          >
            {loading ? 'Searching...' : 'Find Pokémon'}
          </button>

          {error && <div className="error-message">{error}</div>}
        </form>

        <div className="results-section">
          <h2 className="results-heading">
            Found {pokemonList.length} Pokémon
          </h2>
          
          <div className="pokemon-grid">
            {pokemonList.map(pokemon => (
              <div key={pokemon.id} className="pokemon-card">
                <img
                  src={pokemon.sprite}
                  alt={pokemon.name}
                  className="pokemon-sprite"
                />
                
                <div className="pokemon-info">
                  <div className="pokemon-id">#{String(pokemon.id).padStart(3, '0')}</div>
                  <h3 className="pokemon-name">{pokemon.name}</h3>
                  
                  <div className="game-logos">
                    {pokemon.games.map(gameId => (
                      <img
                        key={gameId}
                        src={`/game-logos/${gameId}.png`}
                        alt={GAME_LIST.find(g => g.id === gameId)?.name || gameId}
                        className="game-logo"
                        title={GAME_LIST.find(g => g.id === gameId)?.name}
                      />
                    ))}
                  </div>

                  <div className="method-badges">
                    {pokemon.methods.map(method => {
                      const config = METHOD_CONFIG[method] || { label: method, color: '#adb5bd' };
                      return (
                        <span
                          key={method}
                          className="method-badge"
                          style={{ backgroundColor: config.color }}
                        >
                          {config.label}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;