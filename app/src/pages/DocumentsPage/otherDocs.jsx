import React, {useEffect,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import Button from '@material-ui/core/Button';
import axios from "axios";
import {  saveAs } from 'file-saver';
import DocModal from './docModal'
import * as PropTypes from "prop-types";
import {AddDocumentButton} from "../../components/Button/AddDocumentButton";




const OtherDocs = () => {
    const [documents, setDocuments] = useState([]);
    const [loading, setLoading] = useState(false);
    const [inputs, setInputs] = useState({});
    const [docId, setDocId] = useState(0);
    const [docCat, setDocCat] = useState(0);
    const [creatorId, setCreatorId] = useState(0);
    const [docName, setDocName] = useState("");
    const [dateCreated, setDateCreated] = useState({varOne: new Date()});
    const [textarea, setTextarea] = useState("");
    const [file, setFile] = useState();
    const [downloadLink, setDownloadLinks] = useState([]);
    const [downloadUrl, setDownloadUrl] = useState('');
    const input = document.getElementById('fileUpload');
    const token = localStorage.getItem("accessToken");
    const username = (localStorage.getItem('username'));
    const [user, setUser] = useState('');
    let blob = new Blob([], {
        type: "text/plain;charset=utf-8"
    });
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

    const getDownloadUrl = (fileName) => {
        fetch('api/v1/downloadFile/' + fileName, {
            method: 'GET',
            headers: {Authorization: `Bearer ${token}`},
        })
            .then((response) => response.blob())
            .then((blob) => {
                // Create blob link to download
                const url = window.URL.createObjectURL(
                    new Blob([blob]),
                );
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute(
                    'download',
                    fileName,
                );
                console.log(link)
                // Append to html link element page
                document.body.appendChild(link);

                // Start download
                link.click();

                // Clean up and remove the link
                link.parentNode.removeChild(link);
            });
    }
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
                setUser(response.data)
                //console.log(user)
            })

        fetch('api/v1/documents/all', {
            headers: { 'Content-Type': 'application/json', 'Authorization':`Bearer ${token}`},
        })
            .then(response => response.json())
            .then(data => {
                setDocuments(data);
                setLoading(false);
            })

        fetch('api/v1/files', {
            headers: { 'Content-Type': 'application/json', 'Authorization':`Bearer ${token}`},
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

        const fetchFile = () => {
        // Get all the current files and there URLS
        fetch('api/v1/files', {
            headers: { 'Content-Type': 'application/json', 'Authorization':`Bearer ${token}`},
        })
            .then(response => response.blob())
            .then(blob => {
                // Create blob link to download
                const url = window.URL.createObjectURL(
                    new Blob([blob]),
                );
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute(
                    'download',
                    `FileName.pdf`,
                );


                // Append to html link element page
                document.body.appendChild(link);

                // Start download
                link.click();

                // Clean up and remove the link
                link.parentNode.removeChild(link);


                //console.log(blob)
                //setDownloadLinks(data);
                //console.log(downloadLink.find((x => x.name === 'CMPS369Lab8MemoryUsage%20(1).pdf')))
                //setLoading(false);
            })

    }

     function deleteDocument(id) {

         fetch('api/v1/documents/delete/' + id,{
             method:'DELETE',
             headers: {'Content-Type': 'application/json', 'Authorization':`Bearer ${token}`},
            }).then(response => response.json())
            .then(data => {
                setLoading(false);
                console.log(data);
                //window.location.reload();
            })
     }

    function updateDocument(did, cid, dname, date, desc, file) {
        fetch('api/v1/documents/edit/' + did)
    }

         const getFileFromList = (id) => {
             {downloadLink.map(link => link =>
                 <div key={link.id}>
                     <table class="urlTable">
                         <tr>
                             <td>{link.fileId}</td>
                             <td>{link.name}</td>
                             <td>{link.url}</td>
                         </tr>
                     </table>
                 </div>
             )}
         }
         // blob = downloadUrl;
         // const downloadFile = saveAs(blob, "");

         return (
         <>

             <div className="mx-auto mb-7 px-7 py-7" style={{width: "1070px", background: "#bcc1c4"}}>
                <h1 className="text-secondary text-success mb-4">Documents</h1>
                    <div className="table-responsive">
                         <table className="table">
                             <tr className="bg-dark text-black">
                                 <th style={{width: "9%"}}>&nbsp;Doc_id</th>
                                 <th style={{width: "9%"}}>&nbsp;Doc_Cat</th>
                                 <th style={{width: "16%"}}>&nbsp;Doc_name</th>
                                 <th style={{width: "16%"}}>&nbsp;Date_created</th>
                                 <th style={{width: "18%"}}>&nbsp;Description</th>
                                 <th style={{width: "8%"}}>&nbsp;Delete</th>
                                 <th style={{width: "8%"}}>&nbsp;Edit</th>
                             </tr>
                         </table>
                         {documents.map(park_document =>

                             <div key={park_document.id}>
                                <table className="table">
                                     <tr>
                                         <td style={{width: "9%"}}>&nbsp;{park_document.document_id}</td>
                                         <td style={{width: "9%"}}>&nbsp;{park_document.document_category}</td>
                                         <td style={{width: "16%"}}><span id={park_document.document_name}>{park_document.document_name}</span><input id={park_document.document_id} type="text" style={{display: "none", width: "67%"}} /></td>
                                         <td style={{width: "16%"}}>&nbsp;{park_document.create_date}</td>
                                         <td style={{width: "18%"}}><span id={park_document.description}>{park_document.description}</span><input id={park_document.document_id+"a"} type="text" style={{display: "none", width: "67%"}} /></td>

                                         {/*<td style={{width: "12%"}}><a href={downloadLink.find(element => element.fileId === 0)} >Link</a></td>*/}
                                         <td>
                                         <Button onClick={()=>deleteDocument(park_document.document_id)} style={{width: "8%"}}><FontAwesomeIcon icon={faTrash} /></Button>
                                         </td>

                                         <td id={park_document.id+"c"}>
                                         <Button id={park_document.id+"b"} style={{display: "block"}}
                                         onClick={()=>{document.getElementById(park_document.id+"a").style.display="block"; document.getElementById(park_document.id).style.display="block";
                                         document.getElementById(park_document.documentName).style.display="none"; document.getElementById(park_document.description).style.display="none";
                                         document.getElementById(park_document.id+"b").style.display="none"; let btn=document.createElement("button"); btn.innerText="SAVE";
                                         document.getElementById(park_document.id+"c").appendChild(btn); btn.setAttribute("onclick", updateDocument(park_document.id, park_document.creatorId, document.getElementById(park_document.id).value,
                                         park_document.createDate, document.getElementById(park_document.id+"a").value, park_document.file)); }}
                                         style={{width: "8%"}}><FontAwesomeIcon icon={faEdit} /></Button>
                                         </td>

                                     </tr>
                                </table>

                             </div>
                         )}

                      <div style={{textAlign: "center"}}> <DocModal /> </div>
                        <tr><br></br></tr>
                        <tr><br></br></tr>

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
                        {downloadLink.map(link =>
                            <div key={link.id}>

                        <table className="table">

                            <td style={{background: "#bcc1c4", width: "0.10%" }}>
                                File ID:{link.fileId}
                            </td>
                                <td style={{ background: "#bcc1c4" }}>
                                    <a href={link.url}> {link.name}</a>
                                </td>
                        </table>
                            </div>
                        )}
                        </div>
                        {/*blob = {downloadLink.map(link =>*/}
                        {/*    GetDownloadUrl(link.name)*/}
                        {/*)};*/}

                        {/*{downloadLink.map(link =>*/}
                        {/*    <div key={link.id}>*/}
                        {/*        <table class="urlTable">*/}
                        {/*            <tr>*/}
                        {/*                <td>{link.fileId}</td>*/}
                        {/*                <td>{link.name}</td>*/}
                        {/*                <td>{link.url}</td>*/}
                        {/*            </tr>*/}
                        {/*        </table>*/}
                        {/*    </div>*/}
                        {/*)}*/}
                        <div>

                    </div>
                  </div>

             </div>

             </>
         );
     }

export default OtherDocs;