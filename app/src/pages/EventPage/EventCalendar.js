import React, {useState} from "react";
//import Calendar from "react-calendar";
import "./Event.css";

//import 'bootstrap/dist/css/bootstrap.min.css';

function EventCalendar() {

//    const [value, onChange] = useState(new Date());
    const [date, setDate] = useState(new Date());
//    const [users, setUsers] = useState([]);
//    const [loading, setLoading] = useState(false);
//
    const [category, setCategory] = useState([]);
    const [categoryText, setCategoryText] = useState(`No Category is selected`);
    const [calendarText, setCalendarText] = useState(`No Date is selected`);

 const events = [
        {
            title: "Big Meeting",
            allDay: true,
            start: new Date(2022, 7, 1),
            end: new Date(2022, 7, 2),
        },
        {
            title: "Vacation",
            start: new Date(2022, 7, 7),
            end: new Date(2022, 7, 10),
        },
        {
            title: "Conference",
            start: new Date(2021, 6, 20),
            end: new Date(2021, 6, 23),
        },
    ];
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);



    function handleAddEvent() {
        setAllEvents([...allEvents, newEvent]);
    }


    const onDateChange = (newDate) => {
        setDate(newDate);
        const selectedDate = newDate;
        console.log(newDate.toLocaleDateString());
        setCalendarText(`Date: ${newDate.toLocaleDateString()}`);
      }

    const onCategoryChange = (category) => {
        setCategory(category);
        setCategoryText(`${category.toString()}`);
    }

return (


<div class="eventContainer">
    <div class="title-block">
        <h1 class="white-text"> Whats Going On? </h1>
    </div>
    <div>
        <div class="calendarContainer">
            <div class="calendarHeaderDiv">
                <div class="row">
                    <div class="col-3">
                    <select class="form-select" onChange={onCategoryChange} >
                    <option value="" label="Categories">Categories</option>
                    <option value="concerts" label="Concerts">Concerts</option>
                    <option value="gatherings" label="Gatherings">Gathering</option>
                    <option value="others" label="Other">Others</option>
                    </select>
                    </div>
                    <div class="col">
                    <h3 class="white-text">{calendarText}</h3>
                    </div>
                </div>
            </div>
                <Calendar
                  onChange={onDateChange}
                  value={date}
    //            tileClassName={({ activeStartDate, date, view }) => this.setClass(date)}
                  showNeighboringMonth={true}
                  locale={"en-US"}
                />
        </div>
    </div>
</div>

   );
}

export default EventCalendar;