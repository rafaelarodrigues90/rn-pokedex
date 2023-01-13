import axios from 'axios'

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
  transformResponse: [(response) => JSON.parse(response)],
})

export default api
