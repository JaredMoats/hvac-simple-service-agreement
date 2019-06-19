import React, { Fragment, useState } from 'react';
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

const Register = ({ storeToken, getToken, setActiveUser }) => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        companyName: "",
        password: "",
        password2: "",
        role: "",
        selectedOption: ""
    });

    const [login, setLoginStatus] = useState({
        toLogin: false
    });

    const { 
        firstName,
        lastName,
        email,
        companyName,
        password,
        password2,
        role,
        selectedOption
     } = formData;

     const {
         toLogin
     } = login;

    const h1 = {
        fontSize: "40px"
    }

    const h2 = {
        fontSize: "20px"
    }

    const onChange = event => {
        setFormData({ ...formData, [event.target.name]: event.target.value, selectedOption: event.target.value });
    }

    const onSubmit = async event => {
        event.preventDefault();

        if(password !== password2) {
            alert("Passwords do not match");
        } else {
            //post request to create new employee
            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            }

            const body = JSON.stringify({ firstName, lastName, companyName, email, password, role });
            console.log("JSON form data: " + body);

            try {
                const res = await axios.post("/api/employees", body, config);
                storeToken(res.data.token);

                /* Get active user, store in state. */
                const token = getToken();
                const headers = {
                    "x-auth-token": token
                }

                console.log("Token set in headers object");
                console.log("toDashboard: " + toLogin);
                
                setLoginStatus({ toLogin: true });
            } catch (error) {
                console.log(error.response.data);
            }
        }
    }

    if(!toLogin) {
        return (
            <Fragment>
                <h1 className="has-text-black" style={ h1 }>Welcome to Simple Service Agreement</h1>
                <h2 className="has-text-black" style={ h2 }>Register or <Link to="/login">Login</Link></h2>
                <div className="card">
                    <form onSubmit={ event => onSubmit(event) }>
                        <div className="field">
                            <label className="label">First Name</label>
                            <div className="control has-icons-left">
                                <input className="input" type="text" placeholder="First Name" name="firstName" value={firstName} onChange={ event => onChange(event)} required />
                                
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Last Name</label>
                            <div className="control has-icons-left">
                                <input className="input" type="text" placeholder="Last Name" name="lastName" value={lastName} onChange={ event => onChange(event)} required/>
                                
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Company Name</label>
                            <div className="control has-icons-left">
                                <input className="input" type="text" placeholder="Company Name" name="companyName" value={companyName} onChange={ event => onChange(event)} required/>
                                
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Email</label>
                            <div className="control has-icons-left">
                                <input className="input" type="text" placeholder="Email" name="email" value={email} onChange={ event => onChange(event)} required/>
                                
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Password</label>
                            <div className="control has-icons-left">
                                <input className="input" type="password" placeholder="Password" name="password" value={password} onChange={ event => onChange(event)} required/>
                                
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Confirm Password</label>
                            <div className="control has-icons-left">
                                <input className="input" type="password" placeholder="Confirm Password" name="password2" value={password2} onChange={ event => onChange(event)} required/>
                                
                            </div>
                        </div>
                        <div className="field">
                            <label className="radio">
                                Technician
                                <input type="radio" name="role" value="technician" checked={selectedOption === "technician"} onChange={ event => onChange(event) }/>
                            </label>
                            <label className="radio">
                                Dispatcher
                                <input type="radio" name="role" value="dispatcher" checked={selectedOption === "dispatcher"} onChange={ event => onChange(event) }/>
                            </label>
                            <label className="radio">
                                Dealer
                                <input type="radio" name="role" value="dealer" checked={ selectedOption === "dealer" } onChange={ event => onChange(event) }/>
                            </label>
                        </div>
                        <input type="submit" className="button is-success" />
                    </form>
                </div>
            </Fragment>
        );
    } else {
        return(
            <Redirect to="/login" />
        );
    }
}

export default Register;
