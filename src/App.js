import React from 'react'
import Quote from './component/Quote/Quote'
import Food from './component/Food/Food';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './component/Home/Home';

function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path='/' exact component={Home}></Route>
                    <Route path="/quote" exact component={Quote}></Route>
                    <Route path="/food" exact component={Food}></Route>
                </Switch>
            </Router>
        </>
    )
}

export default App
