import React from "react";
import PropTypes from 'prop-types';
import { handleGenerateBg } from '../../utils'

class Pokemon extends React.Component {

  render() {

    const typePokemon = handleGenerateBg(this.props.types[0])

    return (
      <div className="pokemon" style={{ background: typePokemon }}>

        <img
          className="pokemon-image"
          src={this.props.photo}
          alt={`pokemon ${this.props.name}`}
        />

        <h2>{this.props.name}</h2>

        <ul className="pokemon-info">
          <li>HP: {this.props.hp}</li>
          <li>Attack: {this.props.attack}</li>
          <li>Defense: {this.props.defense}</li>
        </ul>

        <div>
          {this.props.types.join(' / ')}
        </div>

      </div>
    )
  }
}

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  photo: PropTypes.string,
  hp: PropTypes.number.isRequired,
  attack: PropTypes.number.isRequired,
  defense: PropTypes.number.isRequired,
  types: PropTypes.arrayOf(PropTypes.string)
}

export default Pokemon