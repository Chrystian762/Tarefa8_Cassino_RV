function Lista ({itens}){

return(

<>
    <div className="Lista">
        <h3 className="titulo2">Lista de Músicas:</h3>
        {itens.length > 0 ? (
        itens.map((item, index) => (
            <div className="lista">
                <p className="Itens" key={index}>{item}</p>
            </div>
        ))) : (
            <p className="Itens">Sem Itens</p>
        )}
    </div>

</>


)



}
export default Lista;