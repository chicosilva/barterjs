import 'bootstrap/dist/css/bootstrap.min.css';
import DadosPrincipais from './components/DadosPrincipais'
import Produtos from './components/Produtos'
import Totalizacao from './components/Totalizacao'
import {StateProvider} from './context/state'
import {data} from './context/DataContext'

const actions = (state, payload) => ({
    selecionaCliente: () => {
      return {...state, theme: payload}
    },
})

const reducer = (state, action = {type: '', payload: {}}) => {
  return actions(state, action.payload)[action.type]();
}

const App = () => (
  <StateProvider reducer={reducer} inititalState={data}>
    {
      <>
        <div className="row">
          <DadosPrincipais></DadosPrincipais>
          <Produtos></Produtos>
          <Totalizacao></Totalizacao>
        </div>
      </>
    }
  </StateProvider>
)

export default App;
