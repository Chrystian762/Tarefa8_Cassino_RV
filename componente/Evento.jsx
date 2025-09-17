import Button from "./evento/Button";
function Evento(){
    function Primeiro(){
                console.log(`Primeiro disparo ATIVADO!!! ${numero}`)
    }
    function Segundo(){
                console.log(`Segundo disparo ATIVADO!!! ${numero}`)
    }
        return(

            <>                
                <Button event={Primeiro} text= "Primeiro disparo do evento"/>
                <Button event={Segundo} text= "Segundo disparo do evento"/>
            </>

        )

}
export default Evento;