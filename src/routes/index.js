import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Pagina1 from '../views/Pagina1';
import Pagina2 from '../views/Pagina2';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <h1>algumacoisa</h1>
                </Route>
                <Route exact={true} path='/pagina1'>
                    <Pagina1/>
                </Route>
                {/* //merma coisa */}
                <Route exact path='/pagina2'> 
                    <Pagina2/>
                </Route>
                <Route path='*'>
                    <h1>404 not found</h1>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;