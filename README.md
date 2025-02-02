# Pokémon Availability - Client
A frontend client of a two part app for checking Pokémon availability given a selection of games. 

This project is written in ReactJS. Parts of the code were generated using [DeepSeek-R1](https://chat.deepseek.com/) and the [Cline](https://cline.bot/) extension with [Claude 3.5-Sonnet](https://claude.ai/) in Visual Studio Code (VSCode).

### Server
You may find the Server repo [here](https://github.com/VHCosta/pokemon-availability-server).

## Known bugs/issues/things to improve

* Filtering Slot 2 data is currently handled in the frontend rendering logic with some if-statements. Toggling Gen 3 games on/off allows you to see this behavior in realtime. For example, if Caterpie is available in Pearl with FireRed in Slot 2, you should see "Slot 2 (FireRed)" when both FireRed and Pearl are selected. This verification should be moved to the backend, unless enough interest in the current functionality is voiced.

## Future Plans:

* Include an option to find Unavailable Pokemon, basically "inverting" the output.

## Credits

* Data extracted from [PokéAPI](https://pokeapi.co/), created by [Paul Hallett](https://github.com/phalt) and other [PokéAPI contributors](https://github.com/PokeAPI/pokeapi/graphs/contributors) around the world.
* Pokémon game logos by [JorMxDos on DeviantArt](https://www.deviantart.com/jormxdos).
* Favicon by [Nikita Golubev on Flaticon.com](https://www.flaticon.com/authors/nikita-golubev).
* Pokémon and Pokémon character names are trademarks of Nintendo.