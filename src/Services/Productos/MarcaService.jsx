import axios from 'axios';

const BASE_URL = 'https://nekospace-1.onrender.com/api/Marca';

class MarcaService {

    getAllMarca() {
        return axios.get(BASE_URL);
    }

    getMarcaById(id) {
        return axios.get(`${BASE_URL}/${id}`);
    }

    createMarca(marca) {
        return axios.post(BASE_URL, marca);
    }

    updateMarca(id, marca) {
        return axios.put(`${BASE_URL}/${id}`, marca);
    }

    deleteMarca(id) {
        return axios.delete(`${BASE_URL}/${id}`);
    }
}

export default new MarcaService();