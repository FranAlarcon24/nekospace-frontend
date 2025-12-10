import axios from 'axios';

const BASE_URL = 'https://nekospace-1.onrender.com/api/productos';

class ProductoService {

    getAllProductos() {
        return axios.get(BASE_URL);
    }

    getProductosById(id) {
        return axios.get(`${BASE_URL}/${id}`);
    }

    createProductos(pro) {
        return axios.post(BASE_URL, pro);
    }

    updateProductos(id, pro) {
        return axios.put(`${BASE_URL}/${id}`, pro);
    }

    deleteProductos(id) {
        return axios.delete(`${BASE_URL}/${id}`);
    }
}

export default new ProductoService();