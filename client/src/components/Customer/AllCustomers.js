import React, { Fragment, useState, useEffect } from 'react';
import Navbar from "../Navbar";
import axios from "axios";


const AllCustomers = ({ getToken, activeUser }) => {

    const [customers, setCustomers] = useState({
        customersData: null
    });

    const {
        customersData
    } = customers;

    useEffect(() => {
        async function fetchCustomers() {
            /* 
                When the component mounts, get all customers
                and store them in state
            */
            try {
                const token = getToken();

                if(!token) {
                    console.log("From AllCustomers: No token");
                    return null;
                }

                const headers = {
                    "x-auth-token": token
                }

                const customers = await axios.get("/api/customers", { headers: headers });

                if(!customers) {
                    console.log("From AllCustomers: Found no customers");
                    return null;
                }

                setCustomers({ ...customers, customersData: customers });

            } catch (error) {
                console.log("Error in the AllCustomers component");
                console.error(error.message);
            }
        }
      fetchCustomers();
    }, []);

    if(!activeUser) {
        return(
            <h1>You must be logged in to do that</h1>
        )
    }

    if(!customersData) {
        return(
            <Fragment>
                <Navbar />
                <h1>No customers found</h1>
            </Fragment>
        )
    }

    return (
        <Fragment>
            <Navbar />
            <h1>Customers: </h1>
            { 
                customersData.data.map((customer, index) => (
                    <p key={index}>Customer: { customer.firstName } { customer.lastName } </p>
                ))
            }
        </Fragment>
    )
}

export default AllCustomers;
