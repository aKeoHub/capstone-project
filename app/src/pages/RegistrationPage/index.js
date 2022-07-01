import React, {useEffect, useState} from "react";
import {Button, Users, Wrapper} from "./Registration.styles";

const RegistrationForm  = () => {


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

    // const getUsers = () => {
    //     fetch.get('http://localhost:8080/api/v1/user', {}).then((response) => {
    //         setUserList(response.data)
    //     });
    // };

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

        <Wrapper>

            <h1>Registration</h1>

            <label>Username:</label>

            <input type="text" onChange={(e) => {
                setUsernameReg(e.target.value);
            }}
            />

            <label>Password:</label>
            <input type="text" onChange={(e) => {
                setPasswordReg(e.target.value);
            }}
            />
            <label>FirstName:</label>
            <input type="text" onChange={(e) => {
                setFirstnameReg(e.target.value);
            }}
            />
            <label>LastName:</label>
            <input type="text" onChange={(e) => {
                setLastnameReg(e.target.value);
            }}
            />
            <label>Email:</label>
            <input type="text" onChange={(e) => {
                setEmailReg(e.target.value);
            }}
            />
            <Button>
                <button onClick={register}>Register</button>
            </Button>

            {/*<Users>*/}
            {/*    <h2>User List</h2>*/}
            {/*    {users.map(user =>*/}
            {/*        <div key={user.id}>*/}
            {/*            <table>*/}
            {/*                <tr>*/}
            {/*                    <th>ID</th>*/}
            {/*                    <th>Username</th>*/}
            {/*                    <th>Name</th>*/}
            {/*                    <th>Email</th>*/}
            {/*                </tr>*/}
            {/*                <tr>*/}
            {/*                    <td>{user.id}</td>*/}
            {/*                    <td>{user.userName}</td>*/}
            {/*                    <td>{user.firstName} {user.lastName}</td>*/}
            {/*                    <td>{user.email}</td>*/}
            {/*                </tr>*/}

            {/*            </table>*/}
            {/*        </div>*/}
            {/*    )}</Users>*/}


        </Wrapper>

    );
}

export default RegistrationForm;