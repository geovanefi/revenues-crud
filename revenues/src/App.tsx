import './App.css'
import { CadastroCliente } from './components/cadastros/CadastroCliente';

export function App() {
  return (
    <div className="row">
      <div className="col-md-8 offset-md-2">
        < CadastroCliente />

      </div>
    </div>
  );
}

