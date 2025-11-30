import axios from 'axios';

const BASE_URL = 'https://nekospace-1.onrender.com/api/MetodoPago';

class MetodoPagoService {

    getAllMetodoPago() {
        return axios.get(BASE_URL);
    }

    getMetodoPagoById(id) {
        return axios.get(`${BASE_URL}/${id}`);
    }

    createMetodoPago(Mpago) {
        return axios.post(BASE_URL, Mpago);
    }

    updateMetodoPago(id, Mpago) {
        return axios.put(`${BASE_URL}/${id}`, Mpago);
    }

    deleteMetodoPago(id) {
        return axios.delete(`${BASE_URL}/${id}`);
    }
}

export default new MetodoPagoService();