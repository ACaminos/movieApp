import axios from "axios";

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'ef63bf611408077ac851eed1be11c60b',
        languaje: 'es-ES'
    }
})

export default movieDB;