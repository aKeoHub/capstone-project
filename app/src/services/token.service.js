import axios from "axios";

class TokenService {

    getRefreshToken() {
        const token = (localStorage.getItem('refreshToken'));

        // //let user = '';
        // const config = {
        //     headers: {Authorization: `Bearer ${token}`},
        // };
        // return axios.get("/api/v1/token/refresh", config)
        //     .then(function (response) {
        //         //console.log(response.data);
        //         //user = (response.data);
        //     }).catch((err) => console.log(err));

       return fetch('api/v1/token/refresh', {
            headers: { 'Content-Type': 'application/json', 'Authorization':`Bearer ${token}`},
        })
            .then(response => response.json())
            .then(data => {
                return data;
            })
    }
}

export default new TokenService();