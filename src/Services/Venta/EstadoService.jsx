import axios from 'axios';

const BASE_URL = 'https://nekospace-1.onrender.com/api/Estado';

class EstadoService {

    getAllEstado() {
        return axios.get(BASE_URL);
    }

    getEstadoById(id) {
        return axios.get(`${BASE_URL}/${id}`);
    }

    createEstado(estado) {
        return axios.post(BASE_URL, estado);
    }

    updateEstado(id, estado) {
        return axios.put(`${BASE_URL}/${id}`, estado);
    }

    deleteEstado(id) {
        return axios.delete(`${BASE_URL}/${id}`);
    }
}

export default new EstadoService();