import {useStateValue} from '../context/state'


export default (props) => {

    const [state, dispatch] = useStateValue();

    return(
        <div className="col-md-3">
            <strong>Total:</strong> {state.theme}
            <br />
            <strong>Responsável:</strong> 
        </div>
    )
}