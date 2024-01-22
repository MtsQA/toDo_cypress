
import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects'

describe('Acessar pagina MCV', () => {
  it('Abrir o site', () => {
    cy.visit('https://todomvc.com/examples/vue/dist/#/')
    telaInicial.inputText()
  })
})

