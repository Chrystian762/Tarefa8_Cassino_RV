import { useState } from "react";
function Condicional(){

    const [email, setEmail] = useState();
    const [UserEmail, setUserEmail] = useState();


     function enviarEmail(e){
        e.preventDefault();

        if (email.includes("@")) {
            setUserEmail(email)
            console.log(UserEmail)
        } else {
            setUserEmail(" inválido, precisa conter @");
        }
    }

    function limparEmail(){
        setUserEmail('')
    }

    return(
        <div>
            <h2 className="titulo2">Cadastre um E-mail:</h2>
            <form>
                <input className="input" type="email" placeholder="Digite seu e-mail" onChange={(e) => setEmail(e.target.value)}/>
                <button className="btn" type="submit" onClick={enviarEmail}>Enviar E-mail</button>
                
            {UserEmail && (
                <div>
                    <p className="resposta">O E-Mail do usuário é {UserEmail}</p>
                    <button className="btn" onClick={limparEmail}>Limpar</button>
                </div>
            )}
            </form>
        </div>
    )

}
export default Condicional;