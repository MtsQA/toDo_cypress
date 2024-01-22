import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects'

describe ('Regressivo toDo App', () => {
    
    contexto('Validar a tela inicial', () => {
        beforeEach(() => {
            cy.visit('/')
        })
    it('Validar a area label de input de Dados', () => {
        telaInicial.validarInput("What needs to be done?")
    })    
        
    })
    contexto('Validar a adição de itens', () => {
        beforeEach(() => {
            cy.visit('/')
        })
        it('Adicionar vários itens', () => {
        
            var todoItens = ['Celular','Computador','Tecnologia',]
    
            todoItens.forEach(function(item, indice, array){
                telaInicial.inputText(item)
            })
            telaInicial.validarContador(3)
        }) 
    })
    contexto('Validar a conclusão de itens', () => {
        beforeEach(()=>{
            cy.visit('/')        
            var todoItens = ['Celular','Computador','Tecnologia',]
    
            todoItens.forEach(function(item, indice, array){
                telaInicial.inputText(item)
            })
        })
        it('Selecionar o 1° item da Lista', () => {
            telaInicial.concluirItem()
            telaInicial.validarContador(2)
            
        }) 
    })
    contexto('Validar o filtro da aplicação', () => {
        beforeEach(()=>{
            cy.visit('/')        
            var todoItens = ['Celular','Computador','Tecnologia',]
    
            todoItens.forEach(function(item, indice, array){
                telaInicial.inputText(item)
            })
            telaInicial.concluirItem()
        })
        it('Validar a lista de itens ativos', () => {
            telaInicial.filtrarItem("Active")
            telaInicial.validarSizeToDo(2)
        })
        it('Validar a lista de itens concluídos', () => {
            telaInicial.filtrarItem("Completed")
            telaInicial.validarSizeToDo(1)
        });
    })
    contexto('Validar a remoção de itens', () => {
        beforeEach(()=>{
            cy.visit('/')        
            var todoItens = ['Celular','Computador','Tecnologia',]
    
            todoItens.forEach(function(item, indice, array){
                telaInicial.inputText(item)
            })
        })
        it('Deleção de um item da lista', () => {
            telaInicial.deletarItem()
            telaInicial.validarSizeToDo(2)
        }) 
    })
})