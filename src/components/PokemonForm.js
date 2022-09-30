import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm() {

  cosnt [pokeName, setPokeName] = useState('')
  cosnt [pokeHp, setPokeHp] = useState(0)
  cosnt [pokeSprites, setPokeSprites] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const pokeData = {
      name: pokeName,
      hp: pokeHp,
      sprites: pokeSprites
    }
  };

  const handlePokeName = (e) => {
    e.preventDefault()
    setPokeName(e.target.value)
  };

  const handlePokeHp = (e) => {
    e.preventDefault()
    setPokeHp(e.target.value)
  };

  const handlePokeSprites = (e) => {
    e.preventDefault()
    setPokeSprites(e.target.value)
  };


  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={() => {handleSubmit}}
      >
        <Form.Group widths="equal">
          <Form.Input onChange={handlePokeName} fluid label="Name" placeholder="Name" name="name" value={pokeName} />
          <Form.Input onChange={handlePokeHp} fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input onChange={handlePokeSprites}
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={pokeSprites}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={pokeSprites}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
