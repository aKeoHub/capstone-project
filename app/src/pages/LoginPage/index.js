import React from 'react';
import LoginForm from "./loginForm";
import Login from "./components/login.component";
import axios from "axios";
import './login.css'


class LoginPage extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         username: '',
    //         password: ''
    //     };
    //
    //     this.handleChangeUsername = this.handleChangeUsername.bind(this);
    //     this.handleChangePassword = this.handleChangePassword.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }
    //
    // handleChangeUsername(event) {
    //     this.setState({username: event.target.value});
    // }
    //
    //
    // handleChangePassword(event) {
    //     this.setState({password: event.target.value});
    // }
    //
    // handleSubmit(event) {
    //     alert('A name was submitted: ' + this.state.username + this.state.password);
    //     axios.post('/login', {
    //         username: this.state.username,
    //         password: this.state.password
    //     })
    //         .then(function (response) {
    //             console.log(response);
    //         })
    //     event.preventDefault();
    // }

    render() {
        return (
          // <LoginForm/>
            <div className=''>
                <Login/>
            </div>

       //      <form onSubmit={this.handleSubmit}>
       //          <label>
       //              Name:
       //              <input type="text" value={this.state.value} onChange={this.handleChangeUsername} />
       //          </label>
       //
       //          <label>
       //              Password:
       //              <input type="text" value={this.state.value} onChange={this.handleChangePassword} />
       //          </label>
       //          <input type="submit" value="Submit" />
       //      </form>
        );
    }
}

export default LoginPage;