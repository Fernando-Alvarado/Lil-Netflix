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
import Home from './components/Home'


function App() {
  return (
    <Router>
        <div>
            <Switch>
                    <Route path="/config"> 
                        <PanelDeControl/>
                    </Route>
                    <Route path="/"> 
                        <Home/> 
                    </Route>
            </Switch>
        </div>
    </Router>
  );
}

export default App;
