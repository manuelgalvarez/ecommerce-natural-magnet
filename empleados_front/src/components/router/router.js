import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//Componentes para enrutar
import Login from '../login/login';
import Inicio from '../index/index';
import PrivateRoute from '../auth/privaterouter';
import empleados from '../empleados/inicioe';

export default function AppRouter(){
    return (
        <Router>
            <Switch>
                
                <PrivateRoute exact path={[ "/empleados" ]} component={ empleados } />

                <Route exact path={[ "/", "/inicio" ]} component={ Inicio } />
                
                <Route exact path={[ "/login" ]} component={ Login } />

                <Route path={ "*" } component={() => (
                    <h1 style={{marginTop:300}}>
                        404 <br/>
                        Página no encontrada.
                    </h1>)}
                />

            </Switch>
        </Router>
    );
}
