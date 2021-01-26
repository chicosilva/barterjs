import React from 'react';

export const data = {
    responsavel: "",
    valorTotal: 0,
    produtos:[{
        id: 1,
        nome: "Produto 1",
        valor: 150
    },{
        id: 2,
        nome: "Produto 2",
        valor: 200
    }],
    cliente: {},
    fazenda: {},
    clientes: [{
        id: 1,
        nome: "Cliente 1"
    },
    {
        id: 2,
        nome: "Cliente 2"
    }],
    fazendas: [{
        id: 1,
        clienteId: 1,
        nome: "Fazenda 1"
    },
    {
        id: 2,
        clienteId: 2,
        nome: "Fazenda 2"
    }],
    fazendas_cliente:[]
}

export default React.createContext(data);