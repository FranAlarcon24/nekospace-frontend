import axios from 'axios';

const BASE_URL = 'https://nekospace-1.onrender.com/api/Franquicia';

class FranquiciaService {

    getAllFranquicia() {
        return axios.get(BASE_URL);
    }

    getFranquiciaById(id) {
        return axios.get(`${BASE_URL}/${id}`);
    }

    createFranquicia(fran) {
        return axios.post(BASE_URL, fran);
    }

    updateFranquicia(id, fran) {
        return axios.put(`${BASE_URL}/${id}`, fran);
    }

    deleteFranquicia(id) {
        return axios.delete(`${BASE_URL}/${id}`);
    }
}

export default new FranquiciaService();