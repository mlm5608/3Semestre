describe('template spec', () => {
  it('', () => {
    cy.visit('/')
  })

  it('Verificar está exibido', () => {
    cy.get("[aria-label='title-head']")
    cy.get("[aria-label='title-head']").should("contain", "Good morning")
  })

  // it('Verificar se tem uma lista com as playlist exibida', () =>{
  //   cy.wait(2000)
  //   cy.get("[aria-label='playlist-item']").should("have.length.greaterThan", 0)
  // })

  it('Clicar em uma opçã de playlist e listar suas musicas', () => {
    cy.get("[aria-label='Funk Hits']").click() 
    // cy.wait(2000)
    // cy.get("[aria-label='music-item']").should("have.length.greaterThan", 0)
  })

  it('Clicar em uma opçã de playlist e listar suas musicas', () => {
    cy.get("[aria-label='Aquariano Nato']").click()

    // cy.scrollTo("top")
  })
})