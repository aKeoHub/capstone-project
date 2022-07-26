import React, {useEffect,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import Button from '@material-ui/core/Button';

const OtherDocs = () => {
     const [documents, setDocuments] = useState([]);
     const [loading, setLoading] = useState(false);

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

    function updateDocument(id) {
        fetch('api/v1/documents/edit/' + id)
    }

         return (
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
                                         document.getElementById(park_document.id+"c").appendChild(btn); btn.setAttribute("onclick", updateDocument(park_document.id)); }}
                                         style={{width: "8%"}}><FontAwesomeIcon icon={faEdit} /></Button>
                                         </td>
                                     </tr>
                                 </table>
                             </div>
                         )}
                    </div>
             </div>
         );
     }

export default OtherDocs;