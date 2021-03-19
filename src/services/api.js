import axios from 'axios'

//https://api.hgbrasil.com/weather?key=519be37d&lat=-23.682&lon=-46.875

export const key = '519be37d'

const api = axios.create({
    baseURL: 'https://api.hgbrasil.com'
})

export default api;