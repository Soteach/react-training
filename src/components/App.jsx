import React from 'react';
import { Component } from 'react';
// import { ToastContainer } from 'react-toastify';
import './App.css';
import PokemonForm from './PokemonForm';

export default class App extends Component {
  // state = {
  //   pokemon: null,
  //   loading: false,
  // };

  // componentDidMount() {
  //   this.setState({ loading: true });
  //   fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  //     .then(res => res.json())
  //     .then(pokemon => this.setState({ pokemon }))
  //     .finally(() => this.setState({ loading: false }));
  // }

  render() {
    return (
      <>
        <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
          <PokemonForm />
          {/* {this.state.loading && <h1>Loading...</h1>}
          {this.state.pokemon && <div>{this.state.pokemon.name}</div>} */}
          {/* <ToastContainer autoClose={3000} /> */}
        </div>
      </>
    );
  }
}
