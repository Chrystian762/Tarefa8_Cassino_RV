
import './App.css'

import Condicional from '../componente/Condicional'
function App() {

  return (
    <div className="App">
      <p className="info">Foi adicionado um "if" e "else" para verificar se o E-Mail contém "@", caso contrário, ele não aparece.</p>
        <h1 className="titulo">Testando Eventos</h1>
        <Condicional/>
    </div>
  )
}

export default App
