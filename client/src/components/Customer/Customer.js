import React, { Fragment, useState, useEffect } from 'react';
import Navbar from "../Navbar";
import axios from "axios";

const Customer = ({ match, getToken, activeUser }) => {

    const [customer, setCustomer] = useState({
        customerData: null
    });

    const {
        customerData
    } = customer;

    useEffect(() => {
        async function fetchCustomer() {
            /* 
                When component mounts, fetch
                customer via ID in URL and store
                it in state
            */
           try {
               const token = getToken();

               if(!token) {
                   console.log("From Customer: No token");
                   return null;
               }

               const headers = {
                   "x-auth-token": token
               }

               /* Get ID from React URL */
               const id = match.params.id;

               const customer = await axios.get(`/api/customers/${id}`, { headers: headers });

               if(!customer) {
                   console.log("From Customer: Found no customer");
                   return null;
               }

               setCustomer({ customerData: customer });

           } catch (error) {
               console.log("Error in Customer component");
               console.error(error.message);
           }
        }
        fetchCustomer();
    }, []);

    if(!activeUser) {
        return(
            <h1>You must be logged in to do that</h1>
        )
    }

    if(!customerData) {
        return(
            <Fragment>
                <Navbar />
                <h1>Customer not found</h1>
            </Fragment>
        )
    }

    if(customerData) {
        const { 
            firstName,
            lastName,
            email,
            streetAddress,
            state,
            zip,
            homePhone,
            mobilePhone,
            workPhone,
            hasServiceAgreement
         } = customerData.data;

         if(!hasServiceAgreement) {
             return(
                <Fragment>
                    <Navbar />
                    <h1>{ firstName }</h1>
                    <h1>{ lastName }</h1>
                    <h1>{ email }</h1>
                    <h1>{ streetAddress }</h1>
                    <h1>{ state }</h1>
                    <h1>{ zip }</h1>
                    <h1>{ homePhone }</h1>
                    <h1>{ mobilePhone }</h1>
                    <h1>{ workPhone }</h1>
                    <a className="button is-danger">Create Service Agreement</a>
                </Fragment>
             )
         } else {
            return(
                <Fragment>
                    <Navbar />
                    <h1>{ firstName }</h1>
                    <h1>{ lastName }</h1>
                    <h1>{ email }</h1>
                    <h1>{ streetAddress }</h1>
                    <h1>{ state }</h1>
                    <h1>{ zip }</h1>
                    <h1>{ homePhone }</h1>
                    <h1>{ mobilePhone }</h1>
                    <h1>{ workPhone }</h1>
                    <a className="button is-primary">View Service Agreement</a>
                </Fragment>
             )
         }

    }

}

export default Customer;
