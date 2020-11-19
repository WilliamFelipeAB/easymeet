import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Login from './Pages/Login';
import CreateMeet from './Pages/CriarEncontro';
import Menu from './Pages/Menu';
import Listar from './Pages/ListarEventos';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/create" component={CreateMeet}/>
                <Route path="/home" component={Menu}/>
                <Route path="/list" component={Listar}/>
                <Route path="/datails" component={Listar}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;