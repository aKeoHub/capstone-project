import React, {Component} from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../../../services/auth.service";

const required = value => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};


export default class Login extends Component {

    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.state = {
            username: "",
            password: "",
            loading: false,
            message: ""
        };
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    handleLogin(e) {
        e.preventDefault();
        this.setState({
            message: "",
            loading: true
        });
        this.form.validateAll();
        if (this.checkBtn.context._errors.length === 0) {
            AuthService.login(this.state.username, this.state.password).then(
                (response) => {
                    //console.log(response.data,"===========================================");
                    this.props.history.push("/profile");
                    window.location.reload();
                },
                error => {
                    //this.props.history.push("/login");
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();
                    this.setState({
                        loading: false,
                        message: "Username or Password incorrect."
                    });
                }
            );
        } else {
            //window.location.replace("https://yourdomain.com/success");
            this.setState({
                loading: false
            });
        }
    }

    render() {

        return (

            <div className="wrapper" style={{backgroundImage: 'backgroundImg.jpg'}}>
                <div className="inner">

                    <Form
                        onSubmit={this.handleLogin}
                        ref={c => {
                            this.form = c;
                        }}
                    >
                        <div className="form-wrapper">
                            <div className="form-wrapper">
                                <label htmlFor="username">Username</label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    name="username"
                                    value={this.state.username}
                                    onChange={this.onChangeUsername}
                                    validations={[required]}
                                />
                            </div>
                        </div>


                        <div className="form-wrapper">
                            <div className="form-wrapper">
                                <label htmlFor="password">Password</label>
                                <Input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.onChangePassword}
                                    validations={[required]}
                                />
                            </div>
                        </div>
                        <div className="checkbox">
                            <label>
                                <input type="checkbox"/> I am not a human.
                                <span className="checkmark"></span>
                            </label>
                        </div>

                        <div className="form-group">
                            <button
                                className="btn btn-primary btn-block"
                                //disabled={this.state.loading}
                                //disabled={disable} onClick={() => setDisable(true)}
                            >
                                {this.state.loading && (
                                    <span className="spinner-border spinner-border-sm"></span>
                                )}
                                <span>Login</span>
                            </button>
                        </div>
                        {this.state.message && (
                            <div className="form-group">
                                <div className="alert alert-danger" role="alert">
                                    {this.state.message}
                                </div>
                            </div>
                        )}
                        <CheckButton
                            style={{display: "none"}}
                            ref={c => {
                                this.checkBtn = c;
                            }}
                        />
                    </Form>
                    <button onClick={AuthService.logout}
                            className="btn btn-primary btn-block"
                            disabled={this.state.loading}
                    >
                        {this.state.loading && (
                            <span className="spinner-border spinner-border-sm"></span>
                        )}
                        <span>Logout</span>
                    </button>
                </div>
            </div>


        );
    }
}