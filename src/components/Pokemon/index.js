import React from "react";

class Pokemon extends React.Component {

  render() {
    return (
      <div className="pokemon">
        
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

export default Pokemon