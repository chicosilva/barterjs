export default props => {
    
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
                    <button className="btn btn-danger">Remover</button>
                </div>
                <div className="col-md-12">
                    <hr />
                </div>
            </div>
        </div>
    )
}