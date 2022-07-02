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
    const [calendarText, setCalendarText] = useState(`No Date is selected`);

    const onDateChange = (newDate) => {
        setDate(newDate);
        const selectedDate = newDate;
        console.log(newDate.toLocaleDateString());
        setCalendarText(`Date: ${newDate.toLocaleDateString()}`);
      }

return (


<div class="container">
    <div class="row">
        <div class="col-12">
            <div class="card card-outline card-info">
                <div class="card-header">
                    <h3 class="card-title">Calendar</h3>
                </div>

                <div class="card-body  ">
                    <div id="Calendar_wrapper">
                        <div class="row">
                            <div class="col-md center">
                                <Calendar
                                  onChange={onDateChange}
                                  value={date}
                                  showNeighboringMonth={false}
                                  locale={"en-US"}
                                  class="calendarDiv"
                                />
                            </div>
                            <div class="col-md center">
                                <h5 class="calendarDiv">{calendarText}</h5>
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
