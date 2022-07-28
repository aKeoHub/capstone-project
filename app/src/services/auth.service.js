import axios from "axios";

const API_URL = "http://localhost:8080/api/";

class AuthService {

    login(username, password) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Origin', 'http://localhost:3000');

        return fetch("api/login", {
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
                if (json.access_token) {
                    localStorage.setItem("accessToken", json.access_token);
                    localStorage.setItem("username", json.username);
                    console.log(localStorage.getItem('accessToken'))
                }
            })

            .catch(error =>
                //console.log('Authorization failed: ' + error.message)
                window.location.assign("/login")
            );

    }

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
        const username = (localStorage.getItem('username'));
        const bodyParameters = {
            username: username,
        };
        let user = '';
        const config = {
            headers: { Authorization: `Bearer ${this.getToken()}` },
        };
       return axios.post("/api/user", bodyParameters, config)
            .then(function (response) {
                console.log(response.data);
                user = (response.data);
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