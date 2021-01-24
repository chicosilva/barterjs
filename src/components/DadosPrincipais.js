
import {useStateValue} from '../context/state'
import Combo from './Combo'


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
                <Combo label="Escolha um cliente" />
            </div>
        </div>

        <div className="row">
            <div className="col-md-12">
                <br />
            </div>
        </div>

        <div className="row">
            <div className="col-md-12">
                <Combo label="Escolha uma fazenda" />
            </div>
        </div>

        
    </div>)

}