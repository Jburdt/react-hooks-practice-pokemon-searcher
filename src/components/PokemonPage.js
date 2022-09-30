import React, {useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage({pokemon, setPokemon}) {

  const [search, setSearch] = useState('');

  const filteredPoke = pokemon.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase())
  })
  
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm pokemon={pokemon} setPokemon={setPokemon}/>
      <br />
      <Search pokemon={pokemon} setPokemon={setPokemon} search= {search} setSearch = {setSearch}/>
      <br />
      <PokemonCollection pokemon={filteredPoke} setPokemon={setPokemon} />
    </Container>
  );
}

export default PokemonPage;
