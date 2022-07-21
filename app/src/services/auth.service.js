import axios from "axios";

const API_URL = "http://localhost:8080/api";

class AuthService {
const
    login(username, password) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Origin', 'http://localhost:3000');

        return fetch("api/public/signin", {

            method: 'POST',
            body: JSON.stringify({
                username: username,
                password: password

            }),
            headers: headers
        })
            .then(response => response.json())
            .then(json => console.log(json))
            .catch(error => console.log('Authorization failed: ' + error.message));
            // .then(response => {
            //     console.log(response.json());
            //     if (response.data) {
            //         localStorage.setItem("user", JSON.stringify(response.data));
            //     }
            //     return response.data;
            // });
    }

    // login(username, password) {
    //     let headers = new Headers();
    //
    //     headers.append('Content-Type', 'application/json');
    //     headers.append('Accept', 'application/json');
    //     headers.append('Authorization', 'Basic ' + (username + ":" +  password));
    //     headers.append('Origin','http://localhost:3000');
    //
    //     fetch("http://localhost:8080/login", {
    //         mode: 'cors',
    //         credentials: 'include',
    //         method: 'POST',
    //         headers: headers
    //     })
    //         .then(response => response.json())
    //         .then(json => console.log(json))
    //         .catch(error => console.log('Authorization failed: ' + error.message));
    // }
    logout() {
        localStorage.removeItem("user");
    }

    register(username, email, password) {
        return axios.post(API_URL + "save", {
            username,
            email,
            password
        });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }

}

export default new AuthService();