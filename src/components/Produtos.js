import RowProduto from './RowProduto'
import {useStateValue} from '../context/state'
import FormProduto from './Form'


export default (props) => {

    const [state, dispatch] = useStateValue();
    const produtos = state.produtos.map(produto => <RowProduto produto={produto} key={produto.id} />)

    return (
        
        <div className="col-md-7">
            
            <div className="row">
                
                <div className="col-md-12">
                    <br />
                        <FormProduto />
                    <hr />
                    
                </div>

                {produtos}

            </div>

        </div>
  
    )
    
}    