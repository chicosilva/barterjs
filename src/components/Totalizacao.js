import {useStateValue} from '../context/state'


export default (props) => {

    const [state, dispatch] = useStateValue();

    return(
        <div className="col-md-3">
            <strong>Total:</strong> R$ {state.valorTotal}
            <br />
            <strong>Cliente:</strong> {state.cliente.nome || "--"}
            <br />
            <strong>Responsável:</strong> {state.responsavel || "--"}
        </div>
    )
}