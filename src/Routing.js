import React from 'react'
import {
    Switch,
    Route
} from 'react-router-dom';
import {Conference} from "./components/conference/Conference";
import {DaySchedules} from "./components/conference/DaySchedules";
import {RegisterForm} from "./components/user/RegisterForm";
import {LoginForm} from "./components/user/LoginForm";
import {Profile} from "./components/user/Profile";


export const Routing = () => {
    return (
        <>
            <Switch>
                <Route exact path='/'>
                    <Conference/>
                </Route>
                <Route path='/login'>
                    <LoginForm/>
                </Route>
                <Route path='/register'>
                    <RegisterForm/>
                </Route>
                <Route path='/me'>
                    <Profile/>
                </Route>
                <Route path='/:day'>
                    <DaySchedules/>
                </Route>
            </Switch>
        </>
    )
}