import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects'

describe ('Adicionar Itens na lista de toDo', () => {
    
    beforeEach(()=>{
        cy.visit('/')
    })
    it('Adicionar item na lista', () => {
        telaInicial.inputText('Mateus')
       
      })
    it('Adicionar vários itens', () => {
        
        var todoItens = ['Celular','Computador','Tecnologia',]

        todoItens.forEach(function(item, indice, array){
            telaInicial.inputText(item)
        })
    })  
})