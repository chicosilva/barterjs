import {useStateValue} from '../context/state'
import {data} from '../context/DataContext'


export default props => {

    const [state, dispatch] = useStateValue();
    
    const options = data.clientes.map(item => <option 
            key={item.id}
            value={item.id}>
                {item.nome}
            </option>
        )

    const handleChange = (item) => {
        //dispatch({type: 'selecionaCliente', payload: item})
    }

    return(
        <select className="form-control" onChange={handleChange}>
            <option>{props.label}</option>
            {options}
        </select>
    )

}