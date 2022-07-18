/*import React from 'react';*/

import Calendar from "react-calendar";
import DatePicker from "react-date-picker";
import './Event.css';
import EventCalendar from './EventCalendar';
import Datatable from './Datatable';


const EventPage = () => {

    return (
        <>
        <EventCalendar />
        <Datatable />

        </>
    );
}

export default EventPage;