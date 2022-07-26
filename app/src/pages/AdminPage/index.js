import React, {useEffect, useState} from "react";
import axios from "axios";

const AdminPage = () => {
    const [users, setUsers] = useState('');
    const [loading, setLoading] = useState(false);
    const token = localStorage.getItem("accessToken");
    useEffect(() => {
        setLoading(true);

        axios.get('api/users', { headers: { Authorization:`Bearer ${token}`  }})
            .then(function (response) {
                console.log(response.data);
                //setUsers(response.data);
            })
            // .then(response => response.json())
            // .then(data => {
            //     setUsers(data);
            //     setLoading(false);
            // })
    }, []);

    return (
        <div>
            <h2>User List</h2>
            {/*{users.map(user =>*/}
            {/*    <div key={user.id}>*/}
            {/*        <table>*/}
            {/*            <tr>*/}
            {/*                <th>ID</th>*/}
            {/*                <th>Username</th>*/}
            {/*                <th>Name</th>*/}
            {/*                <th>Email</th>*/}
            {/*            </tr>*/}
            {/*            <tr>*/}
            {/*                <td>{user.id}</td>*/}
            {/*                <td>{user.userName}</td>*/}
            {/*                <td>{user.firstName} {user.lastName}</td>*/}
            {/*                <td>{user.email}</td>*/}
            {/*            </tr>*/}

            {/*        </table>*/}
            {/*    </div>*/}
            {/*)}*/}
        </div>


    )

};

export default AdminPage;
