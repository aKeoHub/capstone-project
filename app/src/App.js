import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Toolbar from 'react-big-calendar/lib/Toolbar';
import "./App.css";
import "react-big-calendar/lib/sass/styles.scss";
import "react-big-calendar/lib/sass/variables.scss";

const locales = {
    "en-US": require("date-fns/locale/en-US"),
};


const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2021, 6, 0),
        end: new Date(2021, 6, 0),
    },
    {
        title: "Vacation",
        start: new Date(2021, 6, 7),
        end: new Date(2021, 6, 10),
    },
    {
        title: "Conference",
        start: new Date(2021, 6, 20),
        end: new Date(2021, 6, 23),
    },
];

function App() {
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);

    function handleAddEvent() {
        setAllEvents([...allEvents, newEvent]);
    }

    return (
        <div className="App">
                <h1 class="fw-bold">Events</h1>

            <div class="calendarContainer">
                <div class="calendar">
                    <Calendar localizer={localizer}
                        views = {['month']}
                        components = {{toolbar : CustomToolbar}}
                        events={allEvents}
                        startAccessor="start"
                        endAccessor="end"
                            //                onSelectSlot = {selectDate}
        //                onSelectEvent = {selectEvent}
                        style={{ height: 570, margin: "5px", width: 1110 }}
                    />
                </div>
            </div>

            <div id="EventListTbl_wrapper" class="dataTables_wrapper dt-bootstrap4">
                <div class="row" id="sortable">
                    <div class="col-sm-12">
                        <table id="EventListTbl" class="table table-striped dataTable dtr-inline no-footer" role="grid" aria-describedby="EventListTbl_info">
                            <div>
                                <tr>
                                    <th>ID</th>
                                    <th>Group Name</th>
                                    <th><button id="AddEventID" data-target="#GroupModalId" data-toggle="modal" class="btn btn-xs bg-gradient-info"><i class="fa fa-plus"></i></button></th>
                                </tr>
                            </div>
                            <div>
                                @foreach(DataRow row in Model.GroupList.Rows)
                                {
                                    <tr>
                                        <td>@row["Id"]</td>
                                        <td>Name</td>
                                        <td>
                                       </td>
                                    </tr>
                                }
                            </div>
                        </table>
                    </div>
                </div>
            </div>
            <div>
                <h2>Add New Event</h2>
                <input type="text" placeholder="Add Title" style={{ width: "20%", marginRight: "10px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                <DatePicker placeholderText="Start Date" style={{ marginRight: "10px" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                <DatePicker placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
                <button style={{ marginTop: "10px" }} onClick={handleAddEvent}>
                    Add Event
                </button>
            </div>

        </div>
    );
}

class CustomToolbar extends Toolbar {
  render() {
    return (
      <div className='rbc-toolbar'>
        <span className="rbc-btn-group">
          <button type="button" onClick={() => this.navigate('PREV')}>Previous Month</button>
          <button type="button" onClick={() => this.navigate('NEXT')}>Next Month</button>
        </span>
        <span className="rbc-toolbar-label">{this.props.label}</span>
      </div>
    );
  }
}
export default App;