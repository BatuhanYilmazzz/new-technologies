import axios from 'axios'

export const getTodosService = () => axios.get('https://jsonplaceholder.typicode.com/posts')
