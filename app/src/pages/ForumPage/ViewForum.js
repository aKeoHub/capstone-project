import React, {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
const ViewForum = () => {

function ForumBack() {
    window.location = '/forum';
}

return (

    <div>
    <h1>Hello World</h1>
    <Button variant="primary" onClick = {ForumBack}>
        Back
    </Button>
</div>
);

}
export default ViewForum;