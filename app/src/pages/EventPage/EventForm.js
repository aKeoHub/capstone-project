import { useState, useEffect } from 'react';


const EventForm = () => {
  const [inputs, setInputs] = useState({});
  const [eventId, setEventId] = useState(0);
  const [categoryId, setCategoryId] = useState("");
  const [eventName, setEventName] = useState("");
  const [eventCreator, setEventCreator] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [textarea, setTextarea] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const textAreaChange = (event) => {
    setTextarea(event.target.value)
  }



  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

 const AddEvent = () => {
      fetch('api/v1/events/add/',{
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
            file: "",
                      }),
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
        value={inputs.eventName || ""}
        onChange={handleChange}
      />
      </label>
      <label>Select Category:
      <select class="form-select" name="category" onChange={handleChange} >
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
          value={inputs.eventCreator || ""}
          onChange={handleChange}
        />
        </label>
        <label>Enter Location:
            <input
              type="text"
              name="location"
              value={inputs.location || ""}
              onChange={handleChange}
            />
        </label>
        <label>Enter Description:
            <textarea name="description" value={textarea} onChange={textAreaChange} />
        </label>
        <label for="startDate">Start Date:
          <input type="date" id="startDate" value={inputs.startDate}  onChange={handleChange} name="startDate"/>
        </label>
        <label for="birthday">End Date:
          <input type="date" id="endDate" value={inputs.endDate} onChange={handleChange} name="endDate"/>
        </label>
        <button onClick={AddEvent}>Add Event</button>
    </form>
  )
};

export default EventForm;