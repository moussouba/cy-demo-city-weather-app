describe('HOME PAGE', () => {

  describe('Home page Health', () => {
    it('Verify the website health', () => {
      cy.visit('http://localhost:3000')
    })
  })

  describe('Fonctionnalite Meteo', () => {
    it("Rechercher la meteo de Paris", () => {
      cy.get('.search').type("Abidjan{enter}")
      cy.get('.city-temp sup').should('contain', '°C')
    })
  })
  
})
