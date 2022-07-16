import React from 'react';
import LoginForm from "./loginForm";
import Login from "./components/login.component";


class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            //<LoginForm/>
       <Login/>
            // <form onSubmit={this.handleSubmit}>
            //     <label>
            //         Name:
            //         <input type="text" value={this.state.value} onChange={this.handleChange} />
            //     </label>
            //     <input type="submit" value="Submit" />
            // </form>
        );
    }
}

export default LoginPage;