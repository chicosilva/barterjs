import React from 'react';

export const data = {
    responsavel: "",
    valorTotal: 0,
    cliente:{},
    clientes: [{
        id: 1,
        nome: "Cliente 1"
    },
    {
        id: 2,
        nome: "Cliente 2"
    }],
    fazendas: []
}

export default React.createContext(data);