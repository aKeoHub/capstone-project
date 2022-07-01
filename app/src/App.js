import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import './App.css';
import Calendar from 'react-calendar'
import DatePicker from 'react-date-picker';



function App() {

    const [value, onChange] = useState(new Date());

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

return (


<div class="container">
    <div class="row">
        <div class="col-5">
            <div class="card card-outline card-info">
                <div class="card-header">
                    <h3 class="card-title">Calendar</h3>
                </div>

            <div class="card-body">
                <div id="Calendar_wrapper" class="">
                    <div class="row">
                        <div class="center">
                            <Calendar onChange={onChange} value={value}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  <div class="col-5">

                <div class="card card-outline card-info">
                    <div class="card-header">
                        <h3 class="card-title">Events</h3>
                    </div>

                <div class="card-body">
                    <div id="Calendar_wrapper" class="">
                        <div class="row">
                            <div>
                                <table>
                                </table>
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

export default App;
