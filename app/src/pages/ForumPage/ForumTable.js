
import React, {useEffect, useState} from "react";

const ForumTable = () => {

   const [forums, setForums] = useState([]);
   // const [loading, setLoading] = useState(false);


    //useEffect(() => {
        //setLoading(true);

        //fetch('api/v1/forums/all')
            //.then(response => response.json())
            //.then(data => {
                //setForums(data);
                //setLoading(false);
                //console.log(data);
            //})
   //}, []);

    //if (loading) {
       // return <p>Loading...</p>;
    //}


    return (
        <div>
            <h2>Forum List</h2>

            {forums.map(forum =>
                <div key={forum.id}>
                    <table>
                        <tr>
                            <th>Forum ID</th>
                            <th>Forum Creator</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Create Date</th>
                            <th>Picture ID</th>
                        </tr>
                        <tr>
                            <td>{forum.forum_id}</td>
                            <td>{forum.creator_id.id}</td>
                            <td>{forum.title}</td>
                            <td>{forum.description}</td>
                            <td>{forum.create_date}</td>
                            <td>{forum.picture_id}</td>
                        </tr>

                    </table>
                </div>
            )}
        </div>
    );
}

export default ForumTable;