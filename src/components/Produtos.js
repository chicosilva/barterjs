import ProdutoContext from '../context/DataContext';
import {useContext} from 'react';

export default (props) => {

    const context = useContext(ProdutoContext);

    return (
        
        <div className="col-md-7">
        
            <div className="row">
                
                <div className="col-md-12">
                    
                    <br />
                    <h5>Produtos:</h5>
                    <br />
                </div>

                <div className="col-md-4">
                    Nome do produto
                </div>

                <div className="col-md-4">
                    R$ 6.600
                </div>

                <div className="col-md-4">
                    <button className="btn btn-danger">Remover</button>
                </div>

                <div className="col-md-12">
                    <hr />
                </div>
                <div className="col-md-4">
                    Nome do produto
                </div>

                <div className="col-md-4">
                    R$ 6.600
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