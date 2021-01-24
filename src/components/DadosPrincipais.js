
import {useStateValue} from '../context/state'
import Combo from './Combo'
import {data} from '../context/DataContext'


export default (props) => {

    const [state, dispatch] = useStateValue();

    const handleClick = () => {

        dispatch({type: 'changeTheme', payload: 'outro tema'})
        
    }

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
                <Combo label="Escolha um cliente" itens={data.clientes} />
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