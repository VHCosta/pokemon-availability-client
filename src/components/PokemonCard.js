// PokemonCard.js component
import React from 'react';

const GAME_NAMES = {
    red: 'Pokémon Red',
    blue: 'Pokémon Blue',
    yellow: 'Pokémon Yellow',
    gold: 'Pokémon Gold',
    silver: 'Pokémon Silver',
    crystal: 'Pokémon Crystal',
    ruby: 'Pokémon Ruby',
    sapphire: 'Pokémon Sapphire',
    emerald: 'Pokémon Emerald',
    firered: 'Pokémon FireRed',
    leafgreen: 'Pokémon LeafGreen',
    diamond: 'Pokémon Diamond',
    pearl: 'Pokémon Pearl',
    platinum: 'Pokémon Platinum',
    heartgold: 'Pokémon HeartGold',
    soulsilver: 'Pokémon SoulSilver',
    black: 'Pokémon Black',
    white: 'Pokémon White',
    'black-2': 'Pokémon Black 2',
    'white-2': 'Pokémon White 2',
    x: 'Pokémon X',
    y: 'Pokémon Y',
    'omega-ruby': 'Pokémon Omega Ruby',
    'alpha-sapphire': 'Pokémon Alpha Sapphire',
    sun: 'Pokémon Sun',
    moon: 'Pokémon Moon',
    'ultra-sun': 'Pokémon Ultra Sun',
    'ultra-moon': 'Pokémon Ultra Moon',
    'lets-go-pikachu': "Pokémon Let's Go, Pikachu!",
    'lets-go-eevee': "Pokémon Let's Go, Eevee!",
    sword: 'Pokémon Sword',
    shield: 'Pokémon Shield',
    'brilliant-diamond': 'Pokémon Brilliant Diamond',
    'shining-pearl': 'Pokémon Shining Pearl',
    'legends-arceus': 'Pokémon Legends: Arceus',
    scarlet: 'Pokémon Scarlet',
    violet: 'Pokémon Violet'
};

const PokemonCard = ({ pokemon }) => {
    return (
        <div className="pokemon-card">
            <img
                src={pokemon.sprite}
                alt={pokemon.name}
                className="pokemon-artwork"
            />
            <div className="pokemon-info">
                <div className="pokedex-number">#{pokemon.id.toString().padStart(3, '0')}</div>
                <h3 className="pokemon-name">{pokemon.name}</h3>

                <div className="game-logos">
                    {pokemon.games.map(game => (
                        <img
                            key={game}
                            src={`/game-logos/${game}.png`}
                            alt={game}
                            className="game-logo"
                            title={GAME_NAMES[game] || game} // Add a GAME_NAMES mapping constant
                        />
                    ))}
                </div>

                <div className="encounter-methods">
                    {pokemon.methods.map(method => (
                        <span
                            key={method}
                            className={`method-badge method-${method.replace(' ', '-')}`}
                        >
                            {method.replace(/-/g, ' ')}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

