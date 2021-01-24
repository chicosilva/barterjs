import {useStateValue} from '../context/state'

export default props => {

    return(
        <select className="form-control">
            <option>{props.label}</option>    
        </select>
    )

}