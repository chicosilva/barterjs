import React, {useState, useEffect} from 'react';


const FormProduto  = props => {

    const [produto, setstate] = useState({nome: '', valor: 0})

    const handleInputChange = (e) => {
        
        const {name, value} = e.target;
        
        e.target.classList.remove('is-invalid');

        if(value == ""){
            e.target.classList.add('is-invalid');
        }

        setstate({...produto, [name]: value})

    }

    return(
        <form>
            <input className='form-control' name="nome" onChange={handleInputChange} value={produto.nome} placeholder="Nome do produto" />
            <br />
            <input className='form-control' name="valor" onChange={handleInputChange} value={produto.valor} placeholder="Valor" />
            <br />
            <button className="btn btn-success pull-right">Salvar</button>
        </form>
    )
}

export default FormProduto;