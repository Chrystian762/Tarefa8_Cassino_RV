function SeuNome({setNome}){

    
    return(
      <div className="divInput">
        <p className="titulo2">Nome:</p>
        <input className="input" type="text" placeholder="Digite seu Nome" onChange={(e) => setNome(e.target.value)}/>
      </div>

    )
}

export default SeuNome;
