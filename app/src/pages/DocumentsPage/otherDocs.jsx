import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import Button from '@material-ui/core/Button';
import axios from "axios";
import DocModal from './docModal'


const OtherDocs = () => {
    const [documents, setDocuments] = useState([]);
    const [loading, setLoading] = useState(false);
    const [downloadLink, setDownloadLinks] = useState([]);
    const token = localStorage.getItem("accessToken");
    const username = (localStorage.getItem('username'));
    const [user, setUser] = useState('');
    const [file, setFile] = useState();

     const onUploadFile = e => {

        //console.log('file: ', file);
        //console.log(e.target.files[0]);

        const formData = new FormData();
        const bodyParameters = {
            body: formData
        };
        const config = {
            headers: {Authorization: `Bearer ${token}`},
        };
        formData.append('file', e.target.files[0])
        fetch('api/v1/uploadFile', {
            method: 'POST',
            headers: {
                'Accept': 'application/json', 'Authorization': `Bearer ${token}`,
            },
            body: formData
        })
            .then(response => response.json())
                .then(data => {
                    setLoading(false);
                    window.location.reload();
                })
      }
    // const GetDownloadUrl = (fileName) => {
    //     const config = {
    //         headers: {Authorization: `Bearer ${token}`},
    //     };
    //     return axios.get("/api/v1/downloadFile/" + fileName, config)
    //         .then(function (response) {
    //             console.log(response.data);
    //             setDownloadUrl(response.data)
    //             //console.log(user)
    //         })
    // }

    useEffect(() => {
        setLoading(true);
        const bodyParameters = {
            username: username,
        };
        const config = {
            headers: { Authorization: `Bearer ${token}` },
        };
        axios.post("/api/v1/user", bodyParameters, config)
            .then(function (response) {
                console.log(response.data);
                setUser(response.data)
                setLoading(false);
                //console.log(user)
            })

        fetch('api/v1/documents/all', {
            headers: { 'Content-Type': 'application/json'},
        })
            .then(response => response.json())
            .then(data => {
                setDocuments(data);
                setLoading(false);
            })

        fetch('api/v1/files', {
            headers: { 'Content-Type': 'application/json'},
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setDownloadLinks(data);
                //console.log(downloadLink.find((x => x.name === 'CMPS369Lab8MemoryUsage%20(1).pdf')))
                setLoading(false);
            })

    }, []);


    if (loading) {
        return <p>Loading...</p>;
    }

    function deleteDocument(id) {

        fetch('api/v1/documents/delete/' + id, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        }).then(response => response.json())
            .then(data => {
                setLoading(false);
                console.log(data);

            })
    }

    function deleteFile(filename) {

        fetch('/api/v1/deleteFile/' + filename, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        })
            .then(data => {
                setLoading(false);
                console.log(data);

            })
    }

    function updateDocument(did, cid, dname, date, desc, file) {
        fetch('api/v1/documents/edit/' + did)
    }


    return (
        <>

            <div className="mx-auto mb-7 px-7 py-7" style={{ width: "1070px", background: "#bcc1c4" }}>
                <h1 className="text-secondary text-success mb-4">Documents</h1>
                <div className="table-responsive">
                    <table className="table">
                        <tr className="bg-dark text-black">
                            <th style={{ width: "9%", textAlign: "center" }}>&nbsp;Doc Id</th>
                            <th style={{ width: "9%", textAlign: "center" }}>&nbsp;Doc Cat</th>
                            <th style={{ width: "25%", textAlign: "center" }}>&nbsp;Doc Name</th>
                            <th style={{ width: "16%", textAlign: "center" }}>&nbsp;Date Created</th>
                            <th style={{ width: "18%", textAlign: "center" }}>&nbsp;Description</th>
                            <th style={{ width: "8%", textAlign: "center" }}>&nbsp;Delete</th>
                            <th style={{ width: "8%", textAlign: "center" }}>&nbsp;Edit</th>
                        </tr>
                    </table>
                    {documents.map(park_document =>

                        <div key={park_document.id}>
                            <table className="table">
                                <tr>
                                    <td style={{ width: "9%", textAlign: "center" }}>&nbsp;{park_document.document_id}</td>
                                    <td style={{ width: "9%", textAlign: "center" }}>&nbsp;{park_document.document_category}</td>
                                    <td style={{ width: "25%" }}><span
                                        id={park_document.document_name}>{park_document.document_name}</span><input
                                            id={park_document.document_id} type="text"
                                            style={{ display: "none", width: "67%" }} /></td>
                                    <td style={{ width: "16%", textAlign: "center" }}>&nbsp;{park_document.create_date}</td>
                                    <td style={{ width: "18%" }}><span
                                        id={park_document.description}>{park_document.description}</span><input
                                            id={park_document.document_id + "a"} type="text"
                                            style={{ display: "none", width: "67%" }} /></td>

                                    {/*<td style={{width: "12%"}}><a href={downloadLink.find(element => element.fileId === 0)} >Link</a></td>*/}
                                    <td>
                                        <Button onClick={() => {deleteDocument(park_document.document_id);
                                        window.location.reload();}}
                                            style={{ width: "100%" }}><FontAwesomeIcon icon={faTrash} /></Button>
                                    </td>

                                    <td id={park_document.id + "c"}>
                                        <Button id={park_document.id + "b"} style={{ display: "block" }}
                                            onClick={() => {
                                                document.getElementById(park_document.id + "a").style.display = "block";
                                                document.getElementById(park_document.id).style.display = "block";
                                                document.getElementById(park_document.documentName).style.display = "none";
                                                document.getElementById(park_document.description).style.display = "none";
                                                document.getElementById(park_document.id + "b").style.display = "none";
                                                let btn = document.createElement("button");
                                                btn.innerText = "SAVE";
                                                document.getElementById(park_document.id + "c").appendChild(btn);
                                                btn.setAttribute("onclick", updateDocument(park_document.id, park_document.creatorId, document.getElementById(park_document.id).value,
                                                    park_document.createDate, document.getElementById(park_document.id + "a").value, park_document.file));
                                            }}
                                            style={{ width: "100%" }}><FontAwesomeIcon icon={faEdit} /></Button>
                                    </td>

                                </tr>
                            </table>

                        </div>
                    )}

                    <div style={{textAlign: "center"}}> <DocModal/> </div>

                    <div className="mx-auto mb-4 px-4 py-4" style={{width: "980px", background: "#bcc1c4"}}>
                        <h1 className="text-secondary text-success mb-4"> Document Categories</h1>

                        <tr className="bg-dark text-black">
                            <th style={{width: "9%"}}>&nbsp; ID 1: LEGAL</th>
                            <th style={{width: "16%"}}>&nbsp; ID 2: ENTERTAINMENT</th>
                            <th style={{width: "14%"}}>&nbsp; ID 3: ACCOUNTING</th>
                            <th style={{width: "10%"}}>&nbsp; ID 4: SOCIAL</th>
                            <th style={{width: "11%"}}>&nbsp; ID 5: MEETING</th>
                            <th style={{width: "10%"}}>&nbsp; ID 6: NOTICE</th>
                            <th style={{width: "11%"}}>&nbsp; ID 7: PRIORITY</th>
                        </tr>
                        <tr><br></br></tr>
                        <tr><br></br></tr>


                        <h1 className="text-secondary text-success mb-4">File Links:</h1>
                        <input
                            type="file" id="fileUpload" name="file"
                            onChange={onUploadFile}
                        />
                        <p>You may NOT upload the same file more than once, Please delete and re-upload for changed files</p>
                        {downloadLink.map(link =>
                            <div key={link.id}>

                                <table className="table">

                                    <td style={{background: "#bcc1c4", width: "0.10%"}}>
                                        File ID:{link.fileId}
                                    </td>
                                    <td style={{background: "#bcc1c4", width: "50%"}}>
                                        <a href={link.url}> {link.name}</a>
                                    </td>
                                    <td>
                                        <Button onClick={() => {deleteFile(link.name);
                                        window.location.reload();
                                             }}
                                            style={{ width: "100%" }}><FontAwesomeIcon icon={faTrash} /></Button>
                                    </td>
                                </table>
                            </div>
                        )}
                    </div>
    {/*blob = {downloadLink.map(link =>*/ }
    {/*    GetDownloadUrl(link.name)*/ }
    {/*)};*/ }

    {/*{downloadLink.map(link =>*/ }
    {/*    <div key={link.id}>*/ }
    {/*        <table class="urlTable">*/ }
    {/*            <tr>*/ }
    {/*                <td>{link.fileId}</td>*/ }
    {/*                <td>{link.name}</td>*/ }
    {/*                <td>{link.url}</td>*/ }
    {/*            </tr>*/ }
    {/*        </table>*/ }
    {/*    </div>*/ }
    {/*)}*/ }
    <div>

    </div>
                </div >

            </div >

        </>
    );
}

export default OtherDocs;