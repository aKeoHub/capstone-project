import { useState, useEffect } from 'react';
import React from 'react';
import axios from "axios";
import {AddButtonEvent} from "../../components/Button/AddButtonEvent";


const EventEditForm = () => {
    const [inputs, setInputs] = useState({});
    const [eventId, setEventId] = useState(0);
    const [categoryId, setCategoryId] = useState(0);
    const [eventName, setEventName] = useState("");
    // const [eventCreator, setEventCreator] = useState('');
    const [location, setLocation] = useState("");
    const [startDate, setStartDate] = useState({varOne:new Date()});
    const [endDate, setEndDate] = useState({varOne:new Date()});
    const [textarea, setTextarea] = useState("");
    const [file, setFile] = useState([]);
    const token = localStorage.getItem("accessToken");
    const username = (localStorage.getItem('username'));
    const [user, setUser] = useState('');
    const [Events, setEvents] = useState({});
    const [loading, setLoading] = useState('');
//  const handleChange = (event) => {
//    const name = event.target.name;
//    const value = event.target.value;
//    setInputs(values => ({...values, [name]: value}));
//    setEventName(event.target.eventName.value);
//  }

    useEffect(() => {
        setLoading(true);

        fetch('api/v1/events/all',{
            headers: { 'Content-Type': 'application/json',}
        })
            .then(response => response.json())
            .then(events => {
                setEvents(events);
                setLoading(false);
                console.log(events);

            })
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

                })},
    []);

        if (loading) {
            return <p>Loading...</p>;
        }

    const textAreaChange = (event) => {
    setTextarea(event.target.value)
    }

    const eventNameChange = (event) => {
       setEventName(event.target.value)
    }

    const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.eventName.value);
    console.log(inputs);

    }
    const onUploadFile = e => {
        console.log('file: ', file);
        setFile(e.target.files[0]);
    };

        const editEvents = async(eventId) => {

                fetch('api/v1/events/edit/' + eventId, {
                    method: "PUT",
                    body: JSON.stringify({
                        event_id: eventId,
                        category_id: categoryId,
                        event_creator: user,
                        event_name: eventName,
                        location: location,
                        description: textarea,
                        start_date: startDate,
                        end_date: endDate,
                        file: null,
                    }),
                headers: {
                            "Content-type": "application/json; charset=UTF-8", 'Authorization':`Bearer ${token}`
                        }})
                        .then(events => {
                                      setLoading(false);
                                      console.log(events);

                                  })
                                  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter Event Name:
      <input
        type="text"
        name="eventName"
        value={eventName}
        pattern="[a-zA-Z0-9,#.-]+"
        max="20"
        placeholder= {eventName}
        onChange={(e) => {
          setEventName(e.target.value);
          }}
      />
      </label>
      <label>Select Category:
      <select
        className="form-select"
        name="category"
        type="number"
        required="value>0"
        onChange={(e) => {
        setCategoryId(e.target.value);
      }} >
          <option value="" label="Categories">Categories</option>
          <option value="1" label="LEGAL">Concerts</option>
          <option value="2" label="ENTERTAINMENT">Gathering</option>
          <option value="3" label="ACCOUNTING">Others</option>
          <option value="4" label="SOCIAL">Concerts</option>
          <option value="5" label="MEETING">Gathering</option>
          <option value="6" label="NOTICE">Others</option>
          <option value="7" label="PRIORITY">Concerts</option>
      </select>
      </label>
        <label>Enter Location:
            <input
              type="text"
              name="location"
              pattern="/[<]*<[\s\u200B]*script[\s\u200B]*>.*[/]*[<]*<[\s\u200B]*\/[\s\u200B]*script[\s\u200B]*>/ig;"
              min="10"
              max="30"
              placeholder="A location must be specified"
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />
        </label>
        <label>Enter Description:
            <textarea name="description" value={textarea} max="120" onChange={textAreaChange} />
        </label>
        <label for="startDate">Start Date:
          <input type="date" id="startDate" name="startDate" onChange={(e) => { setStartDate(e.target.value);}}/>
        </label>
        <label for="endDate">End Date:
          <input type="date" id="endDate"  name="endDate" onChange={(e) => { setEndDate(e.target.value);}}/>
        </label>
        <input
            type="file"
            //style={{ display: 'none' }}
            onChange={onUploadFile}
        />

        <AddButtonEvent onClick={editEvents(eventId)}>Save</AddButtonEvent>

    </form>
  )
};

export default EventEditForm;