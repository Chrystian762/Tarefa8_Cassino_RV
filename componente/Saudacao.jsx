function Saudacao({nome}){

    function gerarSaudacao(algunNome){
        return `Olá ${algunNome}, seja Bem-Vindo!`
    }

    return(

        <>
           {nome && <p>{gerarSaudacao(nome)}</p>}
        </>
    )
}
export default Saudacao;