export const actions = (state, payload) => ({
    selecionaCliente: () => {
      return {...state, cliente: payload, fazenda: {}}
    },
    selecionaFazenda: () => {
      return {...state, fazenda: payload}
    },
    atualizaListaFazendas: () => {
      return {...state, fazendas_cliente: payload}
    },
})

