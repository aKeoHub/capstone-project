import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'http://localhost:8080/api/v1';
class UserService {
    getCurrentUser(username) {
        const token = localStorage.getItem("accessToken");
        const bodyParameters = {
            username: username,
        };

        const config = {
            headers: {Authorization: `Bearer ${token}`},
        };
        let user = null;
    return axios.post("/api/v1/user", bodyParameters, config)
    }
    getUserBoard() {
        return axios.get(API_URL + 'user', { headers: authHeader() });
    }


    // getModeratorBoard() {
    //     return axios.get(API_URL + 'mod', { headers: authHeader() });
    // }
    // getAdminBoard() {
    //     return axios.get(API_URL + 'admin', { headers: authHeader() });
    // }
}
export default new UserService();