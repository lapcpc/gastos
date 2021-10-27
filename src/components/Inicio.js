
import React,{useState} from "react";
import ReactDom from "react-dom";
import Formulario from "./Formulario";
import Nav from "./Nav";
import Balance from "./Balance";
import { auth } from "./firebase";
const Inicio = () =>
{
    const [session, setSession] = useState(false);

    //co
   console.log(session);
    return (
        <>{session === true ?
             (<>
             <Nav />
            <Balance />
                            
             </>): 
            (<>
             <Formulario setSession={setSession} />
            </>)
        }
            
        </>
    );
    
};
export default Inicio;