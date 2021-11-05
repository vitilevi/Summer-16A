import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render() {
    const { name, type, image } = this.props.pokemon;
    return (
      <div className="pokemon">
        <div>
          <img src={ image } alt={ name } />
        </div>
        <div>
          <p>{ name }</p>
          <p>{ type }</p>
        </div>
      </div>
    )
  }
}

export default Pokemon;

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};