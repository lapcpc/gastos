import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Inicio from "./Inicio";
import Nav from "./Nav";
import Gastos from "./Gastos";
import Nuevo from "./Nuevo";
import Registro from "./Registro";
const Ruta = () =>
{
    return (
        <>
<Router>
	<Route path="/" exact component={Inicio} />
    <Route path="/gastos" component={Gastos} />
    <Route path="/nuevo" component={Nuevo} />
    <Route path="/registro" component={Registro} />
</Router>
</>
        
    );
    
};
export default Ruta;