describe('template spec', () => {
  let musicaPreferida;
  before(() => {
    cy.visit('/')
  });

  it('Visualizar playlists e executar uma música', () => {
    cy.get("[aria-label='title-head']").should("contain", "Good morning")
    cy.get("[aria-label='playlist-item']").should("have.length.greaterThan", 0)
    cy.get("[aria-label='playlist-item']").first().click()
    cy.get("[aria-label='music-item']").should("have.length.greaterThan", 0)
    cy.get("[aria-label='music-item']").first().click()
  })

  it("Navegar entre playlists e executar outra música", () => {
    cy.wait(5000)
    cy.get("[aria-label='back-button']").click()
    cy.get("[aria-label='playlist-item']").eq(1).click()
    cy.get("[aria-label='music-item']").should("have.length.greaterThan", 0)
    cy.get("[aria-label='music-item']").first().click()
  })

  it("Procurar e favoritar uma música", () => {
    cy.wait(5000)
    cy.get("[aria-label='back-button']").click()
    cy.get("[href='/Search']").click()
    cy.get("[data-testid='campoBusca']").type("Quero Ser Feliz Também");
    cy.get("[aria-label='music-item']").should("have.length.greaterThan", 0)
    musicaPreferida = cy.get("[aria-label='music-item']").first()
    musicaPreferida.click()
    cy.get(musicaPreferida).get("[data-testid='icon-button']").first().click()
  })

  it('Verificar música favoritada na tela de Favoritos', () => {
    cy.wait(5000)
    cy.get("[href='/Favorites']").click()
    cy.get("[aria-label='music-item']").should("have.length.greaterThan", 0)
    musicaPreferida.click()
  })
})