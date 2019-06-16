import React, { Fragment } from 'react';
import Navbar from "./Navbar";

const Dashboard = ({ setActiveUser, activeUser, getToken }) => {

    if(activeUser === null) {
        return(
            <h1>You must be logged in to do that</h1>
        )
    } else {
        return (
            <Fragment>
                <Navbar />
                <h1>Welcome back, { console.log("Active user: " + activeUser) } {activeUser ? activeUser.data.firstName : "<name>"}.</h1>
            </Fragment>
        )
    }
}

export default Dashboard;
