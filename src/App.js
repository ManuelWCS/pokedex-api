import './App.css';
import FavoritePokemon from './components/FavoritePokemon';
import OtherPokemon from './components/OtherPokemon';
import { Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <ul className="Header">
        <li> <Link to ="/"> Charizard X</Link></li>
        <li> <Link to ="/OtherPokemon"> Other Pokemons</Link></li>
      </ul>
      <Switch>
        <Route exact path="/" component={FavoritePokemon}/>
        <Route  path="/otherpokemon" component={OtherPokemon}/>
      </Switch>
    </div>
  );
}
export default App;