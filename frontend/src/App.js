import React from 'react';
//importaciones para las rutas del proyecto
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom"
//instalar todas las vistas
import PanelDeControl from './components/ControlPanel'//importando el panel de control
import Catalogue from './pages/Catalogue';
import Register from './pages/Register';
import LogIn from './pages/LogIn';


function App() {
  return (
    <Router>
        <div>
            <Switch>
                    <Route exact path="/config">
                        <PanelDeControl/> 
                    </Route>
                    <Route exact path="/Register">
                    	<Register/>
                    </Route>
                    <Route exact path="/LogIn">
                    	<LogIn/>
                    </Route>
                    <Route exact path="/">
                        <Catalogue/>
                    </Route>
            </Switch>
        </div>
    </Router>
  );
}

export default App;
