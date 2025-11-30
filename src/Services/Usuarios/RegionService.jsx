import axios from 'axios';

const BASE_URL = 'https://nekospace-1.onrender.com/api/Region';

class RegionService {

    getAllRegion() {
        return axios.get(BASE_URL);
    }

    getRegionById(id) {
        return axios.get(`${BASE_URL}/${id}`);
    }

    createRegion(reg) {
        return axios.post(BASE_URL, reg);
    }

    updateRegion(id, reg) {
        return axios.put(`${BASE_URL}/${id}`, reg);
    }

    deleteRegion(id) {
        return axios.delete(`${BASE_URL}/${id}`);
    }
}

export default new RegionService();