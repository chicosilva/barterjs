import {useStateValue} from '../context/state'


export default (props) => {

    const [state, dispatch] = useStateValue();

    return(
        <div className="col-md-3">
            <br />
            <h5>Totalização:</h5>
            <br />
            <strong>Total:</strong> R$ {state.valorTotal}
            <br />
            <strong>Cliente:</strong> {state.cliente ? state.cliente.nome : "--"}
            <br />
            <strong>Fazenda:</strong> {state.fazenda.nome || "--"}
        </div>
    )
}