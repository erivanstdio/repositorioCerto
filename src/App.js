import React from 'react';
import Routes from './routes';
import Header from './components/Header'

function App (){
  return(
    <>
    {/* <Header callback={()=>alert('ola')}/> */}
    <Routes/>
    </>
  )
}

export default App;