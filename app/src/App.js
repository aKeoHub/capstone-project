import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import './App.css';
import Calendar from 'react-calendar'
import DatePicker from 'react-date-picker';
import ReactDOM from 'react-dom';


function App() {

    const [value, onChange] = useState(new Date());
    const [date, setDate] = useState(new Date());
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [category, setCategory] = useState([]);
    const [categoryText, setCategoryText] = useState(`No Category is selected`);
    const [calendarText, setCalendarText] = useState(`No Date is selected`);

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
        <h1> Whats Going On? </h1>
    </div>

    <div class="row">
        <div class="col-10 center">
            <div class="card card-outline card-info">
                <div class="card-header text-white" >
                    <h3 class="card-title">Calendar</h3>
                </div>

                <div class="card-body  ">
                    <div id="Calendar_wrapper">
                        <div class="row">
                            <div class="col-4">
                                <div classname="cal">
                                    <Calendar
                                      onChange={onDateChange}
                                      value={date}
                                      showNeighboringMonth={false}
                                      locale={"en-US"}
                                      class="calendarDiv"
                                    />
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="col-sm">
                                    <h5 class="calendarDiv">{calendarText}</h5>
<h5 class="calendarDiv">{categoryText}</h5>
                                    <form>
                                        <select class="custom-select mr-sm-2 bg-secondary cDropdown" onChange={onCategoryChange} >
                                        <option value="" label="Categories">Categories</option>
                                        <option value="concerts" label="Concerts">Concerts</option>
                                        <option value="gatherings" label="Gatherings">Gathering</option>
                                        <option value="others" label="Other">Others</option>
                                        </select>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
            <div class="col-10 center">
                <div class="card card-outline card-info">
                    <div class="card-header">
                        <h3 class="card-title">Featured Events</h3>
                    </div>

                    <div class="card-body  ">
                        <div id="Calendar_wrapper">
                            <div class="row">
                                <div class="p-3 mb-2 bg-secondary text-white">
                               event1
                                </div>
                                <div class="col-md center">
                                    <div>
                                        <h5 class="calendarDiv">{calendarText}</h5>
                                    </div>
                                    <div>
                                        Events
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

</div>


   );
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
export default App;
