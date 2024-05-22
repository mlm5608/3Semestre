describe('template spec', () => {
  let musicitem;

  before(() => {
    cy.visit('/')
  });

  it('redirecionar para tela de busca', () => {
    cy.get("[href='/Search']").click()
    cy.scrollTo("top")
  });

  it('Procurar muúsica preferida', () => {
    cy.get("[data-testid='campoBusca']").type("Quero Ser Feliz Também");

    cy.get("[aria-label='music-item']").should("have.length.greaterThan", 0)
  })

  it('clicar na musica desejada', () => {
    cy.wait(2000)
    musicitem = cy.get("[aria-label='music-item']").contains("Natiruts")
    // cy.get("[aria-label='music-item']").contains("Natiruts").click()
    musicitem.click()
  })

  it('clicar no curtir da música', () => {
    if (musicitem) {
      cy.get(musicitem).get("[data-testid='icon-button']").first().click()
    }
  })
})