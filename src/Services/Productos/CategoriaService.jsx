import axios from 'axios';

const BASE_URL = 'https://nekospace-1.onrender.com/api/Categoria';

class CategoriaService {

    getAllCategoria() {
        return axios.get(BASE_URL);
    }

    getCategoriaById(id) {
        return axios.get(`${BASE_URL}/${id}`);
    }

    createCategoria(categoria) {
        return axios.post(BASE_URL, categoria);
    }

    updateCategoria(id, categoria) {
        return axios.put(`${BASE_URL}/${id}`, categoria);
    }

    deleteCategoria(id) {
        return axios.delete(`${BASE_URL}/${id}`);
    }
}

export default new CategoriaService();