import React, {useEffect, useState} from "react";
import './ForumPage.css';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";




const ForumLayout = () => {

    const [forums, setForums] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
                    window.location.reload();
                })
        }
    function addForum() {
        let forumToday = new Date();
        const dd = String(forumToday.getDate()).padStart(2, '0');
        const mm = String(forumToday.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yyyy = forumToday.getFullYear();
        forumToday = yyyy + '-' + mm + '-' + dd;
        fetch("/api/v1/forums/add", {

            // Adding method type
            method: "POST",

            // Adding body or contents to send
            body: JSON.stringify({
                forum_id: forumId,
                creator_id: creatorId,
                title: title,
                sub_title: subTitle,
                description: description,
                picture_id: picture_id,
                forum_category: forumCategory,
                create_date: forumToday.toString(),
            }),

            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }

        })

            // Converting to JSON
            .then(response => response.json())

            // Displaying results to console
            .then(json => console.log(json));
    }
    function editForum(id) {
        fetch("/api/v1/forums/get/" + id, {

            // Adding method type
            method: "UPDATE",

        }).then(response => response.json())
            .then(data => {
                setLoading(false);
                console.log(data);
                window.location.reload();
            })
    }



return (


        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="wrapper wrapper-content animated fadeInRight">

                        <div className="ibox-content forum-container">

                            <div className="forum-title">
                                <div className="pull-right forum-desc">
                                    <samll>Total posts: 320,800</samll>
                                </div>
                                <h3>All Forum Posts</h3>
                            </div>
                            <Button variant="primary" onClick={handleShow}>
                                Add Forum
                            </Button>
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal heading</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <form action="">
                                        <h3>Registration Form</h3>
                                        <div className="form-wrapper">
                                            <div className="form-wrapper">
                                                <label htmlFor="">Creator ID</label>
                                                <input
                                                    type="text"
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
                                            <input
                                                type="text"
                                                className="form-control"
                                                onChange={(e) => {
                                                    setDescriptionReg(e.target.value);
                                                }}
                                            />
                                        </div>
                                        <div className="form-wrapper">
                                            <label htmlFor="">ForumCategory</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                onChange={(e) => {
                                                    setForumCategoryReg(e.target.value);
                                                }}
                                            />
                                        </div>
                                        <button onClick={addForum}>Add Forum</button>
                                    </form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                    <Button variant="primary" onClick={handleClose}>
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
                                        <a href="forum" className="forum-item-title">{forum.title}</a>
                                        <div className="forum-sub-title">{forum.sub_title}
                                        </div>
                                        <div>{forum.forum_category}</div>
                                    </div>
                                    <div className="col-md-1 forum-info">
                            <span className="views-number">
                                1216
                            </span>
                                        <div>
                                            <small>Views</small>
                                        </div>
                                    </div>
                                    <div className="col-md-1 forum-info">
                            <span className="views-number">
                                368
                            </span>
                                        <div>
                                            <small>
                                            <Button variant="primary" onClick={handleShow}>
                                                Edit Forum
                                            </Button>
                                            </small>

                                            <Modal show={show} onHide={handleClose}>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Modal heading</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <form action="">
                                                        <h3>Edit Your Forum</h3>
                                                        <div className="form-wrapper">
                                                            <div className="form-wrapper">
                                                                <label htmlFor="">Creator ID</label>
                                                                <input
                                                                    type="text"
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
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                onChange={(e) => {
                                                                    setDescriptionReg(e.target.value);
                                                                }}
                                                            />
                                                        </div>
                                                        <div className="form-wrapper">
                                                            <label htmlFor="">ForumCategory</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                onChange={(e) => {
                                                                    setForumCategoryReg(e.target.value);
                                                                }}
                                                            />
                                                        </div>
                                                        <button onClick={editForum}>Add Forum</button>
                                                    </form>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <Button variant="secondary" onClick={handleClose}>
                                                        Close
                                                    </Button>
                                                    <Button variant="primary" onClick={handleClose}>
                                                        Add
                                                    </Button>
                                                </Modal.Footer>
                                            </Modal>
                                        </div>
                                    </div>
                                    <div className="col-md-1 forum-info">

                                        <div>
                                            <small><button onClick={()=>deleteForum(forum.forum_id)}> Delete </button></small>
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