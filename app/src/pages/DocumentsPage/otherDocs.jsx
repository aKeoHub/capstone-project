import React, {useEffect,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
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
         fetch('api/v1/events/delete/' + id,{
             method:'DELETE'
         }).then(response => response.json())
                       .then(data => {
                           setLoading(false);
                           console.log(data);
                           window.location.reload();
                       })

     };

         return (
             <div className="mx-auto mb-5 px-5 py-5" style={{width: "1070px", background: "#E8F8F5"}}>
                <h1 className="text-left text-success mb-4">Documents</h1>
                    <div className="table-responsive">
                         <table className="table">
                             <tr className="bg-primary text-white">
                                 <th style={{width: "9%"}}>Doc_id</th>
                                 <th style={{width: "14%"}}>Category_id</th>
                                 <th style={{width: "13%"}}>Creator_id</th>
                                 <th style={{width: "15%"}}>Doc_name</th>
                                 <th style={{width: "15%"}}>Date_created</th>
                                 <th style={{width: "16%"}}>Description</th>
                                 <th style={{width: "11%"}}>File</th>
                                 <th style={{width: "7%"}}>Delete</th>
                             </tr>
                         </table>
                         {documents.map(park_document =>
                             <div key={park_document.id}>
                                 <table className="table">
                                     <tr>
                                         <td style={{width: "9%"}}>{park_document.id}</td>
                                         <td style={{width: "14%"}}>1</td>
                                         {/*<td>{park_document.documentCategory.category_id}*/}
                                         <td style={{width: "13%"}}>{park_document.creatorId}</td>
                                         <td style={{width: "15%"}}>{park_document.documentName}</td>
                                         <td style={{width: "15%"}}>{park_document.createDate}</td>
                                         <td style={{width: "16%"}}>{park_document.description}</td>
                                         <td style={{width: "11%"}}>{park_document.file}</td>
                                         <td style={{width: "7%"}}><Button onClick={()=>deleteDocument(park_document.id)} style={{width: "7%"}}><FontAwesomeIcon icon={faTrash} /></Button></td>
                                         {/*<td><Button onClick={() => deleteCustomer(this.customerId)}>
                                             <FontAwesomeIcon icon={faTrash} />
                                         </Button></td>*/}
                                     </tr>
                                 </table>
                             </div>
                         )}
                    </div>
             </div>
         );
     }


export default OtherDocs;