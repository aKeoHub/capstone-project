import React, {useState, Component} from "react";
import Calendar from "react-calendar";
import "./Event.css";
import DatePicker from "react-date-picker";

function EventCalendar() {

    const [value, onChange] = useState(new Date());
    const [date, setDate] = useState(new Date());
//    const [users, setUsers] = useState([]);
//    const [loading, setLoading] = useState(false);
//
//    const [category, setCategory] = useState([]);
//    const [categoryText, setCategoryText] = useState(`No Category is selected`);
    const [calendarText, setCalendarText] = useState(`No Date is selected`);
//
// const events = [
//        {
//            title: "Big Meeting",
//            allDay: true,
//            start: new Date(2022, 7, 1),
//            end: new Date(2022, 7, 2),
//        },
//        {
//            title: "Vacation",
//            start: new Date(2022, 7, 7),
//            end: new Date(2022, 7, 10),
//        },
//        {
//            title: "Conference",
//            start: new Date(2021, 6, 20),
//            end: new Date(2021, 6, 23),
//        },
//    ];
//    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
//    const [allEvents, setAllEvents] = useState(events);
//
//
//
//    function handleAddEvent() {
//        setAllEvents([...allEvents, newEvent]);
//    }
//
//
    const onDateChange = (newDate) => {
        setDate(newDate);
        const selectedDate = newDate;
        console.log(newDate.toLocaleDateString());
        setCalendarText(`Date: ${newDate.toLocaleDateString()}`);
      }
//
//    const onCategoryChange = (category) => {
//        setCategory(category);
//        setCategoryText(`${category.toString()}`);
//    }

return (


<div class="eventContainer">
    <div class="title-block">
        <h1> Whats Going On? </h1>
    </div>
    <div class="row">
        <div>
            <div class="calendarContainer">
                    <Calendar
                      onChange={onDateChange}
        //            value={date}
        //            tileClassName={({ activeStartDate, date, view }) => this.setClass(date)}
                      showNeighboringMonth={false}
                      locale={"en-US"}
                      class="calendarDiv"
                    />
                     <div>
                        <h3 class="calendarDiv">{calendarText}</h3>
                     </div>
            </div>
        </div>
    </div>
</div>

   );
}

export default EventCalendar;