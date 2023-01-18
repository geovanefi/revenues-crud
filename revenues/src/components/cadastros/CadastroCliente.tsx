import { useState } from "react"

export const NotasFiscais = () => {

    //input de dados
    const dadosIniciais = {
        nomeCompleto: '',
        telefone:'',
        email:'',
        valor:'',
        dadosAdcionais:''
    }

    let { values, setValues } = useState(dadosIniciais)

    return (
        <form>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>
                    </div>
                </div>

                <input className="form-control" placeholder="1º dados a inserir" name="nomeCompleto" value={values.nomeCompleto } />
            </div>
        </form>
    )
}