
import Combo from './Combo'
import {data} from '../context/DataContext'
import {useStateValue} from '../context/state'


export default (props) => {

    const [state, dispatch] = useStateValue();

    return (<div className="col-md-2">
        
        <div className="row">
            <div className="col-md-12">
                <br />
                <h5>Informações principais:</h5>
                <br />
            </div>
        </div>

        <div className="row">
            <div className="col-md-12">
                <Combo 
                    label="Escolha um cliente"
                    itens={data.clientes}
                    itens_children={state.fazendas}
                    itens_children_choosen={state.fazendas}
                    typeAction="selecionaCliente"
                    auxTypeAction="atualizaListaFazendas"
                />
            </div>
        </div>

        <div className="row">
            <div className="col-md-12">
                <br />
            </div>
        </div>

        <div className="row">
            <div className="col-md-12">
                
                <Combo 
                    label="Escolha uma fazenda"
                    itens={state.cliente ? state.fazendas_cliente : []}
                    typeAction="selecionaFazenda"
                />
                
            </div>
        </div>

        
    </div>)

}