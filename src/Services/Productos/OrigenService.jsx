import axios from 'axios';

const BASE_URL = 'https://nekospace-1.onrender.com/api/Origen';

class OrigenService {

    getAllOrigen() {
        return axios.get(BASE_URL);
    }

    getOrigenById(id) {
        return axios.get(`${BASE_URL}/${id}`);
    }

    createOrigen(origen) {
        return axios.post(BASE_URL, origen);
    }

    updateOrigen(id, origen) {
        return axios.put(`${BASE_URL}/${id}`, origen);
    }

    deleteOrigen(id) {
        return axios.delete(`${BASE_URL}/${id}`);
    }
}

export default new OrigenService();