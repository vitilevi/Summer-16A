import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FilterPokemon extends Component {
  render() {
    const { handleChange, inputFilter, selectFilter } = this.props;
    return (
      <div>
          <input
            type="text"
            name="inputFilter"
            value={ inputFilter }
            placeholder="Filtre um pokemon"
            onChange={ handleChange }
          />
          <select
            name="selectFilter"
            value={ selectFilter }
            onChange={ handleChange }
          >
            <option value="name">Name</option>
            <option value="type">Type</option>
          </select>
      </div>
    );
  }
}

FilterPokemon.propTypes = {
  handleChange: PropTypes.func.isRequired,
  inputFilter: PropTypes.string.isRequired,
  selectFilter: PropTypes.string.isRequired,
};
