import React, {useEffect, useState} from "react";
import axios from "axios";
import './Admin.styles.css'
import Button from "@material-ui/core/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";

//Component of the Admin Page shows a table on the admin page.
const AdminPage = () => {

    //Constants and sets for all the use states of variables
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const token = localStorage.getItem("accessToken");
    const username = localStorage.getItem("username");

    //Loads all the users onto the page.
    useEffect(() => {
        setLoading(true);

        axios.get('api/v1/users', {headers: {Authorization: `Bearer ${token}`}})
            .then(function (response) {
                setLoading(false);
                console.log(response.data);
                setUsers(response.data);
            })
    }, []);

    //Deletes a selected user.
    function deleteUser(id) {
        setLoading(true)
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
    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            {/* The component of the Admin Table */}
            <div className="mx-auto mb-7 px-7 py-7" style={{width: "1070px", background: "#bcc1c4"}}>
                <h1 className="text-secondary text-success mb-4">Users</h1>
                <div className="table-responsive">
                    <table className="table">
                        <tr className="bg-dark text-black">
                            <th style={{width: "2%"}}>&nbsp;ID</th>
                            <th style={{width: "9%"}}>&nbsp;Username</th>
                            <th style={{width: "16%"}}>&nbsp;First Name</th>
                            <th style={{width: "16%"}}>&nbsp;Last Name</th>
                            <th style={{width: "16%"}}>&nbsp;Email</th>
                            <th style={{width: "8%"}}>&nbsp;Delete</th>
                            {/*<th style={{width: "8%"}}>&nbsp;Edit</th>*/}
                        </tr>
                    </table>

                    {/* Maps all the user to the table */}
                    {users.map(user =>

                        <div key={user.id}>
                            <table className="table">
                                <tr>
                                    <td style={{width: "2%"}}>&nbsp;{user.user_id}</td>
                                    <td style={{width: "9%"}}>&nbsp;{user.username}</td>
                                    <td style={{width: "16%"}}>&nbsp;{user.firstname}</td>
                                    <td style={{width: "16%"}}>&nbsp;{user.lastname}</td>
                                    <td style={{width: "16%"}}>&nbsp;{user.email}</td>


                                    <td>
                                        <Button onClick={() => deleteUser(user.user_id)}
                                                style={{width: "8%"}}><FontAwesomeIcon icon={faTrash}/></Button>
                                    </td>

                                </tr>
                            </table>

                        </div>
                    )}


                </div>

            </div>
        </>

    );
}

export default AdminPage;
