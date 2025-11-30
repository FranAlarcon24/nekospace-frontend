import axios from 'axios';

const BASE_URL = 'https://nekospace-1.onrender.com/api/Imagen';

class ImagenService {

    getAllImagen() {
        return axios.get(BASE_URL);
    }

    getNImagenById(id) {
        return axios.get(`${BASE_URL}/${id}`);
    }

    createImagen(img) {
        return axios.post(BASE_URL, img);
    }

    updateImagen(id, img) {
        return axios.put(`${BASE_URL}/${id}`, img);
    }

    deleteImagen(id) {
        return axios.delete(`${BASE_URL}/${id}`);
    }
}

export default new ImagenService();