import axios from 'axios';

const BASE_URL = 'https://nekospace-1.onrender.com/api/auth/register';

class UsuarioService {

    getAllUsuario() {
        return axios.get(BASE_URL);
    }

    getUsuarioById(id) {
        return axios.get(`${BASE_URL}/${id}`);
    }

    createUsuario(usuario) {
        return axios.post(`${BASE_URL}/register`, usuario);
    }

    updateUsuario(id, usuario) {
        return axios.put(`${BASE_URL}/${id}`, usuario);
    }

    deleteUsuario(id) {
        return axios.delete(`${BASE_URL}/${id}`);
    }
}

export default new UsuarioService();