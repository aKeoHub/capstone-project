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

<div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="..." class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="..." class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src='./photos/Event1.jpg' class="d-block w-100" alt=""/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

            <div class="calendarContainer">
                <Calendar localizer={localizer}
                    views = {['month']}
                    components = {{toolbar : CustomToolbar}}
                    events={allEvents}
                    startAccessor="start"
                    endAccessor="end"
    //                onSelectSlot = {selectDate}
    //                onSelectEvent = {selectEvent}
                    style={{ height: 600, margin: "5px", width: 1150 }}
                />
            </div>

            <div id="EventListTbl_wrapper" class="dataTables_wrapper dt-bootstrap4">
                                <div class="row" id="sortable">
                                    <div class="col-sm-12 scrollbar-frozen-dreams">
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