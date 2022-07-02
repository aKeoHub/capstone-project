import React, {useEffect, useState} from "react";
import {Button, Users, Wrapper} from "./Registration.styles";
import './register.css';

const Form  = () => {


    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    const [id, setIdReg] = useState('');
    const [userName, setUsernameReg] = useState('');
    const [password, setPasswordReg] = useState('');
    const [firstName, setFirstnameReg] = useState('');
    const [lastName, setLastnameReg] = useState('');
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


    const register = () => {

        fetch("/api/v1/user", {

            // Adding method type
            method: "POST",

            // Adding body or contents to send
            body: JSON.stringify({
                id: id,
                userName: userName,
                password: password,
                firstName: firstName,
                lastName: lastName,
                email: email,
            }),

            //Adding headers to the request
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })

            // Converting to JSON
            .then(response => response.json())

            // Displaying results to console
            .then(json => console.log(json));

        if (loading) {
            return <p>Loading...</p>;
        }
    }
    return (


            <div className="wrapper" style={{backgroundImage: 'backgroundImg.jpg'}}>
                <div className="inner">
                    <form action="">
                        <h3>Registration Form</h3>
                        <div className="form-wrapper">
                            <div className="form-wrapper">
                                <label htmlFor="">Username</label>
                                <input type="text" className="form-control" onChange={(e) => {
                                    setUsernameReg(e.target.value);
                                }}/>
                            </div>
                        </div>
                        <div className="form-wrapper">
                            <div className="form-wrapper">
                                <label htmlFor="">First Name</label>
                                <input type="text" className="form-control" onChange={(e) => {
                                    setFirstnameReg(e.target.value);
                                }}/>
                            </div>
                        </div>
                        <div>
                            <div className="form-wrapper">
                                <label htmlFor="">Last Name</label>
                                <input type="text" className="form-control" onChange={(e) => {
                                    setLastnameReg(e.target.value);
                                }}/>
                            </div>
                        </div>
                        <div className="form-wrapper">
                            <label htmlFor="">Email</label>
                            <input type="text" className="form-control" onChange={(e) => {
                                setEmailReg(e.target.value);
                            }}/>
                        </div>
                        <div className="form-wrapper">
                            <label htmlFor="">Password</label>
                            <input type="password" className="form-control" onChange={(e) => {
                                setPasswordReg(e.target.value);
                            }}/>
                        </div>
                        <div className="form-wrapper">
                            <label htmlFor="">Confirm Password</label>
                            <input type="password" className="form-control" onChange={(e) => {
                                setPasswordReg(e.target.value);
                            }}/>
                        </div>
                        <div className="checkbox">
                            <label>
                                <input type="checkbox"/> I accept the Terms of Use & Privacy Policy.
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <button onClick={register}>Register Now</button>
                    </form>
                </div>
            </div>


    );
}

export default Form;