import React, {useEffect, useState} from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {EditButtonUser} from "../../components/Button/EditButtonUser";
import {CancelButtonUser} from "../../components/Button/CancelButtonUser";
import './Profile.css';
import TokenService from "../../services/token.service";

const ProfilePage = () => {
    const [user, setUser] = useState([]);
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
                setUser(response.data);
                setModalEditInfo(response.data);
                console.log(user);
            }).catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                //window.location.replace("/login")

                console.log(error.response.data);
                let expiredToken = error.response.data;
                //console.log(expiredToken.error_message);

                if(expiredToken.error_message.startsWith('expired', 14)){
                    console.log('hello')
                 TokenService.getRefreshToken()
                     .then(json => {
                         console.log(json)
                         localStorage.setItem("accessToken", json.accessToken);
                         localStorage.setItem("refreshToken", json.refreshToken)
                     })
                }

                //console.log(error.response.status);
                //console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);
        });
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
            //.then(response => response.json())
            .then(data => {
                setLoading(false);
                console.log(data);
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
            <section className="bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mb-4 mb-sm-5">
                            <div className="card card-style1 border-0">
                                <div className="card-body p-1-9 p-sm-2-3 p-md-6 p-lg-7">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 mb-4 mb-lg-0">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="..." />
                                        </div>
                                        <div className="col-lg-6 px-xl-10">
                                            <div
                                                className="bg-secondary d-lg-inline-block py-1-9 px-1-9 px-sm-6 mb-1-9 rounded">
                                                <h3 className="h2 text-white mb-0">{user.username}</h3>
                                            </div>
                                            <ul className="list-unstyled mb-1-9">
                                                <li className="mb-2 mb-xl-3 display-28"><span
                                                    className="display-26 text-secondary me-2 font-weight-600">First Name:</span> {user.firstname}
                                                </li>
                                                <li className="mb-2 mb-xl-3 display-28"><span
                                                    className="display-26 text-secondary me-2 font-weight-600">Last Name:</span> {user.lastname}
                                                </li>
                                                <li className="mb-2 mb-xl-3 display-28"><span
                                                    className="display-26 text-secondary me-2 font-weight-600">Email:</span> {user.email}
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                    <EditButtonUser variant="secondary" onClick={handleShowEdit}>Edit profile</EditButtonUser>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </section>


        </div>

    );
}

export default ProfilePage;
