import 'bootstrap/dist/css/bootstrap.min.css';
import DadosPrincipais from './components/DadosPrincipais'
import Produtos from './components/Produtos'
import Totalizacao from './components/Totalizacao'


function App() {
  return (
    <div className="row">
      
      <DadosPrincipais />
      <Produtos />
      <Totalizacao />
      
    </div>
  );
}

export default App;
