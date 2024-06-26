import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from './store/slices/pokemon';

export const PokemonApp = () => {

  const distpatch = useDispatch();
  const {isLoading, pokemons, page} = useSelector(state => state.pokemons)

  useEffect(() => {
    distpatch(getPokemons());
  }, [])
  
  return (
    <>
        <h1>Pokemon App</h1>
        <hr />
        <span>Loading: {isLoading?  'True': 'False'}</span>
        <ul>
            {pokemons.map(pokemon => (
              <li key={pokemon.name}>{pokemon.name}</li>
            ))}
        </ul>

        <button
          disabled= {isLoading}
          onClick={() => distpatch(getPokemons(page))}>
          Next
        </button>
    </>
  )
}
