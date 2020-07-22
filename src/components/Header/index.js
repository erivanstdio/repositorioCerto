import React, {useState}  from 'react';
import './styles.css';

function Header(props){
    const [estado,setEstado] = useState(5);
    const [estado2,setEstado2] = useState(30);

    function alteraEstado(){
        setEstado(estado + 1)
    }
    
    function alteraEstado2(){
        setEstado2(Math.random())
    }

    // onClick={props.callback}
    return(
        <header  className='mainHeader'>
            {props.renderWord && <h1>palavra fixa</h1>}{/* Só vai mostrar o H1 se o renderWord for True */}
            <p>estado:{estado}</p>
            <button onClick={alteraEstado}>Alterar Estado</button>
            <p>estado DOIS:{estado2}</p>
            <button onClick={alteraEstado2}>Alterar Estado 2</button>
        </header>
    )
}

export default Header;