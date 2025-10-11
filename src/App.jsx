
import './App.css'
import Lista from '../componente/Lista'
function App() {

  const meusItens = [
    <div className="linha"><img src="src/assets/hotel.jpg" />  Hotel California - Eagles </div>,
    <div className="linha"><img src="src/assets/scorpions1.jpg" /> Still Loving You - Scorpions </div>,
    <div className="linha"><img src="src/assets/queen.jpg" /> Bohemian Rhapsody - Queen</div>,
    <div className="linha"><img src="src/assets/creep.jpg" /> Creep - Radiohead </div>,
    <div className="linha"><img src="src/assets/21guns.jpg" /> 21 Guns - Green Day </div>,
    <div className="linha"><img src="src/assets/bonjovi.jpg" /> Wanted Dead or Alive - Bon Jovi </div>,
    <div className="linha"><img src="src/assets/scorpions2.jpg" /> Under The Same Sun - Scorpions </div>,
    <div className="linha"><img src="src/assets/greenday2.jpg" /> Boulevard of The Broken Dreams - Green Day </div>,
    <div className="linha"><img src="src/assets/the police.jpg" /> Every Breath You Take - The Police </div>,
    <div className="linha"><img src="src/assets/speedwagon.jpg" /> Take It On the Run - Speedwagon </div>,]

  return (
    <div className="App">
        <h1 className="titulo">RENDERIZAÇÃO DE LISTA</h1>
        <Lista itens= {meusItens}/>
        <Lista itens= {[]}/>
        
    </div>
  )
}

export default App;
