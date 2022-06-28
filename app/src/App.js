import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {


  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch('api/v1/user')
        .then(response => response.json())
        .then(data => {
          setUsers(data);
          setLoading(false);
        })
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <div className="App-intro">
              <h2>User List</h2>
              {users.map(user =>
                  <div key={user.id}>
                      <table>
                          <tr>
                              <th>ID</th>
                              <th>Username</th>
                              <th>Name</th>
                              <th>Email</th>
                          </tr>
                          <tr>
                              <td>{user.id}</td>
                              <td>{user.userName}</td>
                              <td>{user.firstName} {user.lastName}</td>
                              <td>{user.email}</td>
                          </tr>

                      </table>
                  </div>
              )}
          </div>
      </header>
    </div>
  );
}

export default App;
