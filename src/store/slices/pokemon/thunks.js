import { setPokemons, startLoadingPokemons } from "./pokemonSlice"


export const getPokemons = (page =0) => {
    return async(distpatch, getState) => {
        distpatch(startLoadingPokemons())

        //distpatch(setPokemons)
    }
    
}