
import Combo from './Combo'
import {data} from '../context/DataContext'


export default (props) => {

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
                <Combo label="Escolha um cliente" itens={data.clientes} typeAction="selecionaCliente" />
            </div>
        </div>

        <div className="row">
            <div className="col-md-12">
                <br />
            </div>
        </div>

        <div className="row">
            <div className="col-md-12">
                <Combo label="Escolha uma fazenda" itens={data.fazendas} />
            </div>
        </div>

        
    </div>)

}