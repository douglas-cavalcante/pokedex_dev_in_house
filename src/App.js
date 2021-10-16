import React from 'react';
import Pokemon from './components/Pokemon';
class App extends React.Component {

  render() {
    return (
      <div>
        <h1 className="title">Pokedex</h1>

        <div className="container-pokemons">
          <Pokemon
            name="Pikachu"
            photo="https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png"
            attack="200"
            defense="100"
            hp="1000"
            types={['grass', 'fire', 'water']}
          />
           <Pokemon
            name="Pikachu"
            photo="https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png"
            attack="200"
            defense="100"
            hp="1000"
            types={['grass', 'fire', 'water']}
          />
           <Pokemon
            name="Pikachu"
            photo="https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png"
            attack="200"
            defense="100"
            hp="1000"
            types={['grass', 'fire', 'water']}
          />
           <Pokemon
            name="Pikachu"
            photo="https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png"
            attack="200"
            defense="100"
            hp="1000"
            types={['grass', 'fire', 'water']}
          />
           <Pokemon
            name="Pikachu"
            photo="https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png"
            attack="200"
            defense="100"
            hp="1000"
            types={['grass', 'fire', 'water']}
          />
           <Pokemon
            name="Pikachu"
            photo="https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png"
            attack="200"
            defense="100"
            hp="1000"
            types={['grass', 'fire', 'water']}
          />
        </div>

      </div>
    )
  }
}

export default App;