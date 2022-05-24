import React from "react";


import {routers} from "./configs/routers";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";



function App() {

    return (
        <div className="App">
            <Router>
                <Switch>
                    {
                        //<Route path = '/login' element={<UserLogin/>}/>
                        // eslint-disable-next-line array-callback-return
                        routers.map(item => <Route key={item.key}{...item}/>)
                    }
                </Switch>
            </Router>

        </div>
    );
}

export default App;
