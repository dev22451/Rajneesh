import React from 'react';
import { Route, Switch } from 'react-router';
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Message from "./Messages";
import Navbar from './Navbar';

const Main = () => {

    return (
        <>
            <div>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={AboutUs} />
                    <Route exact path='/contact' component={ContactUs} />
                    <Route path='/message' component={Message} />

                </Switch>

            </div>
        </>
    )
}


export default Main;