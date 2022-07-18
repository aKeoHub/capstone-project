import 'bootstrap/dist/css/bootstrap.min.css';
import './Datatable.css';
import React, {useEffect, useState} from "react";
import {json, response} from "express";

const Datatable = () => {


    const [eventId, setEventReg] = useState(0);
    const [users, setUsers] = useState([]);
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [categoryId, setCatReg] = useState("");
    const [name, setEventName] = useState("");
    const [location, setLocationReg] = useState("");
    const [description, setDescReg] = useState("");
    const [file, setFileReg] = useState("");



useEffect(() => {
    setLoading(true);

    fetch("events")
    .then((response) =>response.json())
    .then((data) => {
        setEvents(data);
        setLoading(false);
        });
},    []);

const create = () => {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    today = yyyy + "-" + mm + "-" + dd;

    fetch("/events", {
        method: "POST",
        body:JSON.stringify( {
            event_id: eventId,
            event_creator:users,
            category_id:categoryId,
            name:name,
            location:location,
            description:description,
            start_date: today.toString(),
            end_date: today.toString(),
            file:file,
             }),

        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));


};

    $('#eventdata').DataTable({
        "processing": true,
        "serverSide": true,
        "ajax": {
        "url": "/events",
        "type": "POST",
        "dataType": "json",
        "contentType": "application/json",
        "data": function (d) {
        return JSON.stringify(d);
    }
    },
        "columns": [
    {"data": "name", "width": "20%"},
    {"data": "description","width": "20%"},
    {"data": "location", "width": "20%"},
    {"data": "description", "width": "20%"},
    {"data": "start_date", "width": "20%"},
    {"data": "end_date", "width": "20%"}
        ]
    });


    $('#example').DataTable({
        "processing": true,
        "serverSide": true,
        "ajax": {
            "url": "/employees",
            "type": "POST",
            "dataType": "json",
            "contentType": "application/json",
            "data": function (d) {
                return JSON.stringify(d);
            }
        },
        "columns": [
            {"data": "name", "width": "20%"},
            {"data": "description","width": "20%"},
            {"data": "location", "width": "20%"},
            {"data": "description", "width": "20%"},
            {"data": "start_date", "width": "20%"},
            {"data": "end_date", "width": "20%"}
        ]
    });

return (




<div class="container">
    <div class="row">
            <div class="col-lg-10 mt-5 mb-5">
                <h3>Event Datatable</h3>
                <table id="eventdata" class="table table-bordered table-responsive" style="width: 100%">
                <thead>
                <tr>
                    <th>Event Name</th>
                    <th>Category</th>
                    <th>Event Creator</th>
                    <th>Location</th>
                    <th>Description</th>
                    <th>Start date</th>
                    <th>End date</th>
                    <th>File</th>
                </tr>
                </thead>
                <tfoot>
                <tr>
                    <th>Event Name</th>
                    <th>Category</th>
                    <th>Event Creator</th>
                    <th>Location</th>
                    <th>Description</th>
                    <th>Start date</th>
                    <th>End date</th>
                    <th>File</th>
                </tr>
                </tfoot>
                </table>
            </div>
        </div>
    </div>


);


}

export default Datatable;
