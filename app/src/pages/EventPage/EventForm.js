import { useState, useEffect } from 'react';


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
                    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter Event Name:
      <input
        type="text"
        name="eventName"
        onChange={(e) => {
          setEventName(e.target.value);
          }}
      />
      </label>
      <label>Select Category:
      <select
        class="form-select"
        name="category"
        type= "number"
        onChange={(e) => {
        setCategoryId(e.target.value);
      }} >
          <option value="" label="Categories">Categories</option>
          <option value="1" label="Concerts">Concerts</option>
          <option value="2" label="Gatherings">Gathering</option>
          <option value="3" label="Other">Others</option>
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
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />
        </label>
        <label>Enter Description:
            <textarea name="description" value={textarea} onChange={textAreaChange} />
        </label>
        <label for="startDate">Start Date:
          <input type="date" id="startDate" name="startDate" onChange={(e) => { setStartDate(e.target.value);}}/>
        </label>
        <label for="endDate">End Date:
          <input type="date" id="endDate"  name="endDate" onChange={(e) => { setEndDate(e.target.value);}}/>
        </label>
        <button onClick={AddEvent}>Add Event</button>
    </form>
  )
};

export default EventForm;