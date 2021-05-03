import http from '../StarWarsApi'

const getLukeSkyWalker = () => {
    return http.get('/people/1')
}

const getStarWarsCharacter = (id) => {
    return http.get(`/people/${id}`)
    
}

// eslint-disable-next-line
export default {
    getLukeSkyWalker,
    getStarWarsCharacter
} 
