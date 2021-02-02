import {useStateValue} from '../context/state'


export default props => {
    
    const [state, dispatch] = useStateValue();

    const remocaoProduto = (produto) => {
        dispatch({type: "removerProduto", payload: produto});
        dispatch({type: 'atualizaValorTotal'});
    }

    return(
        <div className="col-md-12">
            <div className="row">
                <div className="col-md-4">
                    {props.produto.nome}
                </div>

                <div className="col-md-4">
                    R$ {props.produto.valor}
                </div>

                <div className="col-md-4">
                    <button type="button" onClick={ (e) => remocaoProduto(props.produto)} className="btn btn-danger">Remover</button>
                </div>
                <div className="col-md-12">
                    <hr />
                </div>
            </div>
        </div>
    )
}