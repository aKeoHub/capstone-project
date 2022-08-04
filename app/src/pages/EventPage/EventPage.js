import React from 'react';

import Calendar from "react-calendar";
import DatePicker from "react-date-picker";
import './Event.css';
import EventCalendar from './EventCalendar';
import Datatable from './Datatable';
import Cards from "../../components/Card/Cards";



const EventPage = () => {

    return (
        <>
        <EventCalendar />
        <Cards />
        <Datatable />
        </>
    );
}

export default EventPage;