import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({pokemon, setPokemon}) {

  const [pokeName, setPokeName] = useState('');
  const [pokeHp, setPokeHp] = useState(0);
  const [pokeFront, setPokeFront] = useState('');
  const [pokeBack, setPokeBack] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    const pokeData = {
      name: pokeName,
      hp: pokeHp,
      sprites: {
        front: pokeFront,
        back: pokeBack
      }
    }

    fetch('http://localhost:3001/pokemon', {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(pokeData)
    })
      .then(r => r.json())
      .then(data => setPokemon([...pokemon, data]))
  };

  const handlePokeName = (e) => {
    e.preventDefault()
    setPokeName(e.target.value)
  };

  const handlePokeHp = (e) => {
    e.preventDefault()
    setPokeHp(e.target.value)
  };

  const handlePokeFront = (e) => {
    e.preventDefault()
    setPokeFront(e.target.value)
  };

  const handlePokeBack = (e) => {
    e.preventDefault()
    setPokeBack(e.target.value)
  };

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={ handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input onChange={handlePokeName} fluid label="Name" placeholder="Name" name="name" value={pokeName} />
          <Form.Input onChange={handlePokeHp} fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input onChange={handlePokeFront}
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={pokeFront}
          />
          <Form.Input onChange={handlePokeBack}
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={pokeBack}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
