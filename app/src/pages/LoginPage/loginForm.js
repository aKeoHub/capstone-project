import React, {useEffect, useState} from "react";
import './login.css';

const LoginForm  = () => {


    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [userName, setUsernameReg] = useState('');
    const [password, setPasswordReg] = useState('');


    useEffect(() => {
        setLoading(true);

        fetch('api/v1/user')
            .then(response => response.json())
            .then(data => {
                setUsers(data);
                setLoading(false);
            })
    }, []);


    return (


        <div className="wrapper" style={{backgroundImage: 'backgroundImg.jpg'}}>
            <div className="inner">
                <form action="">
                    <h3>Login</h3>
                    <div className="form-wrapper">
                        <div className="form-wrapper">
                            <label htmlFor="">Username</label>
                            <input type="text" className="form-control" onChange={(e) => {
                                setUsernameReg(e.target.value);
                            }}/>
                        </div>
                    </div>


                    <div className="form-wrapper">
                        <label htmlFor="">Password</label>
                        <input type="password" className="form-control" onChange={(e) => {
                            setPasswordReg(e.target.value);
                        }}/>
                    </div>

                    <div className="checkbox">
                        <label>
                            <input type="checkbox"/> I am not a human.
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <button>Login</button>
                </form>
            </div>
        </div>


    );
}

export default LoginForm;