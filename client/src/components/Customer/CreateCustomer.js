import React, { Fragment, useState } from 'react';
import { Redirect } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar";

const CreateCustomer = ({ activeUser, getToken }) => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        streetAddress: "",
        state: "",
        zipCode: "",
        homePhone: "",
        mobilePhone: "",
        workPhone: "",
        canText: false,
        canEmail: false,
        inCityLimits: true,
        notes: ""
    });

    const [dashboard, setDashboardStatus] = useState({
        toDashboard: false
    });

    const {
        toDashboard
    } = dashboard;

    const { 
        firstName,
        lastName,
        email,
        streetAddress,
        state,
        zipCode,
        homePhone,
        mobilePhone,
        workPhone,
        canText,
        canEmail,
        inCityLimits,
        notes
    } = formData;

    const onChange = event => {
        setFormData({ ...formData, [event.target.name]: event.target.value});
    }

    const onSubmit = async event => {
        event.preventDefault();

        const body = JSON.stringify({ 
            firstName,
            lastName,
            email,
            streetAddress,
            state,
            zipCode,
            homePhone,
            mobilePhone,
            workPhone,
            canText,
            canEmail,
            inCityLimits,
            notes 
        });

        try {
            /* Get stored token to send in post request */
            const token = getToken();

            /* If no token, return error message */
            if(!token) {
                console.log("There is no token");
                return "There is no token";
            }

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    "x-auth-token": token
                }
            }

            const res = await axios.post("/api/customers", body, config);
            setDashboardStatus({ toDashboard: true });

        } catch (error) {
            console.log(error.message);
        }
    }

    if(!activeUser) {
        return(
            <h1>You must be logged in to do that</h1>
        )
    } 
    
    if(!toDashboard) {
        return (
            <Fragment>
                <Navbar />
                <div className="card">
                    <h1>Create customer</h1>
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
                            <label className="label">Email</label>
                            <div className="control has-icons-left">
                                <input className="input" type="email" placeholder="Email" name="email" value={email} onChange={ event => onChange(event)} required/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Street Address</label>
                            <div className="control has-icons-left">
                                <input className="input" type="text" placeholder="Street Address" name="streetAddress" value={streetAddress} onChange={ event => onChange(event)} required/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">State</label>
                            <div className="control has-icons-left">
                                <input className="input" type="text" placeholder="State" name="state" value={state} onChange={ event => onChange(event)} required/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Zip Code</label>
                            <div className="control has-icons-left">
                                <input className="input" type="text" placeholder="Zip Code" name="zipCode" value={zipCode} onChange={ event => onChange(event)} required/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Home Phone</label>
                            <div className="control has-icons-left">
                                <input className="input" type="text" placeholder="Home Phone" name="homePhone" value={homePhone} onChange={ event => onChange(event)} required/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Mobile Phone</label>
                            <div className="control has-icons-left">
                                <input className="input" type="text" placeholder="Mobile Phone" name="mobilePhone" value={mobilePhone} onChange={ event => onChange(event)} required/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Work Phone</label>
                            <div className="control has-icons-left">
                                <input className="input" type="text" placeholder="Work Phone" name="workPhone" value={workPhone} onChange={ event => onChange(event)} required/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Notes</label>
                            <div className="control has-icons-left">
                                <input className="input" type="text" placeholder="Notes" name="notes" value={notes} onChange={ event => onChange(event)} required/>
                            </div>
                        </div>
                        <input type="submit" className="button is-success" />
                    </form>
                </div>
            </Fragment>
        )
    } else {
        return (
            <Redirect to="/dashboard"/>
        )
    }
}

export default CreateCustomer;
