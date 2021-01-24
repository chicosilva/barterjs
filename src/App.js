import 'bootstrap/dist/css/bootstrap.min.css';
import DadosPrincipais from './components/DadosPrincipais'
import Produtos from './components/Produtos'
import Totalizacao from './components/Totalizacao'
import {StateProvider} from './context/state'

const inititalState = {theme: 'chicosilva'}

const actions = (state, payload) => ({
    changeTheme: () => {
      
      return {...state, theme: payload}
    },
})

const reducer = (state, action = {type: '', payload: {}}) => {
  return actions(state, action.payload)[action.type]();
}

const App = () => (
  <StateProvider reducer={reducer} inititalState={inititalState}>
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
