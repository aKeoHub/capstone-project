import React, {useEffect, useState} from "react";
import axios from "axios";

const ProfilePage = () => {
    const [users, setUsers] = useState('');
    const [loading, setLoading] = useState(false);
    const token = localStorage.getItem("accessToken");
    useEffect(() => {
        setLoading(true);
        const username = (localStorage.getItem('username'));
        const bodyParameters = {
            username: username,
        };

        const config = {
            headers: { Authorization: `Bearer ${token}` },
        };
        axios.post("/api/user", bodyParameters, config)
            .then(function (response) {
                console.log(response.data);
                setUsers(response.data)
            })
    }, []);

    return (
        <div className='userList'>
            <h2>User List</h2>
<h1>{users}</h1>
            {/*{users.map(user =>*/}
            {/*    <div key={user.id}>*/}
            {/*        <table>*/}
            {/*            <tr>*/}

            {/*                <th>Username</th>*/}
            {/*                <th>Name</th>*/}
            {/*                <th>Email</th>*/}

            {/*            </tr>*/}
            {/*            <tr>*/}

            {/*                <td>{user.username}</td>*/}
            {/*                <td>{user.firstname} {user.lastname}</td>*/}
            {/*                <td>{user.email}</td>*/}

            {/*            </tr>*/}

            {/*        </table>*/}
            {/*    </div>*/}
            {/*)}*/}
        </div>

    );
}

export default ProfilePage;
