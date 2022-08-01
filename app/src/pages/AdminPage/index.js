import React, {useEffect, useState} from "react";
import axios from "axios";
import {Content, Wrapper} from "./Admin.styles";
import './Admin.styles.css'

const AdminPage = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const token = localStorage.getItem("accessToken");
    const username = localStorage.getItem("username");
    useEffect(() => {
        setLoading(true);

        axios.get('api/v1/users', {headers: {Authorization: `Bearer ${token}`}})
            .then(function (response) {
                console.log(response.data);
                setUsers(response.data);
            })
    }, []);



    function deleteUser(id) {
        if (!username) {
            console.log("not allowed")
        } else {
            fetch('api/v1/user/delete/' + id, {
                method: 'DELETE',
                headers: {
                    "Content-type": "application/json; charset=UTF-8", 'Authorization': `Bearer ${token}`
                }
            })
                .then(data => {
                    setLoading(false);
                    console.log(data);
                    window.location.reload();
                })
        }

    }

    return (
        <div className='userList'>
            <h2>User List</h2>
            {users.map(user =>
                <div key={user.id}>
                    <table>
                        <tr>
                            <th>ID</th>
                            <th>Username</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th></th>

                        </tr>
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.firstname} {user.lastname}</td>
                            <td>{user.email}</td>
                            <td>
                                <button onClick={() => deleteUser(user.user_id)}> Delete</button>
                            </td>
                        </tr>

                    </table>
                </div>
            )}
        </div>

    );
}

export default AdminPage;
