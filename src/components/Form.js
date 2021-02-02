import React, {useState} from 'react';
import {useStateValue} from '../context/state'


const FormProduto  = props => {

    const [produto, setState] = useState({nome: '', valor: 0, id: null})
    const [state, dispatch] = useStateValue();

    const handleInputChange = (e) => {
        
        const {name, value} = e.target;
        
        e.target.classList.remove('is-invalid');

        if(value === ""){
            e.target.classList.add('is-invalid');
        }

        setState({...produto, [name]: value})

    }

    const handleSubmit = (e) => {
        
        e.preventDefault();
        
        produto.id = state.produtos.length + 1;
        produto.valor = parseFloat(produto.valor);
        dispatch({type: 'addProduto', payload: [produto].concat(state.produtos)});
        dispatch({type: 'atualizaValorTotal'});
        
        setState({nome: '', valor: 0, id: null});
        
    }

    return(
        <form onSubmit={handleSubmit}>
            <input className='form-control' name="nome" onChange={handleInputChange} value={produto.nome} placeholder="Nome do produto" />
            <br />
            <input className='form-control' name="valor" onChange={handleInputChange} value={produto.valor} placeholder="Valor" />
            <br />
            <button className="btn btn-success pull-right">Salvar</button>
        </form>
    )
}

export default FormProduto;