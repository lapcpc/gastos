import React,{useState} from "react";
import {auth} from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {Link} from 'react-router-dom'
              
import "./firebase";



// Your web app's Firebase configuration

  
  // Initialize Firebase
 

const Formulario = (props) =>
{
    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");
const onChange = (e) => {
		if(e.target.name === "usuario"){
			setUsuario(e.target.value);		
		}else if (e.target.name === "password"){
		setPassword(e.target.value);
		}
	
};

const onSubmit  = async (e) =>{
e.preventDefault();

props.setSession(true);
try {
  const user = await signInWithEmailAndPassword(
    auth,
    usuario,
    password
  );
  props.setSession(true);
  console.log(user);
 
} catch (error) {
  console.log(error.message);
  props.setSession(false);
}


};
    return (
        <>
                <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-yin-yang" viewBox="0 0 16 16">
  <path d="M9.167 4.5a1.167 1.167 0 1 1-2.334 0 1.167 1.167 0 0 1 2.334 0Z"/>
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM1 8a7 7 0 0 1 7-7 3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 0 0 7 7 7 0 0 1-7-7Zm7 4.667a1.167 1.167 0 1 1 0-2.334 1.167 1.167 0 0 1 0 2.334Z"/>
</svg>
                <a className="text-white" to="#">Ibero Finantial</a>
             
            </nav>
            <h1>Inicio de sesion</h1>
            <form action="" onSubmit={onSubmit}>
                    <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" name="usuario" aria-describedby="emailHelp" placeholder="Enter email" value={usuario} onChange={onChange}></input>
                   
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" name="password" placeholder="Password" value={password} onChange={onChange}></input>
                </div>
                <button type="submit" class="btn btn-primary">Iniciar sesion</button>
        </form>
        <br></br>
        <Link className="navbar-brand" to="/registro">Registro</Link>
        </>
    );
    
};
export default Formulario;