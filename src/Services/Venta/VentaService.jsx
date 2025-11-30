import axios from 'axios';

const BASE_URL = 'https://nekospace-1.onrender.com/api/Venta';

class VentaService {

    getAllVenta() {
        return axios.get(BASE_URL);
    }

    getVentaById(id) {
        return axios.get(`${BASE_URL}/${id}`);
    }

    createVenta(vent) {
        return axios.post(BASE_URL, vent);
    }

    updateVenta(id, vent) {
        return axios.put(`${BASE_URL}/${id}`, vent);
    }

    deleteVenta(id) {
        return axios.delete(`${BASE_URL}/${id}`);
    }
}

export default new VentaService();