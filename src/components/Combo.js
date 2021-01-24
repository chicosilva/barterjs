import {useStateValue} from '../context/state'
import {data} from '../context/DataContext'


export default props => {

    const [state, dispatch] = useStateValue();

    const options = props.itens.map(item => <option 
            key={item.id}
            value={item.id}>
                {item.nome}
            </option>
        )

    const handleChange = (item) => {
        
        const cliente = props.itens.find(c => c.id == item.target.value);
        
        dispatch({type: 'selecionaCliente', payload: cliente})
    }

    return(
        <select className="form-control" onChange={handleChange}>
            <option>{props.label}</option>
            {options}
        </select>
    )

}