import React, { Fragment, useState } from 'react';
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

const Login = ({ storeToken, getToken, setActiveUser }) => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [dashboard, setDashboardStatus] = useState({
        toDashboard: false
    });

    const {
        email,
        password
    } = formData;

    const {
        toDashboard
    } = dashboard;

    const h1 = {
        fontSize: "40px"
    }

    const h2 = {
        fontSize: "20px"
    }

    const onChange = event => {
        setFormData({ ...formData, [event.target.name]: event.target.value});
    }

    const onSubmit = async event => {
        event.preventDefault();

        const localPost = "http://localhost:5000/api/auth";
        const productionPost = "/api/auth";

        const localGet = "http://localhost:5000/api/employees/me";
        const productionGet = "/api/employees/me";

        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        const body = JSON.stringify({ email, password });

        try {
            /*
                Will get token upon successful login. 
                Call function to store it locally
             */
            const res = await axios.post("/api/auth", body, config);
            storeToken(res.data.token);

            /* Get active user, store in state. */
            const token = getToken();
            const headers = {
                "x-auth-token": token
            }

            const employee = await axios.get("/api/employees/me", { headers: headers });
            setActiveUser(employee);
            setDashboardStatus({ toDashboard: true });

        } catch (error) {
            console.log(error.message);
        }
    }

    if(!toDashboard) {
        return (
            <Fragment>
                <h1 className="has-text-black" style={ h1 }>Welcome to Simple Service Agreement</h1>
                <h2 className="has-text-black" style={ h2 }>Login or <Link to="/">Register</Link></h2>
                <h2 className="has-text-black" style={ h2 }><Link to="/dashboard">Dashboard</Link></h2>
                <div className="card">
                    <form onSubmit={ event => onSubmit(event) }>
                        <div className="field">
                            <label className="label">Email</label>
                            <div className="control has-icons-left">
                                <input className="input" type="text" placeholder="Email" name="email" value={email} onChange={ event => onChange(event)} required />
                                
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Password</label>
                            <div className="control has-icons-left">
                                <input className="input" type="password" placeholder="Password" name="password" value={password} onChange={ event => onChange(event)} required/>
                                
                            </div>
                        </div>
                        <input type="submit" className="button is-success" />
                    </form>
                </div>
            </Fragment>
        )
    } else {
        return(
            <Redirect to="/dashboard" />
        )
    }
}

export default Login;
