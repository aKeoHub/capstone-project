import 'bootstrap/dist/css/bootstrap.min.css';
import './Datatable.css';

function Datatable() {

return (

<div class="container">
    <div class="row">
            <div class="col-lg-10 mt-5 mb-5">
                <h3 class="">Event Datatable</h3>
                <table id="example"  >

                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Office</th>
                        <th>Start date</th>
                        <th>Salary</th>
                    </tr>

                    <tr>
                        <td>Name</td>
                        <td>Position</td>
                        <td>Office</td>
                        <td>Start date</td>
                        <td>Salary</td>
                    </tr>

                </table>
            </div>
        </div>
    </div>


);
}


export default Datatable;
