import React, {useEffect, useState} from "react";
import "./Datatable.css";
import EventModal from "./EventModal";
import EventEditModal from "./EventEditModal";
import axios from "axios";

const EventTable = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);
    const token = localStorage.getItem("accessToken");
    const [user, setUser] = useState("");
    const username = localStorage.getItem("username");

    useEffect(() => {
        setLoading(true);
        const bodyParameters = {
            username: username,
        };
        const config = {
            headers: {Authorization: `Bearer ${token}`},
        };
        axios
            .post("/api/v1/user", bodyParameters, config)
            .then(function (response) {
                console.log(response.data);
                setUser(response.data);
                //console.log(user)
            });

        fetch("api/v1/events/all", {
            headers: {"Content-Type": "application/json"},
        })
            .then((response) => response.json())
            .then((data) => {
                setEvents(data);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    function deleteEvent(id) {
        fetch("api/v1/events/delete/" + id, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setLoading(false);
                console.log(data);
                window.location.reload();
            });
    }

    return (
        <div class="dataTableContainer">
            <div class="dataHeader">
                <div class="row">
                    <div class="col">
                        <h2>Event List</h2>
                    </div>
                    <div class="col">
                        <EventModal/>
                    </div>
                </div>
            </div>

            <table class="eventTable">
                <tr>
                    <th style={{width: "2%"}}>&nbsp;id</th>
                    <th style={{width: "9%"}}>&nbsp;Category</th>
                    <th style={{width: "9%"}}>&nbsp;name</th>
                    <th style={{width: "6%"}}>&nbsp;Location</th>
                    <th style={{width: "16%"}}>&nbsp;Description</th>
                    <th style={{width: "8%"}}>&nbsp;start date</th>
                    <th style={{width: "8%"}}>&nbsp;end date</th>
                    <th style={{width: "13%"}}>&nbsp;Edit</th>
                    <th style={{width: "13%"}}>&nbsp;Delete</th>
                </tr>
            </table>
            {events.map((event) => (
                <div key={event.id}>
                    <table class="eventTable">
                        <tr>

                            <td style={{width: "2%"}}>&nbsp;{event.event_id}</td>
                            <td style={{width: "9%"}}>&nbsp;{event.category_id}</td>
                            <td style={{width: "9%"}}>&nbsp;{event.event_name}</td>
                            <td style={{width: "6%"}}>&nbsp;{event.location}</td>
                            <td style={{width: "16%"}}>&nbsp;{event.description}</td>
                            <td style={{width: "8%"}}>&nbsp;{event.start_date}</td>
                            <td style={{width: "8%"}}>&nbsp;{event.end_date}</td>
                            <td style={{width: "13%"}}>
                                <EventEditModal/>
                            </td>
                            <td style={{width: "13%"}}>
                                <button
                                    onClick={() => {
                                        deleteEvent(event.event_id);
                                    }}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    </table>
                </div>
            ))}
        </div>
    );
};

export default EventTable;
