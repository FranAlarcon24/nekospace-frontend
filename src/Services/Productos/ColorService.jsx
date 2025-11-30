import axios from 'axios';

const BASE_URL = 'https://nekospace-1.onrender.com/api/Color';

class ColorService {

    getAllColor() {
        return axios.get(BASE_URL);
    }

    getColorById(id) {
        return axios.get(`${BASE_URL}/${id}`);
    }

    createColor(color) {
        return axios.post(BASE_URL, color);
    }

    updateColor(id, color) {
        return axios.put(`${BASE_URL}/${id}`, color);
    }

    deleteColor(id) {
        return axios.delete(`${BASE_URL}/${id}`);
    }
}

export default new ColorService();