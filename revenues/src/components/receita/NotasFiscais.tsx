import { NotasFiscais } from "../cadastros/CadastroCliente"
import fireDb from '../../../firebase'


export const CadastroCliente = () => {

    const edicaoDeDados = (obj:any) => {
        fireDb.child('clientes').push(
            obj, 
            (error:any) => {
                if(error){
                    console.log(error)
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
                    < NotasFiscais edicaoDeDados={edicaoDeDados} />
                </div>
                <div>
                    <h2>Notas Fiscais - Clientes</h2>
                </div>
            </div>
        </div>
    )
}
