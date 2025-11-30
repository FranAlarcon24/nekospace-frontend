import axios from 'axios';

const BASE_URL = 'https://nekospace-1.onrender.com/api/SubCategoria';

class SubCategoriaService {

    getAllSubCategoria() {
        return axios.get(BASE_URL);
    }

    getSubCategoriaById(id) {
        return axios.get(`${BASE_URL}/${id}`);
    }

    createSubCategoria(subC) {
        return axios.post(BASE_URL, subC);
    }

    updateSubCategoria(id, subC) {
        return axios.put(`${BASE_URL}/${id}`, subC);
    }

    deleteSubCategoria(id) {
        return axios.delete(`${BASE_URL}/${id}`);
    }
}

export default new SubCategoriaService();