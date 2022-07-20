import React, {useEffect,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

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

         return (
             <div className="mx-auto mb-5 px-5 py-5" style={{width: "1070px", background: "#E8F8F5"}}>
                <h1 className="text-left text-success mb-4">Documents</h1>

                         <table class="table">
                             <tr className="bg-primary text-white">
                                 <th>Doc_id</th>
                                 <th>Doc_category</th>
                                 <th>Creator_id</th>
                                 <th>Doc_name</th>
                                 <th>Date_created</th>
                                 <th>Description</th>
                                 <th>File</th>
                             </tr>
                         </table>
                         {documents.map(park_document =>
                             <div key={park_document.id}>
                                 <table class="table">
                                     <tr>
                                         <td>{park_document.document_id}</td>
                                         <td>{park_document.document_category}</td>
                                         <td>{park_document.creator_id}</td>
                                         <td>{park_document.document_name}</td>
                                         <td>{park_document.create_date}</td>
                                         <td>{park_document.description}</td>
                                         <td>{park_document.file}</td>
                                     </tr>

                                 </table>
                             </div>
                         )}
                     </div>
         );
     }


export default OtherDocs;