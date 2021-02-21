import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./Homepage";
import TopScores from "./TopScores"
import GamePlay from './GamePlay'

import World from "./World";
import { render } from "react-dom";
// import Resume from "./News";
// import LogIn from './Components/Login'
// import Signup from './Components/Signup'
// import ShowTasks from './Components/ShowTasks'
// import AddTask from './Components/AddTask'

export default function Main (props) {
        if (!props.loggedIn) {
            return (
                <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/Play" component={GamePlay} />
                <Route path="/Top" component={TopScores} />
                <Route path="/News" component={Homepage} />
            </Switch>
                // <div style={{ textAlign: 'center' }}>
                //     <h1 style= {{ padding: '5em'}}>
                //         Login please</h1>
                // </div>
            );
        }
        else {
            return (
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route path="/Play" component={GamePlay} />
                    <Route path="/Top" component={TopScores} />
                    <Route path="/News" component={Homepage} />

                </Switch>
            );
        }
};
