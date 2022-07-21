import React, {useEffect, useState} from "react";
import './login.css';
import axios from "axios";


const LoginForm = () => {


    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [username, setUsernameReg] = useState('');
    const [password, setPasswordReg] = useState('');
    const [dataResp, setData] = useState('');


    // useEffect(() => {
    //     setLoading(true);
    //
    //     fetch('api/users')
    //         .then(response => response.json())
    //         .then(data => {
    //             setUsers(data);
    //             setLoading(false);
    //         })
    // }, []);


    const sendLoginRequest = () => {

        // axios.post('/login', {
        //     username: username,
        //     password: password
        // })
        //     .then(function (response) {
        //         setData(response.data)
        //         console.log("===============" + response.data.username);
        //         console.log(data);
        //     })


        fetch("api/public/signin", {

            // Adding method type
            method: "POST",

            // Adding body or contents to send
            body: JSON.stringify({
                username: username,
                password: password
            }),


            //Adding headers to the request
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })

            // Converting to JSON
            // .then(response => {
            //     if (response.status === 201) {
            //         setData(response.data);
            //         console.log(response.formData());
            //         return Promise.all([response.json(), response.headers]);
            //     } else
            //         return Promise.reject("Invalid login attempt");
            // })
            //
            .then(response => response.json())


            // Displaying results to console
            .then(json => console.log("helloooooooooooooooooooo" + json))


        if (loading) {
            return <p>Loading...</p>;
        }
    }


    return (


        <div className="wrapper" style={{backgroundImage: 'backgroundImg.jpg'}}>
            <div className="inner">
                <form action="">
                    <h3>Login</h3>
                    <div className="form-wrapper">
                        <div className="form-wrapper">
                            <label htmlFor="">Username</label>
                            <input type="text" className="form-control" onChange={(e) => {
                                setUsernameReg(e.target.value);
                            }}/>
                        </div>
                    </div>


                    <div className="form-wrapper">
                        <label htmlFor="">Password</label>
                        <input type="password" className="form-control" onChange={(e) => {
                            setPasswordReg(e.target.value);
                        }}/>
                    </div>

                    <div>
                        {dataResp}
                    </div>

                    <div className="checkbox">
                        <label>
                            <input type="checkbox"/> I am not a human.
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <button onClick={() => sendLoginRequest()}>Login</button>
                </form>
            </div>
        </div>


    );
}

export default LoginForm;