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
    removerProduto: () => {
      
      const produtos = state.produtos.filter(item => item.id !== payload.id );
      return {...state, produtos: produtos}
    },
    atualizaValorTotal: () => {
      
      const valorTotal = state.produtos.reduce(function(total, arr){
        return total + arr.valor;
      }, 0);

      return {...state, valorTotal: valorTotal};

    },
    atualizaListaFazendas: () => {
      return {...state, fazendas_cliente: payload}
    },
})

