import React, {useEffect, useState} from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {EditButtonUser} from "../../components/Button/EditButtonUser";
import {CancelButtonUser} from "../../components/Button/CancelButtonUser";

const ProfilePage = () => {
    const [users, setUsers] = useState('');
    const [loading, setLoading] = useState(false);

    const [modalEditInfo, setModalEditInfo] = useState([]);
    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    const [userID, setUserID] = useState(0);
    const [userName, setUserName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [picture_id, setPictureID] = useState("");
    const [createDate, setCreateDate] = useState(new Date());

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
                setModalEditInfo(response.data);
                setUsers(response.data)
            })
    }, []);

    //console.log(users);

//Edit users
const editUser = async(userId) => {

        fetch('api/v1/user/edit/' + userId, {
            method: "PUT",
            body: JSON.stringify({
                user_id: userId,
                username: userName,
                firstname: firstName,
                lastname: lastName,
                password: password,
                email: email,
                picture_id: picture_id,
                create_date: createDate,
            }),
            headers: { 'Content-Type': 'application/json', 'Authorization':`Bearer ${token}`},
        })
            .then(response => response.json())
            .then(data => {
                setLoading(false);
                //console.log(data);
                console.log(modalEditInfo);
                handleShowEdit();
                window.location.reload();
            })
    }

    return (
        <div className='userList'>

<Modal className="blue-color-background" show={showEdit} onHide={handleCloseEdit}>
    <Modal.Header closeButton>
        <Modal.Title>Edit Your information.</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <form action="">
        <div className="form-wrapper">
            <div className="form-wrapper">
                <label htmlFor="">First Name</label>
                    <input
                        placeholder = {modalEditInfo.firstname}
                        type="text"
                        className="form-control"
                        onChange={(e) => {
                            setFirstName(e.target.value);
                        }}
                    />
            </div>
        </div>
        <div className="form-wrapper">
            <div className="form-wrapper">
                <label htmlFor="">Last Name</label>
                    <input
                        placeholder = {modalEditInfo.lastname}
                        type="text"
                        className="form-control"
                        onChange={(e) => {
                            setLastName(e.target.value);
                        }}
                    />
            </div>
        </div>
        <div className="form-wrapper">
            <label htmlFor="">Email</label>
            <textarea
                placeholder = {modalEditInfo.email}
                type="text"
                className="form-control"
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
            />
        </div>
    </form>
    </Modal.Body>
    <Modal.Footer>
    <EditButtonUser variant="primary" onClick={() => editUser(modalEditInfo.user_id)}>Edit</EditButtonUser>
    <CancelButtonUser variant="primary" onClick={handleCloseEdit}>Cancel</CancelButtonUser>
    </Modal.Footer>
</Modal>

            <div className="container">
                <header className="jumbotron">
                    <h1>Profile</h1>
                    <EditButtonUser variant="secondary" onClick={handleShowEdit}>Edit profile</EditButtonUser>
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
                    {users.user_id}
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
