import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getPokemons } from './store/slices/pokemon';

export const PokemonApp = () => {

  const distpatch = useDispatch();

  useEffect(() => {
    distpatch(getPokemons());
  }, [])
  
  return (
    <>
        <h1>Pokemon App</h1>
        <hr />
        <ul>
            <li>hola</li>
            <li>hola</li>
            <li>hola</li>
        </ul>
    </>
  )
}
