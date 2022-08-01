import { useState, useEffect } from 'react';
import React from 'react';


const EventForm = () => {
  const [inputs, setInputs] = useState({});
  const [eventId, setEventId] = useState(0);
  const [categoryId, setCategoryId] = useState(0);
  const [eventName, setEventName] = useState("");
  const [eventCreator, setEventCreator] = useState(0);
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState({varOne:new Date()});
  const [endDate, setEndDate] = useState({varOne:new Date()});
  const [textarea, setTextarea] = useState("");
  const [file, setFile] = useState([]);
//  const handleChange = (event) => {
//    const name = event.target.name;
//    const value = event.target.value;
//    setInputs(values => ({...values, [name]: value}));
//    setEventName(event.target.eventName.value);
//  }

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

 const AddEvent = (event) => {

      fetch('api/v1/events/add',{
          method:'POST',

           body: JSON.stringify({
            event_id: eventId,
            category_id: categoryId,
            event_creator: eventCreator,
            event_name: eventName,
            location: location,
            description: textarea,
            start_date: startDate,
            end_date: endDate,
            file: null,
                      }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
      }).then(response => response.json())
                    .then(data => {
                        console.log(data);
                        //window.location.reload();
                    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter Event Name:
      <input
        type="text"
        name="eventName"
        pattern="/^[a-z ,.'-]+$/i"
        max="20"
        placeholder="Name of Event!"
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
      <label>Enter Creator Name:
        <input
          type="number"
          name="eventCreator"
          onChange={(e) => { setEventCreator(e.target.value);}}
        />
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
        <button onClick={AddEvent}>Add Event</button>
    </form>
  )
};

export default EventForm;