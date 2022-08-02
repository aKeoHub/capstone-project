import React, {useEffect, useState} from "react";
import './ForumPage.css';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
const token = localStorage.getItem("accessToken");




const ForumLayout = () => {




    const [forums, setForums] = useState([]);
    const [forum, setForum] = useState([]);
    const [forumLoaded, setForumLoaded] = useState(false);
    const [loading, setLoading] = useState(false);

    const token = localStorage.getItem("accessToken");
    const username = (localStorage.getItem('username'));
    const [user, setUser] = useState('');

    const [showAdd, setShowAdd] = useState(false);
    const handleCloseAdd = () => setShowAdd(false);
    const handleShowAdd = () => setShowAdd(true);

    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    const[showView, setShowView] = useState (new Array(forums.length).fill(false));
    const handleCloseView = (id) => setShowView(false);
    const handleShowView = (id) => setShowView(true);


    const [forumId, setForumIdReg] = useState(0);
    const [creatorId, setCreatorIdReg] = useState("");
    const [title, setTitleReg] = useState("");
    const [subTitle, setSubTitleReg] = useState("");
    const [description, setDescriptionReg] = useState("");
    const [forumCategory, setForumCategoryReg] = useState("");
    const [picture_id, setPictureId] = useState("");
    const [createDate, setCreateDate] = useState(new Date());




    useEffect(() => {
        setLoading(true);

        fetch('api/v1/forums/all',{
            headers: { 'Content-Type': 'application/json', 'Authorization':`Bearer ${token}`},
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
            //window.location.reload();
    }


    function viewForum(id) {

        fetch('api/v1/forums/get/' + id, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'Authorization':`Bearer ${token}`},
        })
            .then(response => response.json())
            .then(data => {
                setForum(data);
                setLoading(false);
                console.log(data);
                for (let i = 0; i < forums.length; i ++) {
                    for(let j = 0; j < showView.length; j ++){
                        if(showView[j] === forums[i]){
                            handleShowView(j);
                            break;
                        }
                    }
                }

            })




    }


    function editForum(forumId)  {

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
                handleShowEdit();
                setLoading(false);
                console.log(data);
            })


        // Displaying results to console






    }



    return (


        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="wrapper wrapper-content animated fadeInRight">

                        <div className="ibox-content forum-container">

                            <div className="forum-title">
                                <div className="pull-right forum-desc">
                                    <small>Total posts: {forums.length}</small>
                                </div>
                                <h3>All Forum Posts</h3>
                            </div>
                            <Button variant="primary" onClick={handleShowAdd}>
                                Add Forum
                            </Button>
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
                                    <Button variant="secondary" onClick={handleCloseAdd}>
                                        Close
                                    </Button>
                                    <Button variant="primary" onClick={addForum}>
                                        Add
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                            {forums.map(forum =>
                                <div key={forum.id}>
                                    <div className="forum-item active">

                                        <div className="row">
                                            <div className="col-md-9">
                                                <div className="forum-icon">
                                                    <i className="fa fa-shield"></i>
                                                </div>
                                                <a href="" className="forum-item-title">{forum.title}</a>
                                                <Modal className="blue-color-background" show={showView[forum.id]} onHide={() => handleCloseView(forum.forum_id)}>
                                                    <Modal.Header closeButton>
                                                        <Modal.Title >{forum.title}</Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        <h3>{forum.sub_title}</h3>
                                                        <div>{forum.description}</div>
                                                    </Modal.Body>
                                                    <Modal.Footer>
                                                        <Button variant="secondary" onClick={handleShowEdit}>
                                                            Edit
                                                        </Button>
                                                        <Button variant="primary" onClick={()=>deleteForum(forum.forum_id)}>
                                                            Delete
                                                        </Button>
                                                    </Modal.Footer>
                                                </Modal>
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
                                                                        placeholder = {forum.title}
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
                                                                        placeholder = {forum.sub_title}
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
                                                                    placeholder = {forum.description}
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
                                                                }} name="forumCategory" id="forumCategory">
                                                                    <option value="Help Needed!">Help Needed!</option>
                                                                    <option value="Announcement">Announcement</option>
                                                                    <option value="Event">Event</option>
                                                                </select>
                                                            </div>
                                                        </form>
                                                    </Modal.Body>
                                                    <Modal.Footer>
                                                        <Button variant="primary" onClick={() => editForum(forum.forum_id)}>
                                                            Edit
                                                        </Button>
                                                        <Button variant="primary" onClick={handleCloseEdit}>
                                                            Cancel
                                                        </Button>
                                                    </Modal.Footer>
                                                </Modal>
                                                <div className="forum-sub-title">{forum.sub_title}
                                                </div>
                                                <div>Forum type: {forum.forum_category}</div>

                                            </div>
                                            <div className="col-md-1 forum-info">
                            <span className="views-number">

                            </span>
                                                <div>
                                                    <small>Create Date: {forum.create_date}</small>
                                                    <Button variant="primary" onClick={()=>viewForum(forum.forum_id)}>
                                                        View
                                                    </Button>

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