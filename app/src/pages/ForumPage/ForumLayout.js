import React, {useEffect, useState} from "react";
import './ForumPage.css';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import {AddButton} from "../../components/Button/AddButton";
import {ViewButton} from "../../components/Button/ViewButton";
import {EditButton} from "../../components/Button/EditButton";
import {DeleteButton} from "../../components/Button/DeleteButton";
import {CancelButton} from "../../components/Button/CancelButton";
const token = localStorage.getItem("accessToken");




const ForumLayout = () => {



// Constants that are used to set variables and the states of the variables.

    const [forums, setForums] = useState([]);
    const [loading, setLoading] = useState(false);

    const token = localStorage.getItem("accessToken");
    const username = (localStorage.getItem('username'));
    const [user, setUser] = useState('');

    const [showAdd, setShowAdd] = useState(false);
    const handleCloseAdd = () => setShowAdd(false);
    const handleShowAdd = () => setShowAdd(true);

    const [modalEditInfo, setModalEditInfo] = useState([]);
    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);


    const [modalViewInfo, setModalViewInfo] = useState([]);
    const [showView, setShowView] = useState (false);
    const handleCloseView = () => setShowView( false);
    const handleShowView = () => setShowView( true);


    const [forumId, setForumIdReg] = useState(0);
    const [creatorId, setCreatorIdReg] = useState("");
    const [title, setTitleReg] = useState("");
    const [subTitle, setSubTitleReg] = useState("");
    const [description, setDescriptionReg] = useState("");
    const [forumCategory, setForumCategoryReg] = useState("");
    const [picture_id, setPictureId] = useState("");
    const [createDate, setCreateDate] = useState(new Date());


//This will load all the forums into the forums array and display on forum page.
    useEffect(() => {
        setLoading(true);

        fetch('api/v1/forums/all',{
            headers: { 'Content-Type': 'application/json',}
        })
            .then(response => response.json())
            .then(data => {
                setForums(data);
                setLoading(false);
                console.log(data);

            })
            const bodyParameters = {
                username: username,
            };
            const config = {
                headers: {Authorization: `Bearer ${token}`},
            };
            axios.post("/api/v1/user", bodyParameters, config)
                .then(function (response) {
                    console.log(response.data);
                    setUser(response.data)
                    //console.log(user)

                })},
        []);

    if (loading) {
        return <p>Loading...</p>;
    }

//This will delete a forum when clicking the button, but you need to be logged in to do so.
    function deleteForum(id) {

        fetch('api/v1/forums/delete/' + id, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json', 'Authorization':`Bearer ${token}`},
        }).then(response => response.json())
            .then(data => {
                setLoading(false);
                console.log(data);
                window.location.reload();
            })
    }

//This will add a forum when clicking the button, but you need to be logged in to do so.
    function addForum() {
        const todaysDate = new Date();
        console.log(todaysDate.toLocaleDateString());
        setCreateDate(todaysDate);


        fetch('api/v1/forums/add', {

            // Adding method type
            method: "POST",

            // Adding body or contents to send
            body: JSON.stringify({
                forum_id: forumId,
                creator_id: user,
                title: title,
                description: description,
                create_date: todaysDate,
                picture_id: picture_id,
                sub_title: subTitle,
                forum_category: forumCategory,

            }),

            headers: { 'Content-Type': 'application/json', 'Authorization':`Bearer ${token}`},

        })

            // Converting to JSON
            .then(response => response.json())

            // Displaying results to console
            .then(json => console.log(json));
            window.location.reload();
    }

//This will make you view the forum, you do not need to be logged in to see the forum.
    const viewForum = async(id) => {

        try{
            await axios.get('api/v1/forums/get/' + id,
            ).then(function (response){
                console.log(response.data);
                setModalViewInfo(response.data);
                setModalEditInfo(response.data);
                console.log(modalViewInfo);
                handleShowView();
            })
        }catch (e) {
        }

    }



//This will edit a selected forum, you need to be logged in to do so.
    const editForum = async(forumId) => {

        fetch('api/v1/forums/edit/' + forumId, {
            method: "PUT",
            body: JSON.stringify({
                forum_id: forumId,
                creator_id: user,
                title: title,
                description: description,
                create_date: createDate,
                picture_id: picture_id,
                sub_title: subTitle,
                forum_category: forumCategory,
            }),
            headers: { 'Content-Type': 'application/json', 'Authorization':`Bearer ${token}`},
        })
            .then(response => response.json())
            .then(data => {
                setLoading(false);
                console.log(data);
                console.log(modalEditInfo);
                handleShowEdit();
                window.location.reload();
            })
    }



    return (


        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="--wrapper --wrapper-content animated fadeInRight">

                        <div className="--ibox-content --forum-container">
                            <div className="forum-title">
                                <div className="pull-right forum-desc">
                                    <small>Total posts: {forums.length}</small>
                                </div>
                                <h3>All Forum Posts</h3>
                            </div>

                            {/*Button to Show Add Forum Form */}
                            <AddButton variant="primary" onClick={handleShowAdd}>
                                Add Forum
                            </AddButton>

                            {/*The Modal for Add Forum*/}
                            <Modal className="blue-color-background" show={showAdd} onHide={handleCloseAdd}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Creating a Forum</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <form action="">
                                        <h3>Your New Forum!</h3>
                                        <div className="form-wrapper">
                                            <div className="form-wrapper">
                                                <label htmlFor="">Title</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    onChange={(e) => {
                                                        setTitleReg(e.target.value);
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-wrapper">
                                            <div className="form-wrapper">
                                                <label htmlFor="">Sub Title</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    onChange={(e) => {
                                                        setSubTitleReg(e.target.value);
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-wrapper">
                                            <label htmlFor="">Description</label>
                                            <textarea

                                                type="text"
                                                className="form-control"
                                                onChange={(e) => {
                                                    setDescriptionReg(e.target.value);
                                                }}
                                            />
                                        </div>
                                        <div className="form-wrapper">
                                            <label htmlFor="forumCategory">ForumCategory</label>
                                            <select onChange={(e) => {
                                                setForumCategoryReg(e.target.value);
                                            }}name="forumCategory" id="forumCategory">
                                                <option value="">Select a Category</option>
                                                <option value="Help Needed!">Help Needed!</option>
                                                <option value="Announcement">Announcement</option>
                                                <option value="Event">Event</option>
                                            </select>
                                        </div>
                                    </form>
                                </Modal.Body>
                                <Modal.Footer >
                                    <AddButton variant="secondary" onClick={handleCloseAdd}>
                                        Close
                                    </AddButton>
                                    <CancelButton variant="primary" onClick={addForum}>
                                        Add
                                    </CancelButton>
                                </Modal.Footer>
                            </Modal>

                            {/*Mapping every forum to the Forum Page*/}
                            {forums.map(forum =>
                                <div key={forum.id}>
                                    <div className="--forum-item active">

                                        <div className="row">
                                            <div className="col-md-9">
                                                <div className="forum-icon">
                                                    <i className="fa fa-shield"></i>
                                                </div>
                                                <a href="" className="--forum-item-title">{forum.title}</a>
                                                <div className="--forum-sub-title">{forum.sub_title}
                                                </div>
                                                <div>Forum type: {forum.forum_category}</div>
                                                <div>Create Date: {forum.create_date}</div>

                                                {/*The Modal for View Forum*/}
                                                <Modal className="blue-color-background" show={showView} onHide={handleCloseView}>
                                                    <Modal.Header closeButton>
                                                        <Modal.Title > {modalViewInfo.title}</Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        <h3>{modalViewInfo.sub_title}</h3>
                                                        <div>{modalViewInfo.description}</div>
                                                    </Modal.Body>
                                                    <Modal.Footer>
                                                        <EditButton variant="secondary" onClick={handleShowEdit}>
                                                            Edit
                                                        </EditButton>
                                                        <DeleteButton variant="primary" onClick={()=>deleteForum(modalViewInfo.forum_id)}>
                                                            Delete
                                                        </DeleteButton>
                                                    </Modal.Footer>
                                                </Modal>

                                                {/*Modal For Edit Forum*/}
                                                <Modal className="blue-color-background"show={showEdit} onHide={handleCloseEdit}>
                                                    <Modal.Header closeButton>
                                                        <Modal.Title>Edit This forum.</Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        <form action="">
                                                            <div className="form-wrapper">
                                                                <div className="form-wrapper">
                                                                    <label htmlFor="">Title</label>
                                                                    <input
                                                                        placeholder = {modalEditInfo.title}
                                                                        type="text"
                                                                        className="form-control"
                                                                        onChange={(e) => {
                                                                            setTitleReg(e.target.value);
                                                                        }}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="form-wrapper">
                                                                <div className="form-wrapper">
                                                                    <label htmlFor="">Sub Title</label>
                                                                    <input
                                                                        placeholder = {modalEditInfo.sub_title}
                                                                        type="text"
                                                                        className="form-control"
                                                                        onChange={(e) => {
                                                                            setSubTitleReg(e.target.value);
                                                                        }}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="form-wrapper">
                                                                <label htmlFor="">Description</label>
                                                                <textarea
                                                                    placeholder = {modalEditInfo.description}
                                                                    type="text"
                                                                    className="form-control"
                                                                    onChange={(e) => {
                                                                        setDescriptionReg(e.target.value);
                                                                    }}
                                                                />
                                                            </div>
                                                            <div className="form-wrapper">
                                                                <label htmlFor="forumCategory">ForumCategory</label>
                                                                <select placeholder = {modalEditInfo.forum_category}onChange={(e) => {
                                                                    setForumCategoryReg(e.target.value);
                                                                }} name="forumCategory" id="forumCategory">
                                                                    <option value="Help Needed!">Help Needed!</option>
                                                                    <option value="Announcement">Announcement</option>
                                                                    <option value="Event">Event</option>
                                                                </select>
                                                            </div>
                                                        </form>
                                                    </Modal.Body>
                                                    <Modal.Footer>
                                                        <EditButton variant="primary" onClick={() => editForum(modalEditInfo.forum_id)}>
                                                            Edit
                                                        </EditButton>
                                                        <CancelButton variant="primary" onClick={handleCloseEdit}>
                                                            Cancel
                                                        </CancelButton>
                                                    </Modal.Footer>
                                                </Modal>


                                            </div>
                                            <div className="col-md-1 --forum-info">
                            <span className="views-number">

                            </span>
                                                {/*Button For Viewing Forum*/}
                                                <div>
                                                    <ViewButton buttonStyle='--btn--primary' onClick={() => viewForum(forum.forum_id)}>
                                                        View
                                                    </ViewButton>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
}

export default ForumLayout;