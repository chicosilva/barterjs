import {useStateValue} from '../context/state'

export default props => {

    const [state, dispatch] = useStateValue();

    const options = props.itens.map(item => <option 
            key={item.id}
            value={item.id}>
                {item.nome}
            </option>
        )

    const handleChange = (item) => {
        
        const obj = props.itens.find(c => c.id == item.target.value);
        dispatch({type: props.typeAction, payload: obj})
    }

    return(
        <select className="form-control" onChange={handleChange}>
            <option>{props.label}</option>
            {options}
        </select>
    )

}