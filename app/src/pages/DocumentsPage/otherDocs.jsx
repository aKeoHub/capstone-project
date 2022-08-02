import React, {useEffect,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import Button from '@material-ui/core/Button';

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
    const input = document.getElementById('fileUpload');
    const token = localStorage.getItem("accessToken");


    const textAreaChange = (doc) => {
        setTextarea(doc.target.value)
    }

    const handleSubmit = (doc) => {
        doc.preventDefault();
        console.log(doc.target.docName.value);
        console.log(inputs);
    }

    const onUploadFile = e => {

        //console.log('file: ', file);
        console.log(e.target.files[0]);

        const formData = new FormData()
        formData.append('file', e.target.files[0])
        //  this.setState({ files: file }, () => { console.log(this.state.files) });
        fetch('api/v1/uploadFile', {
            method: 'POST',
            headers: {
                'Accept': 'application/json', 'Authorization': `Bearer ${token}`,
            },
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    };

    const AddDocument = (doc) => {

        fetch('api/v1/documents/add', {
            method: 'POST',

            body: JSON.stringify({
                document_id: docId,
                document_category: docCat,
                creator_id: creatorId,
                document_name: docName,
                create_date: dateCreated,
                description: textarea,
                file: file,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8", 'Authorization': `Bearer ${token}`
            }
        }).then(response => response.json())
            .then(data => {
                console.log(data)
                window.location.reload();
            })
    }

    useEffect(() => {
        //setLoading(true);

    //     fetch('api/v1/documents/all')
    //         .then(response => response.json())
    //         .then(data => {
    //             setDocuments(data);
    //             setLoading(false);
    //             console.log(data);
    //         })
    // }, []);

    fetch('api/v1/documents/all/', {
        headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
    })
        .then(response => response.json())
        .then(data => {
            setDocuments(data);

            console.log(data);
        })
       // .catch((err) => console.log(err));
}, []);




         if (loading) {
             return <p>Loading...</p>;
         }

     function deleteDocument(id) {
         fetch('api/v1/documents/delete/' + id,{
             method:'DELETE',
             headers: {
                 "Content-type": "application/json; charset=UTF-8"
            }}).then(response => response.json())
            .then(data => {
                setLoading(false);
                console.log(data);
                window.location.reload();
            })
     }

    function updateDocument(did, cid, dname, date, desc, file) {
        fetch('api/v1/documents/edit/' + did)
    }

         return (
         <>
         <form onSubmit={handleSubmit}>
             <label>Select Category:
                 <select
                     //className="form-select"
                     name="docCatId"
                     type="number"
                     required="true"
                     onChange={(e) => {
                         setDocCat(e.target.value);
                     }} >
                     <option value="" label="Categories">Categories</option>
                     <option value="1" label="LEGAL">Concerts</option>
                     <option value="2" label="ENTERTAINMENT">Gathering</option>
                     <option value="3" label="ACCOUNTING">Others</option>
                     <option value="4" label="SOCIAL">Concerts</option>
                     <option value="5" label="MEETING">Gathering</option>
                     <option value="6" label="NOTICE">Others</option>
                     <option value="7" label="PRIORITY">Concerts</option>
                 </select>
             </label>
               <label>Enter Creator Id:
                 <input//this will be automatic to whoever is logged in
                   type="number"
                   name="creatorId"
                   onChange={(e) => { setCreatorId(e.target.value);}}
                 />
                 </label>
                 <label>Enter Document name:
                     <input
                       type="text"
                       name="docName"
                       max="30"
                       pattern="[a-zA-Z0-9,#.-]+"
                       required="true"
                       onChange={(e) => {
                         setDocName(e.target.value);
                       }}
                     />
                 </label>
                 <label>Enter Description:
                     <textarea name="description" value={textarea} max="120" pattern="/[<]*<[\s\u200B]*script[\s\u200B]*>.*[/]*[<]*<[\s\u200B]*\/[\s\u200B]*script[\s\u200B]*>/ig;" required="true" onChange={textAreaChange} />
                 </label>
                 <label for="dateCreated">Date created:
                   <input type="date" id="dateCreated" name="dateCreated" required="true" onChange={(e) => { setDateCreated(e.target.value);}}/>
                 </label>
                 <input
                     type="file" id="fileUpload" name="file"
                     onChange={onUploadFile}
                 />
                 <button onClick={AddDocument}>Add Document</button>
             </form>

             <div className="mx-auto mb-5 px-5 py-5" style={{width: "1070px", background: "#E8F8F5"}}>
                <h1 className="text-left text-success mb-4">Documents</h1>
                    <div className="table-responsive">
                         <table className="table">
                             <tr className="bg-primary text-white">
                                 <th style={{width: "9%"}}>Doc_id</th>
                                 <th style={{width: "9%"}}>Doc_Cat</th>

                                 <th style={{width: "16%"}}>Doc_name</th>
                                 <th style={{width: "16%"}}>Date_created</th>
                                 <th style={{width: "18%"}}>Description</th>
                                 <th style={{width: "12%"}}>File</th>
                                 <th style={{width: "8%"}}>Delete</th>
                                 <th style={{width: "8%"}}>Edit</th>
                             </tr>
                         </table>
                         {documents.map(park_document =>
                             <div>
                                <table className="table">
                                     <tr>
                                         <td style={{width: "9%"}}>{park_document.document_id}</td>
                                         <td style={{width: "9%"}}>{park_document.document_category}</td>
                                         <td style={{width: "16%"}}><span id={park_document.document_name}>{park_document.document_name}</span><input id={park_document.document_id} type="text" style={{display: "none", width: "67%"}} /></td>
                                         <td style={{width: "16%"}}>{park_document.create_date}</td>
                                         <td style={{width: "18%"}}><span id={park_document.description}>{park_document.description}</span><input id={park_document.document_id+"a"} type="text" style={{display: "none", width: "67%"}} /></td>
                                         <td style={{width: "12%"}}>{park_document.file}</td>
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
                    <Button style={{display:"block", marginLeft:"84%", marginTop:"4%"}}>Add document</Button>
                  </div>
             </div>
             </>
         );
     }

export default OtherDocs;