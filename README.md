# Pokémon Availability - Client
A front-end client of a two part app for checking Pokémon availability given a selection of games. 

Written in ReactJS. Code partially generated using DeepSeek-R1 and Cline extension with Claude 3.5-Sonnet on VSCode.

You may find the Server repo [here](https://github.com/VHCosta/pokemon-availability-server).

## Known issues

* Some Pokemon are missing Evolution tags if their previous form was only obtainable by evolving. _(Example: On selecting Pokemon Red, Ivysaur is only obtainable through evolving the starter Bulbasaur, so it gets the Evolution tag. Venusaur is missing its tag.)_

## Future Plans:

* Include an option to find Unavailable Pokemon, basically inverting the output.

## Credits

* Data extracted from [PokéAPI](https://pokeapi.co/), created by [Paul Hallett](https://github.com/phalt) and other [PokéAPI contributors](https://github.com/PokeAPI/pokeapi/graphs/contributors) around the world.
* Pokémon game logos by [JorMxDos on DeviantArt](https://www.deviantart.com/jormxdos).
* Favicon by [Nikita Golubev on Flaticon.com](https://www.flaticon.com/authors/nikita-golubev).
* Pokémon and Pokémon character names are trademarks of Nintendo.