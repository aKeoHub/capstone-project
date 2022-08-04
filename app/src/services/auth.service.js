import axios from "axios";
import {Redirect} from "react-router-dom";
import TokenService from "./token.service";

const API_URL = "http://localhost:8080/api/v1";

class AuthService {

    login(username, password) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Origin', 'http://localhost:3000');

        return fetch("api/v1/login", {
            method: 'POST',
            body: JSON.stringify({
                username: username,
                password: password
            }),
            headers: headers
        })
            .then(response => response.json())
            .then(json => {
                //console.log(json.access_token)
                if (json.accessToken) {
                    localStorage.setItem("accessToken", json.accessToken);
                    localStorage.setItem("refreshToken", json.refreshToken);
                    localStorage.setItem("username", json.username);
                    //console.log('logged in' + localStorage.getItem('accessToken'))
                }
                return json.data
            })


    }
    handleErrors(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }


    logout() {
        localStorage.clear();
        window.location = '/login';
    }

    register(username, email, password) {
        return axios.post(API_URL + "save", {
            username,
            email,
            password
        });
    }

    getCurrentUser() {
        const username = (localStorage.getItem('username'));
        const bodyParameters = {
            username: username,
        };
        //let user = '';
        const config = {
            headers: { Authorization: `Bearer ${this.getToken()}` },
        };
       return axios.post("/api/v1/user", bodyParameters, config)
            .then(function (response) {
                console.log(response.data);
                //user = (response.data);
            }).catch((err) => console.log(err));


    };
//         const username = (localStorage.getItem('username'));
// //console.log(username);
//         return axios.get('api/user', { "body": username },
//         {
//             headers: {
//                 Authorization: `Bearer ${this.getToken()}`
//             }
//         })
//             .then(function (response) {
//                 console.log(response.data);
//             })
//         return axios.get(API_URL + "user", {
//             params: {
//                 username: username
//             }
//         });
//    }

    getToken() {
        return (localStorage.getItem('accessToken'));
    }

}

export default new AuthService();