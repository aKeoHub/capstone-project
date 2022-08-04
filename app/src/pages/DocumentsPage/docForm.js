import {useState, useEffect} from 'react';
import React from 'react';
import axios from "axios";

const DocForm = () => {


    const [loading, setLoading] = useState(false);
    const [inputs, setInputs] = useState({});
    const [docId, setDocId] = useState(0);
    const [docCat, setDocCat] = useState(0);
    const [docName, setDocName] = useState("");
    const [dateCreated, setDateCreated] = useState({varOne: new Date()});
    const [textarea, setTextarea] = useState("");
    const [file, setFile] = useState();
    const token = localStorage.getItem("accessToken");
    const username = (localStorage.getItem('username'));
    const [user, setUser] = useState('');


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
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }


    const AddDocument = (doc) => {

        fetch('api/v1/documents/add', {
            method: 'POST',

            body: JSON.stringify({
                document_id: docId,
                document_category: docCat,
                creator_id: user,
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
            .catch((error) => {
                alert(error)
            })
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
    }, []);


    return (
        <form onSubmit={handleSubmit}>
            <label>Select Category:
                <select
                    //className="form-select"
                    name="docCatId"
                    type="number"
                    required="true"
                    onChange={(e) => {
                        setDocCat(e.target.value);
                    }}>
                    <option value="" label="Categories">Categories</option>
                    <option value="1" label="LEGAL">LEGAL</option>
                    <option value="2" label="ENTERTAINMENT">ENTERTAINMENT</option>
                    <option value="3" label="ACCOUNTING">ACCOUNTING</option>
                    <option value="4" label="SOCIAL">SOCIAL</option>
                    <option value="5" label="MEETING">MEETING</option>
                    <option value="6" label="NOTICE">NOTICE</option>
                    <option value="7" label="PRIORITY">PRIORITY</option>
                </select>
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
                <textarea name="description" value={textarea} max="120"
                          pattern="/[<]*<[\s\u200B]*script[\s\u200B]*>.*[/]*[<]*<[\s\u200B]*\/[\s\u200B]*script[\s\u200B]*>/ig;"
                          required="true" onChange={textAreaChange}/>
            </label>
            <label for="dateCreated">Date created:
                <input type="date" id="dateCreated" name="dateCreated" required="true" onChange={(e) => {
                    setDateCreated(e.target.value);
                }}/>
            </label>
            <input
                type="file" id="fileUpload" name="file"
                onChange={onUploadFile}
            />
            <button onClick={AddDocument}>Add Document</button>
        </form>

    )
};
export default DocForm;