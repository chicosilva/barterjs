import {useContext} from 'react';
import ProdutoContext from '../context/DataContext'


export default (props) => {

    const context = useContext(ProdutoContext);

    return(
        <div className="col-md-4">
            <strong>Total:</strong> {context.nome}
            <br />
            <strong>Responsável:</strong> {context.total}
        </div>
    )
}