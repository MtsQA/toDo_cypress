import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects'

describe ('Concluir Itens na lista de toDo', () => {
    
    beforeEach(()=>{
        cy.visit('/')        
        var todoItens = ['Celular','Computador','Tecnologia',]

        todoItens.forEach(function(item, indice, array){
            telaInicial.inputText(item)
        })
    })
    it('Selecionar o 1° item da Lista', () => {
        telaInicial.concluirItem()
    });  
})