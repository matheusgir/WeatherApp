import axios from 'axios'

export const key = 'Inclua sua chave do HG Brasil aqui'

const api = axios.create({
    baseURL: 'https://api.hgbrasil.com'
})

export default api;