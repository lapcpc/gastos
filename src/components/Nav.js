import React from "react";
import {Link} from 'react-router-dom'
import { auth } from "./firebase";
import { getAuth, signOut } from "firebase/auth";
import  { useHistory } from 'react-router-dom'
const Nav = () =>{
   
    let history= useHistory();
   


const salir = () =>{
    signOut(auth).then(() => {
        // Sign-out successful.
        history.push('/')
      }).catch((error) => {
        // An error happened.
      });

}

    return (
        

        <>
            <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
                <div class="container-fluid">
                <Link className="navbar-brand" to="/">Balance</Link>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <Link className="navbar-brand" to="/gastos">Nuevo Gasto</Link>
                    </li>
                   
                    
                    
                    <li><button class="btn btn-primary" onClick={salir}>logout</button></li>
                    </ul>
                </div>
                </div>
            </nav>
           
        </>
    );
    
};
export default Nav;





