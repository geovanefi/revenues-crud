import { fireDb } from  "../../database/firebase"
import { CadastroCliente } from "../cadastros/CadastroCliente"


export const NotasFiscais = () => {

    const edicaoDeDados = obj => {
        fireDb.child('clientes').push(
            obj, 
            (error:any) => {
                if(error){
                    console.log(`esta com erro` + error)
                }
        })
    }

    return (
        <div>
            <div>
                <div>
                    <h1>Cadastro de Clientes</h1>
                    <hr className="my-4"/>
                    <p className="lead">Modo de vizualização.</p>
                    <p className="lead">Modo de edição.</p>
                </div>
            </div>
            <div className="row">
                <div>
                    < CadastroCliente edicaoDeDados={edicaoDeDados} />
                </div>
                <div>
                    <h2>Notas Fiscais - Clientes</h2>
                </div>
            </div>
        </div>
    )
}
