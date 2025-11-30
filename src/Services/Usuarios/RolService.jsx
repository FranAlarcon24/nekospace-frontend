import axios from 'axios';

const BASE_URL = 'https://nekospace-1.onrender.com/api/Rol';

class RolService {

    getAllRol() {
        return axios.get(BASE_URL);
    }

    getRolById(id) {
        return axios.get(`${BASE_URL}/${id}`);
    }

    createRol(rol) {
        return axios.post(BASE_URL, rol);
    }

    updateRol(id, rol) {
        return axios.put(`${BASE_URL}/${id}`, rol);
    }

    deleteRol(id) {
        return axios.delete(`${BASE_URL}/${id}`);
    }
}

export default new RolService();