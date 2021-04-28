import http from '../PokeonAPI'

const getPokemonCharacter = () => {
    return http.get(`/pokemon/ditto`)
    
}
const searchPokemonCharacter = (pokemon) => {
    return http.get(`pokemon/${pokemon}`)
    
}

const get100Pokemons = () => {
    return http.get(`pokemon?limit=100`)
    
}


export default {
    getPokemonCharacter,
    searchPokemonCharacter,
    get100Pokemons
} 
