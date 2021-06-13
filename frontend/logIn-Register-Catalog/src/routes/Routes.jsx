import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
//  Personal Page Components
import Catalogue from '../pages/Catalogue';
import Register from '../pages/Register';
import LogIn from '../pages/LogIn';


const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Catalogue}/>
                <Route exact path="/LogIn" component={LogIn}/>
                <Route exact path="/Register" component={Register}/> 
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;