import React, { Component } from 'react'
import data from './data';
import Pokemon from './components/Pokemon';
import FilterPokemon from './components/FilterPokemon';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemons: data,
      selectFilter: 'name',
      inputFilter: '',
    };
    this.filterPokemons = this.filterPokemons.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { value, name, localName } = target;
    if (localName === 'select') {
      this.setState({
        inputFilter: '',
      })
    }
    this.setState({
      [name]: value,
    });
  }

  filterPokemons() {
    const { pokemons, selectFilter, inputFilter } = this.state;

    return pokemons.filter((pokemon) => {
      const selectedPokemon = pokemon[selectFilter].toLowerCase()
      const input = inputFilter.toLowerCase();
      return selectedPokemon.includes(input);
    });
  }

  render () {
    const pokemons = this.filterPokemons();
    const { inputFilter, selectFilter } = this.state;
    return (
      <div className="App">
        <div>
          <FilterPokemon
            handleChange={ this.handleChange }
            inputFilter={ inputFilter }
            selectFilter={ selectFilter }
          />
        </div>
        <div className="pokemons">
          {
            pokemons.map((pokemon) => (
              <Pokemon
                key={ pokemon.id }
                pokemon={ pokemon }
              />
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;
