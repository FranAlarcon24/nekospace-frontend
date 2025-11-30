import axios from 'axios';

const BASE_URL = 'https://nekospace-1.onrender.com/api/MetodoEnvio';

class MetodoEnvioService {

    getAllMetodoEnvio() {
        return axios.get(BASE_URL);
    }

    getMetodoEnvioById(id) {
        return axios.get(`${BASE_URL}/${id}`);
    }

    createMetodoEnvio(Menvio) {
        return axios.post(BASE_URL, Menvio);
    }

    updateMetodoEnvio(id, Menvio) {
        return axios.put(`${BASE_URL}/${id}`, Menvio);
    }

    deleteMetodoEnvio(id) {
        return axios.delete(`${BASE_URL}/${id}`);
    }
}

export default new MetodoEnvioService();