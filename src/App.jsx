import { useState } from 'react';
import SeuNome from '../componente/SeuNome';
import Saudacao from '../componente/Saudacao';
import './App.css'

function App() {

  const [nome, setNome] = useState("");
  
  return (
    <div className="App">
        <h1 className="titulo">State Lift</h1>
        <SeuNome setNome={ setNome }/>
        <Saudacao nome={nome}/>
        {nome &&(
          <p>O Nome digitado foi: {nome}</p>
        )}
      
    </div>
  )
}

export default App;
