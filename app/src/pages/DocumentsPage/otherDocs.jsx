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
     const [creatorId, setCreatorId] = useState(0);
     const [docName, setDocName] = useState("");
     const [dateCreated, setDateCreated] = useState({varOne:new Date()});
     const [textarea, setTextarea] = useState("");
     const [file, setFile] = useState([]);

    const textAreaChange = (doc) => {
        setTextarea(doc.target.value)
    }

    const handleSubmit = (doc)=> {
        doc.preventDefault();
        console.log(doc.target.docName.value);
        console.log(inputs);
    }

    const onUploadFile = e => {
        console.log('file: ', file);
        setFile(e.target.files[0]);
    };

    const AddDocument = (doc) => {

          fetch('api/v1/documents/add',{
              method:'POST',

               body: JSON.stringify({
                id: docId,
                creatorId: creatorId,
                documentName: docName,
                createDate: dateCreated,
                description: textarea,
                file: null,
                          }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
          }).then(response => response.json())
                        .then(data => {
                            console.log(data);
                            window.location.reload();
                        })
      }

     useEffect(() => {
             setLoading(true);

             fetch('api/v1/documents/all')
                 .then(response => response.json())
                 .then(data => {
                     setDocuments(data);
                     setLoading(false);
                     console.log(data);
                 })
             }, []);

         if (loading) {
             return <p>Loading...</p>;
         }

     function deleteDocument(id) {
         fetch('api/v1/documents/delete/' + id,{
             method:'DELETE'
         }).then(response => response.json())
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
               <label>Enter Document Id:
               <input
                 type="text"
                 name="docId"
                 onChange={(e) => {
                   setDocId(e.target.value);
                   }}
               />
               </label>
               <label>Enter Creator Id:
                 <input
                   type="number"
                   name="creatorId"
                   onChange={(e) => { setCreatorId(e.target.value);}}
                 />
                 </label>
                 <label>Enter Document name:
                     <input
                       type="text"
                       name="docName"
                       onChange={(e) => {
                         setDocName(e.target.value);
                       }}
                     />
                 </label>
                 <label>Enter Description:
                     <textarea name="description" value={textarea} onChange={textAreaChange} />
                 </label>
                 <label for="dateCreated">Date created:
                   <input type="date" id="dateCreated" name="dateCreated" onChange={(e) => { setDateCreated(e.target.value);}}/>
                 </label>
                 <input
                     type="file"
                     //style={{ display: 'none' }}
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
                                 <th style={{width: "13%"}}>Creator_id</th>
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
                                         <td style={{width: "9%"}}>{park_document.id}</td>
                                         <td style={{width: "13%"}}>{park_document.creatorId}</td>
                                         <td style={{width: "16%"}}><span id={park_document.documentName}>{park_document.documentName}</span><input id={park_document.id} type="text" style={{display: "none", width: "67%"}} /></td>
                                         <td style={{width: "16%"}}>{park_document.createDate}</td>
                                         <td style={{width: "18%"}}><span id={park_document.description}>{park_document.description}</span><input id={park_document.id+"a"} type="text" style={{display: "none", width: "67%"}} /></td>
                                         <td style={{width: "12%"}}>{park_document.file}</td>
                                         <td>
                                         <Button onClick={()=>deleteDocument(park_document.id)} style={{width: "8%"}}><FontAwesomeIcon icon={faTrash} /></Button>
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