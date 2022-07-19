import React, { Component, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class otherDocs extends Component {
//     const [documents, setDocuments] = useState([]);
//     const [loading, setLoading] = useState(false);
//
//     useEffect(() => {
//             setLoading(true);
//
//             fetch('api/v1/documents/all')
//                 .then(response => response.json())
//                 .then(data => {
//                     setDocuments(data);
//                     setLoading(false);
//                     console.log(data);
//                 })
//         }, []);
//
//         if (loading) {
//             return <p>Loading...</p>;
//         }
//
//     render() {
//         return (
//             <div className="mx-auto mb-5 px-5 py-5" style={{width: "1070px", background: "#E8F8F5"}}>
//                 <h1 className="text-left text-success mb-4">Other documents</h1>
//                 <table class="table">
//                   <thead class="bg-primary text-white">
//                     <tr>
//                       <th scope="col">Doc_id</th>\
//                     </tr>
//                   </thead>
//                 </table>
//                 {documents.map(doc =>
//                     <div key={doc.document_id}>
//                         <table class="table">
//                             <tr>
//                                 <td>doc.document_id</td>
//                             </tr>
//                         </table>
//                     </div>
//                 )}
//             </div>
//         );
//     }
}

export default otherDocs;