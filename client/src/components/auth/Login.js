import React, { Fragment, useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

const Login = ({ setToken }) => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const {
        email,
        password
    } = formData;

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

        const local = "http://localhost:5000/api/auth";
        const production = "/api/auth";

        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        const body = JSON.stringify({ email, password });

        try {
            const res = await axios.post(production, body, config);
            console.log("Your token: " + res.data.token);
            setToken(res.data.token);
        } catch (error) {
            console.log(error.response.data);
        }

    }

    return (
        <Fragment>
            <h1 className="has-text-black" style={ h1 }>Welcome to Simple Service Agreement</h1>
            <h2 className="has-text-black" style={ h2 }>Login or <Link to="/">Register</Link></h2>
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
                            <input className="input" type="text" placeholder="Password" name="password" value={password} onChange={ event => onChange(event)} required/>
                            
                        </div>
                    </div>
                    <input type="submit" class="button is-success" />
                </form>
            </div>
        </Fragment>
    )
}

export default Login;
