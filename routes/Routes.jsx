import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
//  Personal Page Components
import Catalogue from '../views/Catalogue';
import Register from '../views/Register';
import LogIn from '../views/LogIn';


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