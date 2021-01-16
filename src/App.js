import 'bootstrap/dist/css/bootstrap.min.css';
import DadosPrincipais from './components/DadosPrincipais'
import Produtos from './components/Produtos'
import Totalizacao from './components/Totalizacao'
import DataContext, {data} from './context/DataContext'


function App() {

  return (
    <div className="row">
      
      <DataContext.Provider value={data}>
        <DadosPrincipais />
        <Produtos />
        <Totalizacao />
      </DataContext.Provider>
      
    </div>
  );
}

export default App;
