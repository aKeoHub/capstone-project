import 'bootstrap/dist/css/bootstrap.min.css';
import './Datatable.css';
import Table from 'react-bootstrap/Table';
import EventModal from './EventModal'

function Datatable() {

return (

<div class="container">
    <div class="row">
            <div class="col-lg-10 mt-5 mb-5">
                <div class="row">
                    <div class="col-3">
                        <h3 class="white-text">Event Datatable</h3>
                    </div>
                    <div class="col">
                        <EventModal />
                    </div>
                </div>
                <Table striped bordered hover variant="dark">
                      <thead>
                        <tr>
                          <th>Event ID</th>
                          <th>Category</th>
                          <th>Event Name</th>
                          <th>Start Date</th>
                          <th>End Date</th>
                          <th>Description</th>
                          <th>Location</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                          <td>@mdo</td>
                          <td>@mdo</td>
                          <td>@mdo</td>
                        </tr>
                      </tbody>
                    </Table>
            </div>
        </div>
    </div>


);
}


export default Datatable;
