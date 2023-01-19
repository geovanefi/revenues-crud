import { useState } from "react";

export const NotasFiscais = (props:any) => {
    
    //input de dados
    const dadosIniciais = {
        nomeCompleto: '',
        telefone:'',
        email:'',
        valor:'',
        dadosAdicionais:''
    }

    let { values, setValues } = useState( dadosIniciais)

    const imputChange = (e:any) => {
        let { nomeCompleto, value} = e.target

        setValues({
            ...values,
            [nomeCompleto]: value
        })
    }

    const inputFormEnvio = (e:any) => {
        e.preventDefalt()
        props.edicaoDeDados(values)
    }

    return (
        <form autoComplete="off" onSubmit={inputFormEnvio}>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>
                    </div>
                </div>

                <input className="form-control" 
                    placeholder="1º dados a inserir" 
                    name="nomeCompleto" 
                    value={ values.nomeCompleto} 
                    onChange={imputChange}
                />
            </div>
            <div className="row">
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-mobile-alt"></i>
                        </div>
                    </div>

                    <input className="form-control" 
                        placeholder="tefone" 
                        name="telefone" 
                        value={values.telefone } 
                        onChange={imputChange}
                    />
                </div>
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-envelope"></i>
                        </div>
                    </div>

                    <input className="form-control" 
                        placeholder="email" 
                        name="email" 
                        value={values.email }
                        onChange={imputChange} 
                    />
                </div>
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                        
                        </div>
                    </div>

                    <input className="form-control" 
                        placeholder="texto escolido" 
                        name="dadosAdicionais" 
                        value={values.dadosAdicionais }
                        onChange={imputChange} 
                    />
                </div>
            </div>
        </form>
    )
}