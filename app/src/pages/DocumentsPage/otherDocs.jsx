import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class otherDocs extends Component {
    state = {
        documents: []
    };

    async componentDidMount() {
        const response = await fetch('api/v1/documents/all');
        const body = await response.json();
        this.setState({documents: body});
    }

    render() {
    const {documents} = this.state;
        return (
            <div className="mx-auto mb-5 px-5 py-5" style={{width: "1070px", background: "#E8F8F5"}}>
                <h1 className="text-left text-success mb-4">Other documents</h1>
                <table class="table">
                  <thead class="bg-primary text-white">
                    <tr>
                      <th scope="col">Doc_id</th>

                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                    {documents.map(doc =>
                      <td>doc.document_id</td>
                    )}
                      //<td>Mark</td>
                      //<td>Otto</td>
                      //<td>@mdo</td>
                      //<td>Mark</td>
                      //<td>Mark</td>
                      //<td>Mark</td>
                    </tr>
                  </tbody>
                </table>
            </div>
        );
    }
}

export default otherDocs;