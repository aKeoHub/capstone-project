
import React, {useEffect, useState} from "react";
import './Datatable.css';
import EventModal from './EventModal'

const EventTable = () => {

    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);
    const token = localStorage.getItem("accessToken");

    useEffect(() => {
        setLoading(true);

        fetch('api/v1/events/all', {
            headers: { 'Content-Type': 'application/json', 'Authorization':`Bearer ${token}`},
        })
            .then(response => response.json())
            .then(data => {
                setEvents(data);
                setLoading(false);
                console.log(data);
            })
    }, []);

        if (loading) {
            return <p>Loading...</p>;
        }

function deleteEvent(id) {

    fetch('api/v1/events/delete/' + id,{
        method:'DELETE',
        headers: {
            "Content-type": "application/json; charset=UTF-8", 'Authorization':`Bearer ${token}`
        }})
        .then(response => response.json())
                  .then(data => {
                      setLoading(false);
                      console.log(data);
                      window.location.reload();
                  })
}

    return (
    <div>
        <div class="dataHeader">
            <div class="row">
                <div class="col">
                    <h2>Event List</h2>
                </div>
                <div class="col">
                   <EventModal />
                </div>
            </div>
        </div>

            <table class="eventTable">
                <tr>
                    <th>Event ID</th>
                    <th>Event Creator</th>
                    <th>Category ID</th>
                    <th>Event Name</th>
                    <th>Location</th>
                    <th>Description</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th></th>
                </tr>
            </table>
            {events.map(event =>
                <div key={event.id}>
                    <table class="eventTable">
                        <tr>
                            <td>{event.event_id}</td>
                            <td>{event.event_creator}</td>
                            <td>{event.category_id}</td>
                            <td>{event.event_name}</td>
                            <td>{event.location}</td>
                            <td>{event.description}</td>
                            <td>{event.start_date}</td>
                            <td>{event.end_date}</td>
                            <td> <button onClick={()=>deleteEvent(event.event_id)}> Delete </button></td>
                        </tr>
                    </table>
                </div>
            )}
        </div>
    );
}

export default EventTable;