describe("Test the output after generate report", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-school/e2e")
    })
  
    it("Test the generate report button", () => { 
      cy.get("[data-cy=report-title]").should("not.exist")
      cy.get("[data-cy=generate-report-button]").click()
      cy.get("[data-cy=report-title]").should("be.visible")
    }) 
  
    it("Check name of farm, user, language", () => {
      cy.get("[data-cy=generate-report-button]").click()
      cy.get("[data-cy=farm-name]").should("have.text","Farm:Sample Farm")
      cy.get("[data-cy=user-name]").should("contain.text","manager1")
      cy.get("[data-cy=lang-name]").should("have.text","English")
    })
  })