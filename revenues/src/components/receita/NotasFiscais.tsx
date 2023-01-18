import { NotasFiscais } from "../cadastros/CadastroCliente"

export const CadastroCliente = () => {
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
                    < NotasFiscais />
                </div>
                <div>
                    <h2>Notas Fiscais - Clientes</h2>
                </div>
            </div>
        </div>
    )
}
