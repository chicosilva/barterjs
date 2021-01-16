import DataContext from '../context/DataContext';
import {useContext, useReducer} from 'react';


export default (props) => {

    const context = useContext(DataContext)

    const redurcer = (state, action) => {
        
        const actions = {

            add: () => {
                return {count: state.count + 1}
            },

            decrement: () => {
                return {count: state.count - 1}
            }
        }

        return actions[action.type]();
    }

    const [state, dispatch] = useReducer(redurcer, {count:0})

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
                <select className="form-control">
                    <option>Combo Cliente</option>    
                </select>
            </div>
        </div>

        <div className="row">
            <div className="col-md-12">
                <br />
            </div>
        </div>

        <div className="row">
            <div className="col-md-12">
                <select className="form-control">
                    <option>Combo Fazenda</option>    
                </select>
            </div>
        </div>

        <div className="row">
            <div className="col-md-12">
                <button onClick={() => dispatch({type: 'add'}) } > ADD </button>
                <button onClick={() => dispatch({type: 'decrement'})} > INC </button>
                {state.count}
            </div>
        </div>

        <div className="row">
            
            <div className="col-md-4">
                <br />
                <strong>Total:</strong> {context.nome}
                <br />
                <strong>Responsável:</strong> {context.total}
            </div>
        </div>

    </div>)

}