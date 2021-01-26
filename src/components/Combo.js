import {useStateValue} from '../context/state'

export default props => {

    const [state, dispatch] = useStateValue();
    const itens = props.itens;

    const options = itens.map(item => <option 
            key={item.id}
            value={item.id}>
                {item.nome}
            </option>
        )

    const handleChange = (item) => {
        
        const obj = itens.find(c => c.id == item.target.value);
        dispatch({type: props.typeAction, payload: obj})
        
        if(props.auxTypeAction != undefined){
            
            if(obj != undefined){
                const children = props.itens_children.filter(c => c.clienteId == obj.id);
                
                dispatch({type: props.auxTypeAction, payload: children});
            }
            
        }
        
    }

    return(
        <select className="form-control" onChange={handleChange}>
            <option>{props.label}</option>
            {options}
        </select>
    )

}