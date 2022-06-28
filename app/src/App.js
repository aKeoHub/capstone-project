import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import './App.css';
import Login from "./pages/login";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

function App() {



    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    const [username, setUsernameReg] = useState('');
    const [password, setPasswordReg] = useState('');
    const [firstname, setFirstnameReg] = useState('');
    const [lastname, setLastnameReg] = useState('');
    const [email, setEmailReg] = useState('');


    const [userList, setUserList] = useState([]);

    useEffect(() => {
        setLoading(true);

        fetch('api/v1/user')
            .then(response => response.json())
            .then(data => {
                setUsers(data);
                setLoading(false);
            })
    }, []);

    const getUsers = () => {
        fetch.get('http://localhost:8080/api/v1/user', {}).then((response) => {
            setUserList(response.data)
        });
    };

    const register = () => {
        fetch.post('http://localhost:8080/api/v1/user', {
            username: username,
            password: password,
        }).then(() => {
            console.log("Success");
        });
    };

    // fetch("http://localhost:8080/api/v1/user", {
    //
    //     // Adding method type
    //     method: "POST",
    //
    //     // Adding body or contents to send
    //     body: JSON.stringify({
    //         userId: userId,
    //         userName: username,
    //         password: password,
    //         firstName: firstName,
    //         lastName: lastName,
    //         email: email
    //
    //
    //     }),

    // Adding headers to the request
    //       headers: {
    //           "Content-type": "application/json; charset=UTF-8"
    //       }
    //   })
    //
    //       // Converting to JSON
    //       .then(response => response.json())
    //
    //       // Displaying results to console
    //       .then(json => console.log(json));
    //
    // if (loading) {
    //   return <p>Loading...</p>;
    // }


    return (


        <>
            {/* This is the alias of BrowserRouter i.e. Router */}
            <Router>
                <Routes>
                    {/* This route is for home component
          with exact path "/", in component props
          we passes the imported component*/}
                    {/*<Route exact path="/" element={</>}/>*/}

                    {/* This route is for about component
          with exact path "/about", in component
          props we passes the imported component*/}
                    <Route path="/login" element={<Login/>}/>

                    {/* This route is for contactus component
          with exact path "/contactus", in
          component props we passes the imported component*/}
                    <Route path="/contactus" element={<Login/>}/>

                    {/* If any route mismatches the upper
          route endpoints then, redirect triggers
          and redirects app to home component with to="/" */}

                </Routes>
            </Router>
        </>
    );
}

export default App;
