import React, {useEffect, useState} from "react";
import axios from "axios";

const ProfilePage = () => {
    const [users, setUsers] = useState('');
    const [loading, setLoading] = useState(false);
    const token = localStorage.getItem("accessToken");
    const username = (localStorage.getItem('username'));
    useEffect(() => {
        setLoading(true);
        const bodyParameters = {
            username: username,
        };

        const config = {
            headers: {Authorization: `Bearer ${token}`},
        };
        axios.post("/api/v1/user", bodyParameters, config)
            .then(function (response) {
                console.log(response.data);
                setUsers(response.data)
            })
    }, []);

    //console.log(users);

    return (
        <div className='userList'>

            <div className="container">
                <header className="jumbotron">
                    <h1>Profile</h1>
                    <h3>
                        <strong>Username:</strong>{" "}
                        {users.username}
                    </h3>
                </header>
                {/*<p>*/}
                {/*    <strong>Token:</strong>{" "}*/}

                {/*    /!*{currentUser.accessToken.substr(currentUser.accessToken.length - 20)}*!/*/}
                {/*</p>*/}
                <p>
                    <strong>ID:</strong>{" "}
                    {users.userId}
                </p>
                <p>
                    <strong>First name:</strong>{" "}
                    {users.firstname}
                </p>
                <p>
                    <strong>Last name:</strong>{" "}
                    {users.lastname}
                </p>
                <p>
                    <strong>Email:</strong>{" "}
                    {users.email}
                </p>
                <strong>Authorities:</strong>
                <ul>
                    {users.roles &&
                        users.roles.map((role, index) => <li key={index}>{role}</li>)}
                </ul>
            </div>
        </div>

    );
}

export default ProfilePage;
