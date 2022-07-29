import React, {useEffect, useState} from "react";
import './ForumPage.css';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";





const ForumLayout = () => {

    const [forums, setForums] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showAdd, setShowAdd] = useState(false);
    const [showView, setShowView] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const handleCloseAdd = () => setShowAdd(false);
    const handleCloseView = () => setShowView(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowAdd = () => setShowAdd(true);
    const handleShowView = () => setShowView(true);
    const handleShowEdit = () => setShowView(true);
    const [forumId, setForumIdReg] = useState("");
    const [creatorId, setCreatorIdReg] = useState("");
    const [title, setTitleReg] = useState("");
    const [subTitle, setSubTitleReg] = useState("");
    const [description, setDescriptionReg] = useState("");
    const [forumCategory, setForumCategoryReg] = useState("");
    const [picture_id, setPictureId] = useState("");


    useEffect(() => {
        setLoading(true);

        fetch('api/v1/forums/all')
            .then(response => response.json())
            .then(data => {
                setForums(data);
                setLoading(false);
                console.log(data);
            })
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    function deleteForum(id) {

            fetch('api/v1/forums/delete/' + id, {
                method: 'DELETE'
            }).then(response => response.json())
                .then(data => {
                    setLoading(false);
                    console.log(data);
                    //window.location.reload();
                })
        }
    function addForum() {
        let forumToday = new Date();
        const dd = String(forumToday.getDate()).padStart(2, '0');
        const mm = String(forumToday.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yyyy = forumToday.getFullYear();
        forumToday = yyyy + '-' + mm + '-' + dd;

        fetch("api/v1/forums/add", {

            // Adding method type
            method: "POST",

            // Adding body or contents to send
            body: JSON.stringify({
                forum_id: forumId,
                creator_id: creatorId,
                title: title,
                description: description,
                create_date: forumToday.toString(),
                picture_id: picture_id,
                sub_title: subTitle,
                forum_category: forumCategory,

            }),

            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }

        })

            // Converting to JSON
            .then(response => response.json())

            // Displaying results to console
            .then(json => console.log(json));
            //window.location.reload();
    }
    function editForum(id) {

        fetch("api/v1/forums/edit" + id, {

            // Adding method type
            method: "PUT",

            // Adding body or contents to send
            body: JSON.stringify({
                forum_id: forumId,
                creator_id: creatorId,
                title: title,
                description: description,
                picture_id: picture_id,
                sub_title: subTitle,
                forum_category: forumCategory,

            }),

            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }

        })

            // Converting to JSON
            .then(response => response.json())

            // Displaying results to console
            .then(json => console.log(json));
        //window.location.reload();
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
                            <Modal show={showAdd} onHide={handleCloseAdd}>
                                <Modal.Header  className="blue-color-background"closeButton>
                                    <Modal.Title className="blue-color-background">Creating a Forum</Modal.Title>
                                </Modal.Header>
                                <Modal.Body className="blue-color-background">
                                    <form action="">
                                        <h3>Your New Forum!</h3>
                                        <div className="form-wrapper">
                                            <div className="form-wrapper">
                                                <label htmlFor="">Creator ID</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    onChange={(e) => {
                                                        setCreatorIdReg(e.target.value);
                                                    }}
                                                />
                                            </div>
                                        </div>
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
                                            <select name="forumCategory" id="forumCategory">
                                                <option value="Help Needed!">Help Needed!</option>
                                                <option value="Announcement">Announcement</option>
                                                <option value="Event">Event</option>
                                            </select>
                                        </div>
                                    </form>
                                </Modal.Body>
                                <Modal.Footer className="blue-color-background">
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
                                        <a onClick={handleShowView} className="forum-item-title">{forum.title}</a>
                                        <Modal show={showView} onHide={handleCloseView}>
                                            <Modal.Header className="blue-color-background"closeButton>
                                                <Modal.Title className="blue-color-background">{forum.title}</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body className="blue-color-background">
                                                <h3>{forum.sub_title}</h3>
                                                <div>{forum.description}</div>
                                            </Modal.Body>
                                            <Modal.Footer className="blue-color-background">
                                                <Button variant="secondary" onClick={handleShowEdit}>
                                                    Edit
                                                </Button>
                                                <Button variant="primary" onClick={handleCloseView}>
                                                    Delete
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>
                                                <Modal show={showEdit} onHide={handleCloseEdit}>
                                                    <Modal.Header className="blue-color-background"closeButton>
                                                        <Modal.Title className="blue-color-background">Edit This forum.</Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body className="blue-color-background">
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
                                                                        placeholder ={forum.sub_title}
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
                                                                <select name="forumCategory" id="forumCategory">
                                                                    <option value="Help Needed!">Help Needed!</option>
                                                                    <option value="Announcement">Announcement</option>
                                                                    <option value="Event">Event</option>
                                                                </select>
                                                            </div>
                                                        </form>
                                                    </Modal.Body>
                                                    <Modal.Footer className="blue-color-background">
                                                        <Button variant="primary" onClick={editForum}>
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
                                        <div>Created by: {forum.creator_id.username}</div>

                                    </div>
                                    <div className="col-md-1 forum-info">
                            <span className="views-number">

                            </span>
                                        <div>
                                            <small>Create Date: {forum.create_date}</small>
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