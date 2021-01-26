export const actions = (state, payload) => ({
    selecionaCliente: () => {
      return {...state, cliente: payload, fazenda: {}}
    },
    selecionaFazenda: () => {
      return {...state, fazenda: payload}
    },
    addProduto: () => {
      return {...state, produtos: payload}
    },
    atualizaListaFazendas: () => {
      return {...state, fazendas_cliente: payload}
    },
})

