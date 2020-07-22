import React from 'react';
import './styles.css';
import Header from '../../components/Header';

function Pagina1(){
    return(
        <>
        <Header renderWord={true} callback={()=>alert('alooou')}/>
        <h1>fotos</h1>
        </>
    )
}

export default Pagina1;