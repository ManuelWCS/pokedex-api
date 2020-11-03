import React, { Component } from 'react'
import '../components/FavoritePokemon.css'

export default class FavoritePokemon extends Component {
    state = { 
        pokemon: '',
    }

    getPokemons = () => {
        fetch("https://pokeapi.co/api/v2/pokemon/6")
        .then(res => res.json())
        .then(res => this.setState({pokemon : res}))
    }

    componentDidMount() {
        this.getPokemons()
    }
    render() {
        return (
            <div className="FavoritePokemon">
                <h1>Attrapez-les tous ! </h1>
                <h3>{this.state.pokemon.name} est mon pokémon préféré </h3>
                <img src="https://www.nicepng.com/png/detail/132-1322450_mega-charizard-x-by-saodvd-mega-dracaufeu.png" alt="kickLee" width="250px"></img>
                <p>Main ability :{this.state.pokemon.name} lol</p>
            </div>
        )
    }
}
